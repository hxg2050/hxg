一个简单`hello word!`栗子
```ts
import { Application, canvas2d, Transform, Text } from 'hxg';
const app = new Applaction({
	width: 720,
	height: 1280
});

// 获取canvas
const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
// 此处自定义和视图渲染相关的，默认实现了canvas2d相关的逻辑，理论上支持任何渲染模式，包括使用webgl和html以及其它的，例如pixi
app.use(canvas2d(canvas));

// 创建文字节点
const hello = new Transform(Text);
// 插入到舞台
app.stage.addChild(hello);
// 获取文字组件
const text = hello.getComponent(Text)!;
// 设置文字内容
text.value = 'hello word!';
```