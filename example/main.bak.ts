import { Application, Container, Layout, Sprite, Transform, Vector2 } from "../src";

const app = Application.run({
  width: 1280,
  height: 720,
  // background: 0xffffff
});

// app.stage.addChild(IndexScene());

// const spriteTF = new Transform();
// const sprite = spriteTF.addComponent(Sprite);
// sprite.source = '../assets/images/hero_1_2.png';
// app.stage.addChild(spriteTF);
// spriteTF.size = new Vector2(100,100);
// document.querySelector<HTMLDivElement>('#app')?.appendChild(app.pixiApplication.view);
// const header = app.stage.find('header/right')!;
// // header.size = new Vector2(480, 630);
// const layout = header.addComponent(Layout);
// // layout.horizontal = 0;
// // layout.bottom = 0;
// // layout.top = 10;
// // layout.bottom = 10;
// layout.left = 10;
// layout.right = 10;
// console.log(app.stage.size);

// const layout = spriteTF.addComponent(Layout);
// // layout.vertical = 0;
// // layout.horizontal = 0;
// layout.left = 100;
// layout.top = 100;
// layout.right = 100;
// layout.bottom = 100;

const node1 = new Transform(Container);
node1.size = new Vector2(400, 400);
const img1 = new Transform(Sprite);
node1.addChild(img1);
// const sprite = img1.getComponent(Sprite)!;
// sprite.source = '../assets/images/hero_1_2.png';
const layout = img1.addComponent(Layout);
layout.left = 10;
layout.right = 10;
layout.top = 10;
layout.bottom = 10;
img1.size = new Vector2(10, 10);
app.stage.addChild(node1);
console.log(node1);