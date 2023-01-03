import './style.scss';
import { Audio, canvas2d, Layout, TouchEvent, Transform } from '../src';
import { Application } from '../src';
import { Text, TextAlgin } from '../src/core/component/Text';
import { ScaleAnimation } from './component/ScaleAnimation';
import { scaleSprite } from './prefab/scaleSprite';
import { createText } from './prefab/createText';
import { createSprite } from './prefab/createSprite';
// import horse from './assets/audio/horse.mp3'
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
const context = canvas.getContext('2d')!;
const playButton = createText('开始播放', 50);
// playButton.rotation = 45;
const playText = playButton.getComponent(Text)!;
playText.color = '#FF0000';
// playText.fontSize = 28;
playText.autoWarp = true;
playText.letterPacing = 10;
playText.lineSpace = 10;
playButton.touch = true;
playButton.addComponent(Layout).left = 0;
const pauseButton = createText('暂停播放');
pauseButton.touch = true;
// pauseButton.rotation = 180
pauseButton.anchor.set(0.5, 0);
const layout = pauseButton.addComponent(Layout);
// layout.left = 0;
layout.right = 0;
layout.vertical = 0;
const stopButton = createText('停止播放');
stopButton.getComponent(Text)!.color = '#00FF00'
stopButton.touch = true;
stopButton.addComponent(Layout).right = 0;

// stopButton.position.x = 100;

createSprite('./example/assets/images/img.png').then((node: Transform) => {
	console.log(node);
	// node.size.x = 100;
	playButton.emitter.once(Transform.Event.TICKER_AFTER, () => {
		node.size.set(playButton.size);
	}, playButton);
	app.stage.addChild(node);
	app.stage.addChild(playButton);
	app.stage.addChild(pauseButton);
	app.stage.addChild(stopButton);
});
// 开始播放
playButton.emitter.on(TouchEvent.TOUCH_TAP, () => {
	const audio = app.stage.getComponent(Audio)!;
	audio.play();
	console.log('1234567890开始播放', playButton.size);
});

// 暂停播放
pauseButton.emitter.on(TouchEvent.TOUCH_TAP, () => {
	const audio = app.stage.getComponent(Audio)!;
	audio.pause();
	console.log('暂停播放', playButton.size);
});

// 停止播放
stopButton.emitter.on(TouchEvent.TOUCH_TAP, () => {
	const audio = app.stage.getComponent(Audio)!;
	audio.stop();
	console.log('停止播放');
});

// const node = new Transform();
// const audio = node.addComponent(Audio);
const url = './example/assets/audio/horse.mp3'
const audio = document.createElement('audio');
audio.src = url;
// audio.controls = true;
// const source = document.createElement('source');
// audio.append(source);
// source.src = url
// document.body.append(audio);

audio.addEventListener('loadedmetadata', () => {
	console.log('load');
	const audi = app.stage.addComponent(Audio);
	audi.source = audio;
	audi.loop = -1;
	// audi.play();
});
document.addEventListener('click', () => {
	// console.log('播放音频');
	// audio.pause();
	// // 设置播放起始时间，当前播放的时间
	// audio.currentTime = 0;
	// // 音频播放速度0.25-5.0，不在此范围将被静音
	// audio.playbackRate = 1.0;
	// // 获取音频总时长
	// console.log(audio.duration);
	// audio.play();
	// const audio = app.stage.getComponent(Audio)!;
	// audio.volume = 0.1;
	// audio.play();
});
// function addClickEvent() {
	// const onClick = function() {
	// 	console.log(this);
	// }
	// document.addEventListener('click', onClick.bind(this));
	// document.removeEventListener('click', onClick.bind(this));
// }
// new addClickEvent();
// const img = new Image();
// img.src = './example/assets/images/img.png'