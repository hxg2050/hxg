import { Component } from "../../src";

export class ScaleAnimation extends Component {
    update(): void {
        this.node.scale.add(-0.001);
    }
}