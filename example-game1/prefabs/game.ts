import { Layout, Ticker, TouchEvent, Transform } from "../../src";
import { Map } from "../components/Map";
import { createSpriteByName } from "../node/createSpriteByName";
import { createText } from "../node/createText";
import * as TWEEN from '@tweenjs/tween.js';
import { AudioManager } from "../components/AudioManager";


const tweenTicker = new Ticker();
tweenTicker.on('update', () => {
    TWEEN.update();
});
tweenTicker.start();
export function game(stage: Transform) {
    stage.touch = true;
    stage.emitter.once(TouchEvent.TOUCH_BEGIN, () => {
        AudioManager.ins().playBgm();
        stage.touch = false;
    }, stage);
    stage.addComponent(AudioManager);
    stage.addComponent(Map);
    const title = createText('每日一关');
    title.node.anchor.set(0.5, 0);
    stage.addChild(title.node);
    const cl = title.node.addComponent(Layout);
    cl.vertical = 0;
    title.fontSize = 30;
    // title.color = '#FFFFFF';
    title.node.position.y = 30;

    const input = createSpriteByName('mask');
    // 配置地图相关
    Map.ins().box = input.node;
    const group = new Transform();
    group.position.set(36 * 9 / 2, 10* 36 / 2);
    Map.ins().init(10, 10, 10, group);
    stage.addChild(group);

    input.node.size.set(72*7, 72);
    input.node.anchor.set(0.5, 0);
    stage.addChild(input.node);
    const il = input.node.addComponent(Layout);
    il.vertical = 0;
    il.bottom = 300;
}