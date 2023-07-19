import { Component, Text } from "../../src";

export class FPS extends Component {

    text!: Text;

    start(): void {
        this.text = this.node.getComponent(Text)!;
    }

    update(time: number): void {
        this.text.value = (1000 / time).toFixed(2) + ' fps';
        // console.log(this.text.value);
    }
}