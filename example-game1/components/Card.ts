import { Button, Component, TouchEvent, Transform } from "../../src";
import { createSpriteByName } from "../node/createSpriteByName";
import { AudioManager } from "./AudioManager";
import { Map } from "./Map";

export class Card extends Component {
    cover: boolean = false;

    x!: number;
    y!: number;
    z!: number;
    type!: string;

    mask!: Transform;

    start() {
        const button = this.node.addComponent(Button);
        button.add(this.onClick, this);
        // this.node.touch = true;
        // this.node.deliver = false;
        // this.node.emitter.on(TouchEvent.TOUCH_TAP, this.onClick, this);
        const sprite = createSpriteByName('mask');
        this.mask = sprite.node;
        this.node.addChild(this.mask);
    }

    set(x: number, y: number, z: number, type: string) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.type = type;
        this.node.position.set(this.x * 36, this.y * 36);
    }

    inMap = true;

    update() {
        if (!this.inMap) {
            return;
        }
        this.coverTest(this.z + 1);
        this.mask.active = this.cover;
    }

    coverTest(z: number) {
        const map = Map.ins().list[z];
        if (!map) {
            this.cover = false;
            return;
        } else {
            const { x, y } = this;
            for (let i = 0; i < 3; i ++) {
                for (let j = 0; j < 3; j ++) {
                    if (map[y + i - 1] && map[y + i - 1][x + j - 1]) {
                        this.cover = true;
                        return;
                    }
                }
            }
            this.cover = false;
        }
        this.coverTest(z + 1);
    }

    /**
     * 点击移动到底部自己的卡组
     */
    onClick() {
        AudioManager.ins().play('click_mp3');
        if (Map.ins().isOver) {
            console.log('游戏已结束，等待结束界面');
            return;
        }
        if (this.cover) {
            return;
        }
        const map = Map.ins().list[this.z];
        const { x, y } = this;
        map[y][x] = 0;
        Map.ins().addCard(this);
        this.node.emitter.off(TouchEvent.TOUCH_TAP, this.onClick, this);
        this.inMap = false;
    }
}