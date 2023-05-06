import { Component } from "./Component";
import { Graphics } from "./Graphics";

/**
 * 矩形绘制，必须挂载Graphics节点上才能生效
 * ```ts
 * const node = app.stage.addChild(new Transform(Graphics));
 * node.position.set(100, 100);
 * node.size.set(100, 100);
 * const rect = node.addComponent(Rect)!;
 * rect.radius = 10;
 * rect.fill = '#0000FF';
 * rect.storke = '#ff0000';
 * rect.storkeWidth = 3;
 * ```
 */
export class Rect extends Component {
    /**
     * 圆角大小
     */
    radius: number = 0;
    /**
     * 填充颜色
     */
    fill?: string = '#000000';
    /**
     * 边框颜色
     */
    storke: string = '#FFFFFF';
    /**
     * 边框大小
     */
    storkeWidth: number = 0;
    private graphics?: Graphics;

    start() {
        this.graphics = this.node.getComponent(Graphics);
        this.node.size.emitter.on('change', this.draw, this);
        this.draw();
    }

    private draw() {
        if (!this.graphics) {
            console.warn('只能挂在`Graphics`节点上');
            return;
        }

        if (!this.fill && this.storkeWidth == 0) {
            return;
        }

        const g = this.graphics;
        g.clear();
        g.begin();
        g.drawRect(this.radius / 2, this.radius / 2, this.node.size.x - this.radius, this.node.size.y - this.radius, this.radius);
        this.fill && g.fill(this.fill);
        this.storkeWidth > 0 && g.stroke(this.storke, this.storkeWidth);
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