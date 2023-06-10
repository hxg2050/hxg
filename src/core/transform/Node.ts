import { Container, Sprite } from "../component";
import { Constructor, Transform } from "./Transform";

export class Node<T extends Container = Container> extends Transform<T> {

    // 要显示的对象
    display?: T;

    constructor(classConstructor?: Constructor<T>) {
        super(classConstructor);
        this.display = this.container;
        this.start && setTimeout(this.start.bind(this));
    }

    start?();
}