import { Node, Sprite, Transform } from "../src";

class User extends Node {
    
    sprite = new Sprite();

    constructor() {
        super(Sprite);
        this.addComponent(this.sprite);
    }
    start(): void {
        this.addChild(new Transform());
    }

    render() {
        
    }
}