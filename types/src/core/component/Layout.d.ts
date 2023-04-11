import { Component } from "./Component";
import { Vector2 } from "../math/Vector2";
/**
 * 控制布局
 * 当添加了控制布局组件后，原本的position、size和scale可能会被自动管控手动设置将不会生效
 * ```ts
 * // 创建节点
 * const node = new Transform();
 * // 添加布局组件
 * const layout = node.addComponent(Layout);
 * // 设置铺满整个父节点
 * layout.left = 0;
 * layout.right = 0;
 * layout.top = 0;
 * layout.right = 0;
 * // 放入父节点
 * parent.addChild(node);
 * ```
 */
export declare class Layout extends Component {
    private oldPosition;
    private oldSize;
    private oldScale;
    private oldRotation;
    private _left?;
    /**
     * 相对左边的距离
     */
    get left(): number | undefined;
    set left(val: number | undefined);
    private _top?;
    /**
     * 相对顶部的距离
     */
    get top(): number | undefined;
    set top(val: number | undefined);
    private _right?;
    /**
     * 相对右边的距离
     */
    get right(): number | undefined;
    set right(val: number | undefined);
    private _bottom?;
    /**
     * 相对底部的距离
     */
    get bottom(): number | undefined;
    set bottom(val: number | undefined);
    private _vertical?;
    /**
     * 水平剧中
     * left 和 right 将失效
     * 注意：如果要让节点真正实现水平居中需要设置节点的`anchor`
     * ```ts
     * const node = new Transform();
     * node.anchor.x = 0.5;
     * node.addComponent(Layout);
     * ```
     */
    get vertical(): number | undefined;
    set vertical(val: number | undefined);
    private _horizontal?;
    /**
     * 垂直居中
     * top 和 bottom 将失效
     * 注意：如果要让节点真正实现垂直居中需要设置节点的`anchor`
     * ```ts
     * const node = new Transform();
     * node.anchor.y = 0.5;
     * node.addComponent(Layout);
     * ```
     */
    get horizontal(): number | undefined;
    set horizontal(val: number | undefined);
    start(): void;
    /**
     * 当挂载节点尺寸发生变化，且需要重新动态计算时调用
     * 将保存当前组件的位置和大小状态
     */
    saveNewSize(): void;
    /**
     * 获取本地偏移
     */
    getOffsetLocation(): Vector2;
    update(): void;
    _markResize: boolean;
    /**
     * 重新计算布局/矫正布局
     * ```ts
     * const node = new Transform();
     * const layout = node.addComponent(Layout);
     * node.anchor.set(0.5, 0.5);
     * layout.resize();
     * ```
     */
    resize(): void;
    /**
     * 矫正布局
     */
    private _resize;
}
