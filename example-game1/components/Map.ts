import { Component, Transform } from "../../src";
import { Card } from "./Card";
import * as TWEEN from '@tweenjs/tween.js';
import { AudioManager } from "./AudioManager";
import { gameOverPanel } from "../prefabs/gameOverPanel";
import { createSpriteByName } from "../node/createSpriteByName";


const createCard = (x: number, y: number, z: number) => {
    // return new Card();
    const i = Math.ceil(Math.random() * 16);
    const sprite = createSpriteByName('icon' + i);
    const card = sprite.addComponent(Card);
    card.set(x, y, z, 'icon' + i);
    return card;
}

/**
 * 分层地图
 */
export class Map extends Component {
    tweenMap = new WeakMap();

    list: number[][][] = [
    ];

    static _ins: Map;

    start() {
        if (!Map._ins) {
            Map._ins = this;
        }
    }

    static ins() {
        return Map._ins;
    }

    box!: Transform;

    cards: Card[] = [];

    isOver = false;

    group!: Transform;

    /**
     * 初始化地图
     */
    init(x: number, y: number, z: number, group?: Transform) {
        if (group) {
            this.group = group;
        } else {
            group = this.group;
        }
        
        this.isOver = false;
        this.cards.forEach(val => val.node.destroy());
        this.cards.length = 0;
        this.box.removeChildren();
        this.group.removeChildren();
        
        // 设置默认值
        let map: number[][][] = new Array(z);
        for (let i = 0; i < z; i++) {
            map[i] = new Array(z);
            for (let j = 0; j < y; j++) {
                map[i][j] = new Array(x).fill(0);
            }
        }
        for (let i = 0; i < z; i++) {
            for (let j = 0; j < y; j++) {
                for (let k = 0; k < x; k++) {
                    if (Math.random() >= 0.5) {
                        if (
                            !map[i][j][k]
                            && map[i][j - 1] && !map[i][j - 1][k]
                            && !map[i][j - 1][k - 1]
                            && !map[i][j - 1][k + 1]
                            && !map[i][j][k - 1]
                        ) {
                            const card = createCard(k, j, i);
                            group.addChild(card.node);
                            map[i][j][k] = 1;
                        }
                    }
                }
            }
        }

        this.list = map;
    }

    /**
     * 添加一个卡片
     * @param card 
     */
    addCard(card: Card) {
        let index = this.resetPushCardPosition(card);

        card.node.position.set(card.node.getWordPoisition());
        this.node.addChild(card.node);

        const boxPosi = this.box.getWordPoisition();
        const boxOffset = this.box.getOffset();

        const tween = this.tweenGet(card);
        tween.to({
            x: boxPosi.x - boxOffset.x + index * 72,
            y: boxPosi.y
        }, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(() => {
                this.clearCardTest();
            })
            .start();
        // 游戏结束判定
        this.gameOverTest();
        if (this.isOver) {
            setTimeout(() => {
                const node = gameOverPanel(false);
                this.node.addChild(node);
                new TWEEN.Tween(node.scale)
                    .to({
                        x: 1,
                        y: 1
                    }, 100)
                    .start();
            }, 1000);
        }
        return this.isOver;
        // 游戏结束判定
        // if (this.cards.length >= 7) {
        //     console.log('游戏结束');
        //     return false;
        // }
    }

    tweenGet(card: Card) {
        if (this.tweenMap.has(card)) {
            TWEEN.remove(this.tweenMap.get(card));
        }
        const tween = new TWEEN.Tween(card.node.position);
        this.tweenMap.set(card, tween);
        return tween;
    }

    /**
     * 从新设置card的位置
     * 返回新插入card的真实位置
     */
    resetPushCardPosition(card: Card) {
        let lastCard: Card = this.cards[0];

        let canInsert = false;
        let i: number = 0;
        for (i = 0; i < this.cards.length; i++) {
            const item = this.cards[i];
            // 可以插入
            if (lastCard.type != item.type && canInsert) {
                break;
            }

            if (item.type == card.type) {
                canInsert = true;
            }
            lastCard = item;
        }

        this.cards.splice(i, 0, card);
        this.resetCardPosition(i);
        return i;
    }

    /**
     * 重新矫正卡片位置
     * @param number inedx 排除之外的卡片
     */
    resetCardPosition(index?: number) {

        const boxPosi = this.box.getWordPoisition();
        const boxOffset = this.box.getOffset();

        for (let i = 0; i < this.cards.length; i++) {
            if (index != undefined && i == index) {
                continue;
            }
            this.tweenGet(this.cards[i])
                .to({
                    x: boxPosi.x - boxOffset.x + i * 72,
                    y: boxPosi.y
                }, 200)
                .start()
        }
    }

    /**
     * 判断消除
     */
    clearCardTest() {

        let lastCard: Card = this.cards[0];

        let count = 0;
        let i: number = 0;
        for (i = 0; i < this.cards.length; i++) {
            const item = this.cards[i];
            if (item.type == lastCard.type) {
                count++;
            } else {
                count = 1;
            }
            if (count == 3) {
                const removeCards = this.cards.splice(i - 2, 3);
                removeCards.forEach(val => val.node.destroy());
                AudioManager.ins().play('clear_mp3');
                break;
            }
            lastCard = item;
        }

        this.resetCardPosition();
    }

    /**
     * 提前判断游戏是否结束
     */
    gameOverTest() {
        let cards = this.cards.concat();
        let lastCard: Card = cards[0];

        let count = 0;
        let i: number = 0;
        for (i = 0; i < cards.length; i++) {
            const item = cards[i];
            if (item.type == lastCard.type) {
                count++;
            } else {
                count = 1;
            }
            if (count == 3) {
                cards.splice(i - 2, 3);
                break;
            }
            lastCard = item;
        }
        this.isOver = cards.length >= 7;
        return this.isOver;
    }
}