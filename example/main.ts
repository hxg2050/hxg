import './style.scss';
import { Application, canvas2d, createNode, Graphics, jsx, Layout, LoadResListConfig, Rect, Resource, Sprite, Text, Texture, ticker, Transform, Vector2 } from '../src';
import { TextThing, TsxTest } from './TsxTest'
/**
 * 创建应用
 */
const app = new Application({
	width: 1280,
	height: 720
});

const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');
// const imageData = new ImageData(10, 10);
// for (let i = 0; i < imageData.data.length; i += 4 ) {
// 	imageData.data[i] = 100;
// 	imageData.data[i + 1] = 100;
// 	imageData.data[i + 2] = 100;
// 	imageData.data[i + 3] = 100;
// }
// ctx.putImageData(imageData, 10, 10);
// const id2 = ctx.getImageData(10, 10, 10, 10);
// console.log(id2);
// ctx.putImageData(id2, 15, 15);
// ctx.drawImage(canvas, 5, 5);
app.use(canvas2d(canvas));

const rNode = app.stage.addChild(new Transform(Graphics));
const rect = rNode.addComponent(Rect);
rect.fill = '#FF00FF';
rect.radius = 5;
rNode.size.set(100, 100);
rNode.position.set(100);

const node = app.stage.addChild(new Transform(Text));
const text = node.getComponent(Text)!;
text.value = 'adasdasdas';
node.position.set(100, 100);
node.size.set(100, 100);
text.fontSize = 30;
console.log(node);

Resource.load('./assets/image/icon4.png').then((res) => {
	const node = app.stage.addChild(createNode(TsxTest, {
		source: new Texture(res.data),
		// position: new Vector2(100)
	}));
	// node.position.set(100, 0);
	console.log(node);
});
ticker.on('update', () => {
	// rNode.width ++;
});