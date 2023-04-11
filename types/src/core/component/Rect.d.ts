import { Component } from "./Component";
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
export declare class Rect extends Component {
    /**
     * 圆角大小
     */
    radius: number;
    /**
     * 填充颜色
     */
    fill?: string;
    /**
     * 边框颜色
     */
    storke: string;
    /**
     * 边框大小
     */
    storkeWidth: number;
    private graphics?;
    start(): void;
    private draw;
    update(time: number): void;
    onDestroy(): void;
}
