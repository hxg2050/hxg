import './style.scss';
import { Application, canvas2d, ECS, ticker } from '../src';

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

const word = new ECS.Word();

class PosComp extends ECS.Component {
	x: number = 0;
}

class PosSys extends ECS.System {
	update(dt: number): void {
		const entiys = word.getEntiys(PosComp);
		entiys.forEach(entiy => {
			entiy.getComponent(PosComp)!.x ++;
			console.log(entiy.getComponent(PosComp));
		});
	}
}

const entiy = word.createEntiy();

ticker.on('update', (dt: number) => {
	word.update(dt);
}, this);