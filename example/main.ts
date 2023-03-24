// import './style.scss';
// import { Resource } from '../src/core/resource';
// import { Application, canvas2d, Sprite, Ticker, ticker, TouchEvent, Transform } from '../src';
// import { createText } from '../example-game1/node/createText';
// import { FPS } from '../example-game1/components/FPS';
// import { ImageTexture } from '../src/core/texture';

// /**
//  * 创建应用
//  */
// const app = new Application({
// 	width: 720,
// 	height: 1280
// });

// const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
// app.use(canvas2d(canvas));
// Resource.load('../example-game1/assets/image/icon4.png').then((res) => {
// 	const iTexture = new ImageTexture(res.data);
// 	const spriteNode = new Transform(Sprite);
// 	const sprite = spriteNode.getComponent(Sprite)!;
// 	sprite.texture = iTexture;
// 	sprite.resize();

// 	app.stage.addChild(spriteNode);
// 	// spriteNode.size.set(200, 200);
// 	// spriteNode.scale.set(1.5, 2);
// 	spriteNode.anchor.set(0.5, 0.5);

// 	spriteNode.position.x = 100;
// 	spriteNode.position.y = 100;
// 	spriteNode.touch = true;
// 	spriteNode.emitter.on(TouchEvent.TOUCH_TAP, () => {
// 		console.log('TouchEvent.TOUCH_TAP');
// 	}, this);
// 	spriteNode.emitter.on(TouchEvent.TOUCH_BEGIN, () => {
// 		console.log('TouchEvent.TOUCH_BEGIN');
// 	}, this);
// });







// interface _Node {
// 	children: _Node[];
// 	id: number;
// 	active: boolean;
// }

// let data: _Node[] = [{
// 	children: [
// 		{
// 			children: [],
// 			id: 2,
// 			active: false
// 		}
// 	],
// 	id: 1,
// 	active: true
// }, {
// 	children: [
// 		{
// 			children: [
// 				{
// 					children: [],
// 					id: 5,
// 					active: false
// 				},
// 				{
// 					children: [],
// 					id: 6,
// 					active: true
// 				},
// 				{
// 					children: [],
// 					id: 7,
// 					active: true
// 				},
// 				{
// 					children: [],
// 					id: 8,
// 					active: true
// 				},
// 				{
// 					children: [],
// 					id: 9,
// 					active: false
// 				},
// 			],
// 			id: 4,
// 			active: false
// 		}
// 	],
// 	id: 3,
// 	active: false
// }]

// /**
//  * 从下往上，从里往外
//  * @param data 
//  * @returns 
//  */
// function findActive(data: _Node[]) {
// 	for (let i = data.length - 1; i >= 0; i--) {
// 		const node = data[i];
// 		if (node.children.length > 0) {
// 			if (findActive(node.children)) {
// 				return node;
// 			}
// 		}
// 		if (node.active) {
// 			return node;
// 		}
// 	}
// }

// let cache:_Node[] = [];

// function cacheActive(data: _Node[]) {
// 	for (let i = data.length - 1; i >= 0; i--) {
// 		const node = data[i];
// 		if (node.children.length > 0) {
// 			cacheActive(node.children);
// 		}
// 		if (node.active) {
// 			cache.unshift(node);
// 		}
// 	}
// }
// cacheActive(data);

// console.log(cache);
// console.log(findActive(cache));

// /**
//  * 当节点发生变化时事件
//  */
// onNodeChange(node) {

// }