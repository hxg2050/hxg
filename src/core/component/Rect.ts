import { BaseContainer } from "./BaseContainer";
import { Component } from "./Component";
import { Graphics } from "./Graphics";

export class Rect extends Component {
    radius: number = 0;
    fill: string = '#000000';
    storke: string = '#FFFFFF';
    storkeWidth: number = 0;
    private graphics?: Graphics;

    start() {
        this.graphics = this.getComponent(Graphics);
        this.node.size.emitter.on('change', this.draw, this);
        this.draw();
    }

    draw() {
        if (!this.graphics) {
            console.warn('只能挂在`Graphics`节点上');
            return;
        }

        const g = this.graphics;
        g.clear();
        g.begin();
        g.drawRect(this.radius / 2, this.radius / 2, this.node.size.x - this.radius, this.node.size.y - this.radius, this.radius);
        g.fill(this.fill);
        g.stroke(this.storke, this.storkeWidth);
    }

    update(time: number): void {
        // this.node.size.x ++;
        // this.draw();
        // this.graphics.redraw = true;
    }
    onDestroy(): void {
        this.node.size.emitter.off('change', this.draw, this);
    }
}