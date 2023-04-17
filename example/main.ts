import './style.scss';
import { Application, Graphics, Rect, Resource, Sprite, SpriteSheet, SpriteSheetAnimation, Transform, canvas2d } from '../src';
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

(async () => {
	const rectNode = app.stage.addChild(new Transform(Graphics));
	const rect = rectNode.addComponent(Rect);
	rectNode.size.set(128);
	rectNode.position.set(200, 200);
	rect.fill = '#aaaa00'
	rectNode.anchor.set(0.5);
	// rectNode.rotation = 90;

	let json = await Resource.load('./example/assets/animations/Samurai/Attack.json');
	let img = await Resource.load('./example/assets/animations/Samurai/Attack.png');
	console.log(json);
	const node = app.stage.addChild(new Transform(Sprite));
	node.position.set(200, 200);
	node.size.set(128, 128);
	// node.anchor.set(0.5);
	node.scale.set(4);
	const sprite = node.getComponent(Sprite)!;
	const spriteSheet = node.addComponent(SpriteSheet);
	const ssa = node.addComponent(SpriteSheetAnimation);
	ssa.fps = 10;
	spriteSheet.load(json.data, img);
	setTimeout(() => {
		ssa.play('Attack');
	});

	// setTimeout(() => {
	// 	ssa.stop();
	// }, 1000);
	console.log(node);
})();