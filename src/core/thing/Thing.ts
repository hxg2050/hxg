import { StoreEmitter } from "store-event";
import { Container } from "../component";
import { Constructor, Transform } from "../transform";

export class Thing<T extends Container = Container> extends Transform<T> {
    
    constructor(classConstructor?: Constructor<T>) {
        super(classConstructor);
        this.start && setTimeout(this.start.bind(this));
    }

    start?(): void;

    render?(): Thing<T>;
}