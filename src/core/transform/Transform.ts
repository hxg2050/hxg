import { Component, Container } from "../component";
import EE from 'eventemitter3'
import { Matrix, Vector2 } from "../math";
import { TouchEvent } from "../event";
import { ValueOf } from "../types/ValueOf";
import { addComponent, removeComponent } from "./componentBridge";
import { Props, setProps } from "../utils";

export type Constructor<T = unknown> = new (...args: any[]) => T;
export type TransformEvent = ValueOf<typeof Transform.Event> | `${TouchEvent}`;

let id = 0;

/**
 * 节点，用于构建整个项目的节点树，也是所有组件挂载的节点
 * ```ts
 * const node = new Transform();
 * ```
 */
export class Transform<T extends Container = Container> {

    id: number = 0;

    alone = false;

    // 是否激活
    active: boolean = true;

    name: string = 'node';
    emitter = new EE<TransformEvent>();

    redraw = false;
    /**
     * 事件
     */
    static Event = {
        /**
         * 当添加到显示舞台时
         */
        ADDED: 'ADDED',
        /**
         * 当被移除于舞台时
         */
        REMOVED: 'REMOVED',

        /**
         * 可见元素发生变化时（需要渲染的元素）
         */
        CHANGE_DISPLY: 'CHANGE_DISPLY',

        /**
         * 当添加新的字节点时
         */
        CHILD_ADDED: 'CHILD_ADDED',
        /**
         * 尺寸发生变化时
         */
        RESIZE: 'RESIZE',
        /**
         * 位置发生变化
         */
        REPOSITION: 'REPOSITION',

        /**
         * 帧刷新前
         */
        TICKER_BEFORE: 'TICKER_BEFORE',

        /**
         * 帧刷新后
         */
        TICKER_AFTER: 'TICKER_AFTER'
    } as const;
    /**
     * 
     * 一个节点只能挂载一个视觉组件
     * @param classConstructor 
     */
    constructor(classConstructor?: Constructor<T>) {
        this.id = ++id;
        if (classConstructor) {
            this.container = this.addComponent(classConstructor);
        }
    }

    private _position: Vector2 = new Vector2();
    /**
     * 位置
     */
    get position() {
        return this._position;
    }
    set position(value: Vector2) {
        this._position = value;
    }

    get x() {
        return this.position.x;
    }
    set x(val: number) {
        this.position.x = val;
    }


    get y() {
        return this.position.y;
    }
    set y(val: number) {
        this.position.y = val;
    }

    private _size: Vector2 = new Vector2();
    /**
     * 大小
     */
    get size() {
        return this._size;
    }
    set size(value: Vector2) {
        this._size = value;
        this.emitter.emit(Transform.Event.RESIZE);
    }

    get width() {
        return this.size.x;
    }
    set width(val: number) {
        this.size.x = val;
    }
    get height() {
        return this.size.y;
    }
    set height(val: number) {
        this.size.y = val;
    }



    private _scale: Vector2 = new Vector2(1, 1);
    /**
     * 缩放
     */
    get scale() {
        return this._scale;
    }
    set scale(value: Vector2) {
        this._scale = value;
    }

    get scaleX() {
        return this.scale.x;
    }
    set scaleX(val: number) {
        this.scale.x = val;
    }

    get scaleY() {
        return this.scale.y;
    }
    set scaleY(val: number) {
        this.scale.y = val;
    }

    _rotation: number = 0;//Vector2 = new Vector2(0, 1);
    /**
     * 旋转
     */
    get rotation() {
        return this._rotation;
    }
    set rotation(value: number) {
        this._rotation = value;
    }

    _anchor: Vector2 = new Vector2(0, 0);
    /**
     * 锚点
     */
    get anchor() {
        return this._anchor;
    }
    set anchor(value: Vector2) {
        this._anchor = value;
    }

    get anchorX() {
        return this.anchor.x;
    }
    set anchorX(val: number) {
        this.anchor.x = val;
    }

    get anchorY() {
        return this.anchor.y;
    }
    set anchorY(val: number) {
        this.anchor.y = val;
    }

    // 要应用位置等信息的元素
    container!: T;
    /**
     * 所有组件
     * 默认包含一个容器组件，当添加了其他容器组件后自动替换，只能包含一个视觉组件
     */
    components: Component[] = [];

    /**
     * 父节点
     */
    parent?: Transform;

    private _touch = false;
    /**
     * 触摸事件，默认关闭
     */
    set touch(val: boolean) {
        this._touch = true;

    }
    get touch() {
        return this._touch;
    }

    /**
     * 是否继续向父元素传递事件（冒泡）
     */
    deliver = true;
    /**
     * 是否穿透，可触发非父元素外的其它元素事件
     */
    pierce = false;

    /**
     * 透明度
     */
    alpha = 1;

