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
	fps: Text;

	constructor() {
		super();
		this.fps = this.addComponent(Text);

	}
	start() {
		this.fps.fontSize = 40;
		this.size.set(300, 50);
		console.log('start');
	}

	lastTime = 0;
	update(time: number): void {
		this.lastTime += time;
		if (this.lastTime >= 100) {
			this.fps.value = (1000 / time).toFixed(2) + '';
			this.lastTime -= 100;
		}
	}
}

app.stage.addChild(new GameApp());
console.log(app);