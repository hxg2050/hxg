// import Application from "./core/Application";
// import Renderer from "./core/render/Renderer";
// import Resource from "./core/resource/Resource";
// import Sprite from "./core/src/components/Sprite";
// import Transform from "./core/src/Transform";
// import Vector2 from "./core/src/Vector2";
// import Ticker from "./core/ticker/Ticker";
import { Renderer, Resource, Sprite, Ticker, Transform, Vector2 } from '../src';
import { Application } from '../src';
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


const source = '../assets/images/img.png';

Resource.load(source).then((img) => {
	const node = new Transform(Sprite);
	const sprite = node.getComponent(Sprite)!;
	sprite.source = img;
	node.position = new Vector2(300, 300);
	node.anchor = new Vector2(0.5, 0.5);
	node.size = new Vector2(200, 200);

	app.stage.children.push(node);

	const node2 = new Transform(Sprite);
	const sprite2 = node2.getComponent(Sprite)!;
	sprite2.source = img;
	node2.position = new Vector2(200, 200);
	node2.size = new Vector2(100, 100);
	node.addChild(node2);
	ticker.on('update', () => {
		node.rotation += 2 * Math.PI / 180;
		node2.rotation += 1 * Math.PI / 180;
	});
});