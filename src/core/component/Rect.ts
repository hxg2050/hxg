import { BaseContainer } from "./BaseContainer";
import { Component } from "./Component";
import { Graphics } from "./Graphics";

export class Rect extends Component {
    radius: number = 0;
    fill: string = '#000000';
    storke: string = '#FFFFFF';
    storkeWidth: number = 0;
    graphics?: Graphics;

    start() {
        this.graphics = this.getComponent(Graphics);
        this.draw();
    }

    draw() {
        if (!this.graphics) {
            console.warn('只能挂在`Graphics`节点上');
            return;
        }

        const g = this.graphics;
        g.begin();
        g.drawRect(0, 0, this.node.size.x, this.node.size.y, this.radius);
        g.fill(this.fill);
        g.stroke(this.storke, this.storkeWidth);
    }
}