    /**
     * 添加一个组件
     * @param classConstructor - 要挂载的组件
     */
    addComponent<T extends Component>(classConstructor: Constructor<T> | T, props?: Props<T>): T {
        return addComponent(this, classConstructor, props);
    }

    /**
     * 移除一个组件
     * @param component - 将要移除的组件
     */
    removeComponent(component: Component) {
        removeComponent(this, component)
    }

    /**
     * 移除所有组件
     */
    removeAllComponent() {
        for (let i = this.components.length - 1; i >= 0; i--) {
            this.removeComponent(this.components[i]);
        }
    }

    /**
     * 获取单个组件，获取首个匹配到的组件
     * @param classConstructor - 组件
     */
    getComponent<T extends Component>(classConstructor: Constructor<T>): T | undefined {
        return <T>this.components.find(value => value instanceof classConstructor);
    }
    /**
     * 获取所有组件
     * @param classConstructor - 组件
     * @returns - 所有满足条件的组件
     */
    getComponents<T>(classConstructor: Constructor<T>): T[] {
        let comps: T[] = [];
        this.components.forEach(value => {
            if (value instanceof classConstructor) {
                comps.push(value);
            }
        });
        return comps;
    }

    /**
     * 从子节点获取所有组件，不会包含当前节点
     * 递归查询所有子节点的
     * @param classConstructor - 组件
     * @returns - 所有满足条件的组件
     */
    getComponentsInChildren<T>(classConstructor: Constructor<T>): T[] {
        let list: T[] = [];

        this.components.forEach(value => {
            if (value instanceof classConstructor) {
                list.push(value);
            }

            if (value.node.components.length == 0) {
                return;
            }

            list.push.apply(list, value.node.getComponentsInChildren(classConstructor));
        });

        return list;
    }

    /**
     * 子节点
     */
    children: Transform[] = [];

    /**
     * 插入一个子节点
     * @param transform - 待插入的节点
     */
    addChild<U extends Transform>(transform: U, props?: Props<U>) {
        if (transform.parent) {
            transform.parent.removeChild(transform);
        }
        this.children.push(transform);
        transform.parent = this;
        props && setProps(transform, props)
        return transform;
    }

    /**
     * 在指定位置插入节点
     * @param child - 待插入的节点
     * @param index - 要插入的位置
     */
    addChildAt(child: Transform, index: number) {
        if (child.parent) {
            child.parent.removeChild(child);
        }
        this.children.splice(index, 0, child);
        child.parent = this;
    }

    /**
     * 移除一个节点
     * @param transform - 将要移除的节点
     */
    removeChild(transform: Transform) {
        let index = this.children.indexOf(transform);
        if (index == -1) {
            return;
        }

        this.removeChildAt(index);
    }

    /**
     * 移除一个指定位置的元素
     * @param index - 要移除节点的位置
     */
    removeChildAt(index: number) {
        const node = this.children.splice(index, 1)[0];
        node.parent = undefined;
        return node;
    }

    /**
     * 移除所有子元素
     */
    removeChildren() {
        if (this.children.length == 0) {
            return;
        }
        this.removeChildAt(0);
        this.removeChildren();
    }

    update(time: number) {
        this.components.forEach(val => val.update && val.update(time));
    }

    /**
     * 消毁
     */
    destroy() {
        this.parent?.removeChild(this);
        // this.removeAllComponent();
        this.onDestroy && this.onDestroy();
    }

    onDestroy?(): void;
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
    find(path: string | string[]): Transform | undefined {
        path = typeof path == 'string' ? path.split('/') : path;
        let node: Transform | undefined;
        let name = path.shift();
        node = this.children.find(val => val.name == name);
        if (!node) {
            return undefined;
        }
        if (path.length > 0) {
            return node.find(path);
        }
        return node;
    }

    /**
     * 根据name查找节点
     * @param queryString 
     * @returns 
     */
    select(queryString: string | string[]) {
        queryString = typeof queryString === 'string' ? queryString.split(',') : queryString;
        const children = [];
        this.children.forEach(val => {
            if (queryString.includes(val.name)) {
                children.push(val);
            }
            if (val.children.length > 0) {
                children.push(...val.select(queryString));
            }
        });

        return children;
    }

    /**
     * 获取右上角偏真实移量
     * @returns 
     */
    getOffset(): Vector2 {
        return this.size.clone().mul(this.anchor).mul(this.scale);
    }

    /**
     * 获取相对世界坐标
     */
    getWordPoisition(): Vector2 {
        const position = this.position.clone();
        let parent = this.parent;
        if (!!parent) {
            return position.add(parent.getWordPoisition().add(parent.getOffset().mul(-1)));
        }
        return position;
    }

    /**
     * 获取相对于世界的缩放
     */
    getWordScale() {
        let scale = this.scale.clone();
        let parent = this.parent;
        while (parent) {
            scale.mul(parent.scale);
            parent = parent.parent;

        }
        return scale;
    }
}