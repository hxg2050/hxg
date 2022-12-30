import './style.scss';
import { Layout, Renderer, Resource, Sprite, Ticker, TouchEvent, Transform, Vector2 } from '../src';
import { Application } from '../src';
import { Text } from '../src/core/component/Text';
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
/**
 * 设置canvas大小
 */
canvas.width = app.config.width;
canvas.height = app.config.height;

/**
 * 自定义渲染器
 */
const renderer = new Renderer(canvas.getContext('2d')!, app);
/**
 * 创建一个刷新器
 */
const ticker = new Ticker();
ticker.start();
ticker.on('update', renderer.render, renderer);

const bgImg = new Transform(Sprite);
bgImg.anchor.set(0.5, 0.5);
const bg = bgImg.getComponent(Sprite)!;
const source = '../assets/images/img.png';
app.stage.addChild(bgImg);
ticker.on('update', () => {
	// console.log(bgImg);
	// bgImg.rotation ++;
});
Resource.load(source).then((img) => {
	bg.source = img;
	const layout = bgImg.addComponent(Layout);

	layout.top = 0;
	layout.left = 0;
	layout.right = 0;
	layout.bottom = 0;
	setInterval(() => {
		bgImg.scale.add(-0.001);
	}, 1000/60);
});