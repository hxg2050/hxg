import { Container } from "../component";
import { Constructor, Node } from "../transform";

export class Thing<T extends Container = Container> extends Node<T> {

    constructor(classConstructor?: Constructor<T>) {
        super(classConstructor);
        this.start && setTimeout(this.start.bind(this));
    }

    start?(): void;

    render?(): Thing<T>;
}