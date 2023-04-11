import { Container } from "../component";
import { Constructor, Transform } from "../transform";
export declare class Thing<T extends Container = Container> extends Transform<T> {
    constructor(classConstructor?: Constructor<T>);
    start?(): void;
    render?(): Thing<T>;
}
