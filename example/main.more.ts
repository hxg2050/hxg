import './style.scss';
import { Resource } from '../src/core/resource';
import { LoadResListConfig } from '../src/core/resource/GroupLoader';
import { Application, canvas2d, Sprite, Ticker, ticker, Transform } from '../src';
import { createText } from '../example-game1/node/createText';
import { FPS } from '../example-game1/components/FPS';
import { createSpriteByName } from '../example-game1/node/createSpriteByName';
import { ImageTexture } from '../src/core/texture';
// import { webgl } from '../src/core/webgl';

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
// app.use(webgl(canvas));

const fps = createText('');
app.stage.addChild(fps.node);
fps.addComponent(FPS);
fps.node.size.x = 200;
fps.node.size.y = 200;
// const nodeP = new Transform();
// app.stage.addChild(nodeP);
// nodeP.position.x = 100;
// nodeP.position.y = 100;

// const fps = createText('');
// app.stage.addChild(fps.node);
// fps.addComponent(FPS);
// fps.node.size.x = 20 + i * 10;
// fps.node.size.y = 20 + i * 10;

Resource.load('../example-game1/assets/image/icon4.png').then((res) => {
	const iTexture = new ImageTexture(res.data);
	for (let i = 0; i < 500; i ++) {

		const spriteNode = new Transform(Sprite);
		const sprite = spriteNode.getComponent(Sprite)!;
		sprite.texture = iTexture;
		sprite.resize();
	
		app.stage.addChild(spriteNode);
		// spriteNode.size.set(200, 200);
		// spriteNode.scale.set(1.5, 2);
		spriteNode.anchor.set(0.5, 0.5);
		spriteNode.rotation = i * 10;
	
		spriteNode.position.x = 100 + i * 10;
		spriteNode.position.y = 100 + i * 10;
	}
});
ticker.on('update', () => {
	// nodeP.position.x +=1;
}, this);