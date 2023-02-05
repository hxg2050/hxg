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
	queries = [PosComp, VeCom];

	update(dt: number): void {
		this.get(PosComp);
		const entiys = word.getEntiys(PosComp, VeCom);
		console.log(entiys);
		entiys.forEach(entiy => {
			let pos = entiy.getComponent(PosComp)!;
			let ce = entiy.getComponent(VeCom)!;
			pos.x += ce.x;
			console.log(entiy.getComponent(PosComp));
		});
	}
}

class VeCom extends ECS.Component {
	x: number = 10;
}
word.registerComponent(PosComp);
word.registerComponent(VeCom);
word.registerSystem(new PosSys);

const entiy = word.createEntiy([ PosComp ]);

ticker.on('update', (dt: number) => {
	word.update(dt);
}, this);