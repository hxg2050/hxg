import { Component, Container } from "../component";
import { EventValue, StoreEmitter as Emitter } from 'store-event';
import { Vector2 } from "../math";
import { TouchEvent } from "../event";
export type Constructor<T = unknown> = new (...args: any[]) => T;
export type TransformEvent = EventValue<typeof Transform.Event> | `${TouchEvent}`;
/**
 * 节点，用于构建整个项目的节点树，也是所有组件挂载的节点
 * ```ts
 * const node = new Transform();
 * ```
 */
export declare class Transform<T extends Container = Container> {
    id: number;
    active: boolean;
    name: string;
    emitter: Emitter<TransformEvent>;
    redraw: boolean;
    /**
     * 事件
     */
    static Event: {
        /**
         * 当添加到显示舞台时
         */
        readonly ADDED: "ADDED";
        /**
         * 当添加新的字节点时
         */
        readonly CHILD_ADDED: "CHILD_ADDED";
        /**
         * 尺寸发生变化时
         */
        readonly RESIZE: "RESIZE";
        /**
         * 帧刷新前
         */
        readonly TICKER_BEFORE: "TICKER_BEFORE";
        /**
         * 帧刷新后
         */
        readonly TICKER_AFTER: "TICKER_AFTER";
    };
    /**
     *
     * 一个节点只能挂载一个视觉组件
     * @param classConstructor
     */
    constructor(classConstructor?: Constructor<T>);
    private _position;
    /**
     * 位置
     */
    get position(): Vector2;
    set position(value: Vector2);
    get x(): number;
    set x(val: number);
    get y(): number;
    set y(val: number);
    private _size;
    /**
     * 大小
     */
    get size(): Vector2;
    set size(value: Vector2);
    get width(): number;
    set width(val: number);
    get height(): number;
    set height(val: number);
    private _scale;
    /**
     * 缩放
     */
    get scale(): Vector2;
    set scale(value: Vector2);
    get scaleX(): number;
    set scaleX(val: number);
    get scaleY(): number;
    set scaleY(val: number);
    _rotation: number;
    /**
     * 旋转
     */
    get rotation(): number;
    set rotation(value: number);
    _anchor: Vector2;
    /**
     * 锚点
     */
    get anchor(): Vector2;
    set anchor(value: Vector2);
    get anchorX(): number;
    set anchorX(val: number);
    get anchorY(): number;
    set anchorY(val: number);
    container: T;
    /**
     * 所有组件
     * 默认包含一个容器组件，当添加了其他容器组件后自动替换，只能包含一个视觉组件
     */
    components: Component[];
    /**
     * 父节点
     */
    parent?: Transform;
    private _touch;
    /**
     * 触摸事件，默认关闭
     */
    set touch(val: boolean);
    get touch(): boolean;
    /**
     * 是否继续向父元素传递事件（冒泡）
     */
    deliver: boolean;
    /**
     * 是否穿透，可触发非父元素外的其它元素事件
     */
    pierce: boolean;
    /**
     * 透明度
     */
    alpha: number;
    /**
     * 添加一个组件
     * @param classConstructor - 要挂载的组件
     */
    addComponent<T extends Component>(classConstructor: Constructor<T>): T;
    /**
     * 移除一个组件
     * @param component - 将要移除的组件
     */
    removeComponent(component: Component): void;
    /**
     * 移除所有组件
     */
    removeAllComponent(): void;
    /**
     * 获取单个组件，获取首个匹配到的组件
     * @param classConstructor - 组件
     */
    getComponent<T extends Component>(classConstructor: Constructor<T>): T | undefined;
    /**
     * 获取所有组件
     * @param classConstructor - 组件
     * @returns - 所有满足条件的组件
     */
    getComponents<T>(classConstructor: Constructor<T>): T[];
    /**
     * 从子节点获取所有组件，不会包含当前节点
     * 递归查询所有子节点的
     * @param classConstructor - 组件
     * @returns - 所有满足条件的组件
     */
    getComponentsInChildren<T>(classConstructor: Constructor<T>): T[];
    /**
     * 子节点
     */
    children: Transform[];
    /**
     * 插入一个子节点
     * @param transform - 待插入的节点
     */
    addChild(transform: Transform): Transform<Container>;
    /**
     * 在指定位置插入节点
     * @param child - 待插入的节点
     * @param index - 要插入的位置
     */
    addChildAt(child: Transform, index: number): void;
    /**
     * 移除一个节点
     * @param transform - 将要移除的节点
     */
    removeChild(transform: Transform): void;
    /**
     * 移除一个指定位置的元素
     * @param index - 要移除节点的位置
     */
    removeChildAt(index: number): Transform<Container>;
    /**
     * 移除所有子元素
     */
    removeChildren(): void;
    update(time: number): void;
    /**
     * 消毁
     */
    destroy(): void;
    /**
     * 路径查找节点
     * ```ts
     * // 创建身体节点
     * const body = new Transform();
     * // 设置名称
     * body.name = 'body';
     * // 创建头部节点
     * const head = new Transform();
     * // 设置名称
     * head.name = 'head';
     * // 创建左眼节点
     * const leftEye = new Transform();
     * // 设置名称
     * leftEye.name = 'lEye';
     * // 创建右眼节点
     * const rightEye = new Transform();
     * // 设置名称
     * rightEye.name = 'rEye';
     * // 将右眼添加到头部
     * head.addChild(leftEye);
     * // 将左眼添加到头部
     * head.addChild(rightEye);
     * // 将头部添加到身体
     * body.addChild(head);
     * // 从身体获取左眼
     * body.find('head/lEye');
     * // 从身体获取右眼
     * body.find('head/rEye');
     * ```
     * @path - 路径
     */
    find(path: string | string[]): Transform | undefined;
    /**
     * 根据name查找节点
     * @param queryString
     * @returns
     */
    select(queryString: string | string[]): any[];
    /**
     * 获取右上角偏真实移量
     * @returns
     */
    getOffset(): Vector2;
    /**
     * 获取相对世界坐标
     */
    getWordPoisition(): Vector2;
    /**
     * 获取相对于世界的缩放
     */
    getWordScale(): Vector2;
    /**
     * 获取尺寸，计算宽高，缩放,旋转之后在舞台中的尺寸实尺寸
     * 获取？/测量？
     * 有问题
     */
    getRectangle(): {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        width: number;
        height: number;
    };
}
