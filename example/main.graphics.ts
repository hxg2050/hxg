import './style.scss';
import { Application, canvas2d, Graphics, ImageTexture, LoadResListConfig, Rect, Resource, Sprite, Transform } from '../src';

/**
 * 创建应用
 */
const app = new Application({
	width: 1280,
	height: 720
});

const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
app.use(canvas2d(canvas));

const node = app.stage.addChild(new Transform(Graphics));
node.size.set(1280, 720);
const g = node.getComponent(Graphics)!;
g.begin();
g.drawPolygon([0, 0,  100, 0,  100, 100, 50, 50, 0, 100]);
g.fill('#00ffff');
g.stroke('#00ff00');

g.begin();
g.moveTo(120, 20)
g.lineTo(220, 20);
g.lineTo(220, 100);
g.closePath();
g.stroke('#00ff00', 5);

g.begin();
g.moveTo(120, 20)
g.lineTo(220, 20);
g.stroke('#00ff00', 5);

g.begin();
g.arc(340, 60, 50, 0, Math.PI);
g.stroke('#0000FF', 5);

g.begin();
g.drawCircle(460, 60, 50);
g.stroke('#0000FF', 5);

g.begin();
g.drawRect(560, 10, 100, 100, 8);
g.fill('#FF00FF');
g.stroke('#0000FF', 5);

g.begin();
g.ellipse(120, 200, 100, 80, 0, 0, Math.PI);
g.fill('#FF0000');
g.stroke('#00FF00', 5);

g.begin();
g.drawCircle(50, 210, 5);
g.fill('#000000');

g.begin();
g.drawCircle(80, 210, 5);
g.fill('#000000');

g.begin();
g.drawCircle(110, 210, 5);
g.fill('#000000');

g.begin();
g.drawEllipse(140, 210, 10, 5);
g.fill('#000000');

// node.position.set(100, 100);
// const rect = node.addComponent(Rect)!;
// rect.radius = 10;
// rect.fill = '#0000FF';
// rect.storke = '#ff0000';
// rect.storkeWidth = 3;