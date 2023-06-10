import { Container, Sprite } from "../component";
import { Constructor, Transform } from "./Transform";

export class Node<T extends Container = Container> extends Transform<T> {
    constructor(classConstructor?: Constructor<T>) {
        super(classConstructor);
        this.render && this.render();
    }

    render?();
}