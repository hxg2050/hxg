import './style.scss';
import { Animation, Application, Graphics, Rect, Resource, Sprite, SpriteSheet, SpriteSheetAnimation, Text, Texture, Ticker, Transform, canvas2d, ticker } from '../src';
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
	rectNode.size.set(200);
	rectNode.position.set(100, 100);
	rect.fill = '#aaaa00'
	rect.radius = 60;
	// rectNode.rotation = 90;

	// const textNode = app.stage.addChild(new Transform(Text));
	// textNode.position.set(100);
	// textNode.width = 200;
	// textNode.height = 200;
	// const text = textNode.getComponent(Text)!;
	// text.value = 'ni好'
	// console.log(text);

	let json = await Resource.load('./example/assets/animations/Samurai/Attack.json');
	let img = await Resource.load('./example/assets/animations/Samurai/Attack.png');
	console.log(json);
	// 如果要控制动画大小可以使用父节点包裹的方式控制scale属性
	const group = app.stage.addChild(new Transform);
	group.scale.set(5);

	const node = group.addChild(new Transform(Sprite));
	// node.anchor.set(0.5);
	const sprite = node.getComponent(Sprite)!;
	const spriteSheet = node.addComponent(SpriteSheet);
	const ssa = node.addComponent(SpriteSheetAnimation);
	ssa.fps = 8;
	ssa.loop = -1;
	const func = () => {
		console.log('播放到第', ssa.time, '帧');
	};
	ssa.addFrameAction(2, func, this);
	ssa.emitter.on(Animation.Event.ENDED, () => {
		console.log('单次动画播放完成');
		ssa.removeFrameAction(2, func, this);
	}, this);
	spriteSheet.load(json.data, img);


	ticker.once('update', () => {
		ssa.play('Attack');
	}, this);

    console.log(app);
	// let json = await Resource.load('./example/assets/animations/Samurai/Attack.json');
	// let img = await Resource.load('./example/assets/animations/Samurai/Attack.png');
	// console.log(json);
	// // 如果要控制动画大小可以使用父节点包裹的方式控制scale属性
	// const group = app.stage.addChild(new Transform);
	// group.scale.set(2);
	
	// const node = group.addChild(new Transform(Sprite));
	// // node.anchor.set(0.5);
	// const sprite = node.getComponent(Sprite)!;
	// const spriteSheet = node.addComponent(SpriteSheet);
	// spriteSheet.load(json.data, img);
	
	// ticker.once('update', () => {
	// 	// ssa.play('Attack');
	// 	spriteSheet.show('0.png');
	// 	sprite.resize();
	// }, this);
	
	// 动画播放只能在下一帧执行
	// let img2 = await Resource.load('./example/assets/images/img.png');
	// const spriteNode = app.stage.addChild(new Transform(Sprite));
	// spriteNode.anchor.set(0.5);
	// spriteNode.position.set(100);
	// const sprite2 = spriteNode.getComponent(Sprite)!;
	// sprite2.texture = new Texture(img2.data);
	// sprite2.resize();

})();