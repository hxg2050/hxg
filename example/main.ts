import './style.scss';
import { Application, canvas2d, createNode, Graphics, ImageTexture, jsx, Layout, LoadResListConfig, Rect, Resource, Sprite, Text, Transform } from '../src';
import { TextThing, TsxTest } from './TsxTest'
/**
 * 创建应用
 */
const app = new Application({
	width: 1280,
	height: 720
});

const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
app.use(canvas2d(canvas));

// const node = app.stage.addChild(new Transform(Text));
// const text = node.getComponent(Text)!;
// text.value = 'adasdasdas';
// node.size.set(100, 100);
Resource.load('./assets/image/icon4.png').then((res) => {
	const node = app.stage.addChild(createNode(TsxTest, {
		source: new ImageTexture(res.data)
	}));
	// console.log(node);
});
