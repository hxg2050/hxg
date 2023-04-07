import { StoreEmitter } from "store-event";
import { Container } from "../component";
import { Transform } from "../transform";

const SE_KEY = 'value';

interface IThing {
    start?(): void;
}

export class Thing<T extends Container = Container> extends Transform<T> {
    
    start?() {

    };

    render?(): any;
}