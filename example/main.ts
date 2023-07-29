import './style.scss';
import { Animation, Application, Graphics, Node, Rect, Resource, Sprite, SpriteSheet, SpriteSheetAnimation, Text, Texture, Ticker, Transform, canvas2d, ticker } from '../src';
import { App } from './TsxTest';

/**
 * 创建应用
 */
const app = new Application({
	width: 1280,
	height: 720
});

const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
app.use(canvas2d(canvas));

class GameApp extends Node {
	fps = this.addComponent(Text);
	start() {
		this.size.set(200, 50);
		this.fps.fontSize = 40;
	}
	update(time: number): void {
        this.fps.value = (1000 / time).toFixed(2) + ' fps';
	}
}

app.stage.addChild(new GameApp());