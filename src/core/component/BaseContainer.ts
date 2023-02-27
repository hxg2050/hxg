import { Component } from "./Component";
import { Transform } from "../transform";
import { IContainer } from "./IContainer";

export abstract class BaseContainer extends Component implements IContainer {
    constructor(transform: Transform) {
        super(transform);
        this.node.container = this;
    }

    start(): void {
        // this.value.on('added', () => {
        //     const size = this.node.size;
        //     size.x = this.value.width;
        //     size.y = this.value.height;
        //     this.node.size = size;
        // });
    }
}