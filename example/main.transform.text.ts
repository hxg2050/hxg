import { Resource, Ticker } from '../src';
import './style.scss'


const canvas = document.createElement('canvas');
document.querySelector('#app')!.append(canvas);
canvas.style.touchAction = 'none';
canvas.style.cursor = 'inherit';
canvas.width = 720;
canvas.height = 1280;

const ticker = new Ticker();
ticker.start();

const ctx = canvas.getContext('2d')!;

const source = '../assets/images/img.png';

Resource.load(source).then((img) => {
	const stage = new Stage();
	const node = new Transform(Sprite);
	const sprite = node.getComponent(Sprite)!;
	sprite.source = img;
	node.position = new Vector2(300, 300);
	node.anchor = new Vector2(0.5, 0.5);
	node.size = new Vector2(200, 200);

	stage.children.push(node);

	const node2 = new Transform(Sprite);
	const sprite2 = node2.getComponent(Sprite)!;
	sprite2.source = img;
	node2.position = new Vector2(200, 200);
	node2.size = new Vector2(100, 100);
	node.addChild(node2);
	// console.log(node2.getWordScale());
	ticker.on('update', () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// imageGL(gl, node);
		// new Renderer(ctx, node);
	});

	ticker.on('update', () => {
		// const position = node.position;
		// position.x = 250;
		// position.y = 250;
		// node.position = position;
		node.rotation += 2 * Math.PI / 180;
		node2.rotation += 1 * Math.PI / 180;
		// node.scale.x = 1;
		// node.scale.y = 1;
		// node.anchor.x = 1;
		// node.anchor.y = 1;
		// node.size.x = 200;
		// node.size.y = 200;
		// console.log(node.position);

	});
});