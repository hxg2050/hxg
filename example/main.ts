import './style.scss';
import { Application, canvas2d, createNode } from '../src';
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

app.stage.addChild(createNode(App));