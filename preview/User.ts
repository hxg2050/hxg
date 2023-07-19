import { Node, Sprite, Text, setProps } from "../src";

export default class User extends Node {
    
    sprite = new Sprite();

    foot = this.addChild(new Node(), {
        x: 19
    });
    body = this.foot.addChild(new Node(), {
        y: 10
    });

    hello = this.addComponent(new Text(), {
        value: '你好啊 啊 啊'
    });

    constructor() {
        super();
        setProps(this as User, {
            x: 100,
            y: 100,
            width: 100,
            height: 100
        });
        console.log(this);
    }
    start(): void {
        console.log('start');
    }
}