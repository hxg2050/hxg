import './style.scss';
import { Resource } from '../src/core/resource';
import { LoadResListConfig } from '../src/core/resource/GroupLoader';
import { Application, canvas2d, Graphics, Node, Rect, Sprite, Ticker, ticker, Transform } from '../src';
import { createText } from '../example-game1/node/createText';
import { FPS } from '../example-game1/components/FPS';
import { createSpriteByName } from '../example-game1/node/createSpriteByName';
// import { webgl } from '../src/core/webgl';

/**
 * 创建应用
 */
 const app = new Application({
	width: 720,
	height: 1280
});

/**
 * 获取canvas
 */
const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
// 此处自定义和视图渲染相关的，默认实现了canvas2d相关的逻辑，理论上支持任何渲染模式，包括使用webgl和html以及其它的，例如pixi
app.use(canvas2d(canvas));
class Grid extends Node {

    background: Rect;

    constructor() {
        super();
        this.size.set(200, 100);
        this.addComponent(Graphics);
        this.background = this.addComponent(Rect, {
            radius: 50
        });
    }
}

app.stage.addChild(new Grid);