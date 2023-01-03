import './style.scss';
import { canvas2d, Layout, Renderer, Resource, Sprite, Ticker, TouchEvent, Transform, Vector2 } from '../src';
import { Application } from '../src';
import { Text, TextAlgin } from '../src/core/component/Text';
import { ScaleAnimation } from './component/ScaleAnimation';
import { scaleSprite } from './prefab/scaleSprite';
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

const node = new Transform(Text);
node.touch = true;
node.emitter.on(TouchEvent.TOUCH_TAP, () => {
	console.log('点击了文字');
}, node);
node.size.x = 100;
const text = node.getComponent(Text)!;
text.value = '注意 Vite 默认是不加载 .env 文件的，因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个，举个例子，root 和 envDir 选项会影响加载行为。不过当你的确需要时，你可以使用 Vite 导出的 loadEnv 函数来加载指定的 .env 文件。'
text.fontSize = 16;
text.letterPacing = 2;
text.lineSpace = 2;
// text.algin = TextAlgin.LEFT;
text.autoWarp = true;
app.stage.addChild(node);
node.emitter.once(Transform.Event.TICKER_AFTER, () => {
	node.size.y = text.height;
}, node);