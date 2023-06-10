import { Application, Node, Sprite, Transform, canvas2d } from "../src";
/**
 * 创建应用
 */
const app = new Application({
    width: 1280,
    height: 720
});

const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
app.use(canvas2d(canvas));


class User extends Node {
    
    sprite = new Sprite();

    foot = new Node();

    constructor() {
        super(Sprite);
        this.addComponent(this.sprite);
        this.addChild(this.foot);
    }
    start(): void {
        console.log('start');
    }
}

app.stage.addChild(new User);
console.log(app);