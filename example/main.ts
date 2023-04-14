import './style.scss';
import { Application, Resource, Sprite, SpriteSheet, SpriteSheetAnimation, Transform, canvas2d } from '../src';
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
	let json = await Resource.load('./example/assets/animations/Samurai/Attack.json');
	let img = await Resource.load('./example/assets/animations/Samurai/Attack.png');
	console.log(json);
	const node = app.stage.addChild(new Transform(Sprite));
	node.size.set(200, 200);
	const sprite = node.getComponent(Sprite)!;
	const spriteSheet = node.addComponent(SpriteSheet);
	const ssa = node.addComponent(SpriteSheetAnimation);
	ssa.fps = 1;
	spriteSheet.load(json.data, img);
	setTimeout(() => {
		ssa.play('Attack');
	});

	// setTimeout(() => {
	// 	ssa.stop();
	// }, 1000);
	console.log(node);
})();