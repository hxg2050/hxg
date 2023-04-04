import { Container } from "../component";
import { Transform } from "../transform";
export abstract class Thing<T extends Container = Container> extends Transform<T> {
    abstract render(): any;
}