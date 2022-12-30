import './style.scss';
import { Renderer, Resource, Sprite, Ticker, TouchEvent, Transform, Vector2 } from '../src';
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
const bg = bgImg.getComponent(Sprite)!;
const source = '../assets/images/img.png';
app.stage.addChild(bgImg);
// bgImg.rotation = 45;
bgImg.position.x = 200;
bgImg.position.y = 200;
// bgImg.scale = new Vector2(2, 2);
// bgImg.anchor = new Vector2(0.5, 0.5);

const textNode = new Transform(Text);
const text = textNode.getComponent(Text)!;
text.value = '你好啊啊啊啊';
bgImg.addChild(textNode);
textNode.position.x = 0;
textNode.position.y = 0;
textNode.size.set(100, 100);
text.autoWarp = true;
text.fontSize = 33;
// text.italic = true;
// text.bold = true;
text.color = '#FF0000';
// textNode.rotation = 45;
// textNode.anchor = new Vector2(0.5, 0.5);
ticker.on('update', () => {
	// bgImg.rotation += 1;
});

// 计算canvas缩放之后的鼠标或点击的缩放
// 这个和屏幕适配有关系
const stageWidth = app.config.width;
const canvasRealWidth = canvas.clientWidth;
const canvasScale = stageWidth / canvasRealWidth;
canvas.addEventListener('click', (evt: MouseEvent) => {
	app.eventSystem.emit(TouchEvent.TOUCH_TAP, {
		x: evt.offsetX * canvasScale,
		y: evt.offsetX * canvasScale,
	});
	console.log('click', evt);
});

bgImg.touch = true;
bgImg.emitter.on(TouchEvent.TOUCH_TAP, () => {
	console.log('触摸点击事件_bgImg');
	bgImg.scale.add(new Vector2(0.1, 0.1));
});
textNode.touch = true;
textNode.deliver = false;
textNode.emitter.on(TouchEvent.TOUCH_TAP, () => {
	console.log('触摸点击事件_textNode');
	textNode.scale.add(new Vector2(0.1, 0.1));
});
bgImg.name = 'bgImg';

Resource.load(source).then((img) => {
	bg.source = img;

console.log(bgImg.getWordPoisition());
console.log(textNode.getWordPoisition());
});