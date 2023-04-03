import './style.scss';
import { Application, canvas2d, Graphics, ImageTexture, Rect, Resource, Sprite, Transform } from '../src';

/**
 * 创建应用
 */
const app = new Application({
	width: 1280,
	height: 720
});

const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
app.use(canvas2d(canvas));

Resource.load('../example-game1/assets/image/icon4.png').then((res) => {
	const iTexture = new ImageTexture(res.data);
	const spriteNode = app.stage.addChild(new Transform(Sprite));
	const sprite = spriteNode.getComponent(Sprite)!;
	sprite.texture = iTexture;
	sprite.resize();
	console.log(spriteNode);

	const node = app.stage.addChild(new Transform(Graphics));
	node.position.set(100, 100);
	node.size.set(100, 100);
	// node.rotation = 45;
	const r = node.addComponent(Rect)!;
	r.radius = 10;
	r.fill = '#0000FF'
	// r.storke = '#ff0000'
	// r.storkeWidth = 8;
	// console.log(node);
});