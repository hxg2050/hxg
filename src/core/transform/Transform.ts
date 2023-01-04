import { Ticker } from "../ticker";
import { Component, Container } from "../component";
import { Emitter, EventValue } from "../emitter";
import { Vector2 } from "../math";

export type Constructor<T = unknown> = new (...args: any[]) => T;

export class Transform<T extends Container = Container> {

    name: string = 'node';
    emitter = new Emitter<string>();
    static Event = {
        ADDED: 'ADDED', // 当添加到显示舞台时
        CHILD_ADDED: 'CHILD_ADDED', // 当添加新的字节点时
        RESIZE: 'RESIZE', // 尺寸发生变化时
        TICKER_BEFORE: 'TICKER_BEFORE', // 帧刷新前
        TICKER_AFTER: 'TICKER_AFTER' // 帧刷新后
    } as const;

    constructor(classConstructor?: Constructor<T>) {
        this.addComponent(classConstructor || Container);
    }

    private _position: Vector2 = new Vector2();
    // 位置
    get position() {
        return this._position;
    }
    set position(value: Vector2) {
        this._position = value;
    }

    private _size: Vector2 = new Vector2();
    // 大小
    get size() {
        return this._size;
    }
    set size(value: Vector2) {
        this._size = value;
        this.emitter.emit(Transform.Event.RESIZE);
    }

    // 缩放
    private _scale: Vector2 = new Vector2(1, 1);

    get scale() {
        return this._scale;
    }
    set scale(value: Vector2) {
        this._scale = value;
    }

    // 旋转朝向，默认垂直向上
    _rotation: number = 0;//Vector2 = new Vector2(0, 1);
    get rotation() {
        return this._rotation;
    }
    set rotation(value: number) {
        this._rotation = value;
    }

    _anchor: Vector2 = new Vector2(0, 0);
    get anchor() {
        return this._anchor;
    }
    set anchor(value: Vector2) {
        this._anchor = value;
    }
    // 要应用位置等信息的元素
    container!: T;

    /**
     * 所有组件
     * 默认包含一个容器组件，当添加了其他容器组件后自动替换，只能包含一个容器组件
     */
    components: Component[] = [];

    // 父
    parent?: Transform;

    // 触摸事件，默认关闭
    touch = false;
    // 是否继续向父元素传递事件（冒泡）
    deliver = true;
    // 是否穿透，可触发非父元素外的其它元素事件
    pierce = false;
    addComponent<T extends Component>(classConstructor: Constructor<T>): T {
        const component = new classConstructor(this);
        // return <T>this.components.find(value => value instanceof classConstructor);
        // component.node = this;
        this.components.push(component);
        component.start();
        return component;
    }


    /**
     * 移除一个组件
     */
    removeComponent(component: Component) {
        let index = this.components.findIndex(value => value == component);
        if (index !== -1) {
            component.onDestroy();
            this.components.splice(index, 1);
        }
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
     * 获取单个组件
     * @param   {Constructor<T>}    classConstructor    组件原型
     */
    getComponent<T extends Component>(classConstructor: Constructor<T>): T | undefined {
        return <T>this.components.find(value => value instanceof classConstructor);
    }

    /**
     * 获取组件
     * 仅仅获取自己的组件
     * @param   {Constructor<T>}    classConstructor    组件原型
     * @returns {T[]}   所有满足条件的组件
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
     * 获取组件
     * 递归查询所有子节点的
     * @param   {Constructor<T>}    classConstructor    组件原型
     * @returns {T[]}   所有满足条件的组件
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

            list.push.apply(list, value.getComponentsInChildren(classConstructor));
        });

        return list;
    }
    children: Transform[] = [];
    
    /**
     * 插入一个子元素
     * @param {Transform} transform 待插入的节点
     */
    addChild(transform: Transform) {
        if (transform.parent) {
            transform.parent.removeChild(transform);
        }
        this.children.push(transform);
        transform.parent = this;
    }

    /**
     * 在指定位置插入节点
     * @param {Transform}   child   待插入的节点
     * @param {number}      index   要插入的位置
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
     * @param {Transform} transform 将要移除的节点
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
     * @param {number}  index   要移除节点的位置
     */
    removeChildAt(index: number) {
        const node = this.children.splice(index, 1)[0];
        node.parent = undefined;
        return node;
    }

    update() {
        this.components.forEach(val => val.update());
    }

    /**
     * 消毁
     */
    destroy() {
        this.removeAllComponent();
    }

    /**
     * 路径查找节点
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
            return node.find(path.join('/'));
        }
        return node;
    }

    getOffset(): Vector2 {
        return this.size.clone().mul(this.anchor).mul(this.scale);
    }

    /**
     * 获取世界坐标，要计算缩放和锚点
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
     * 获取相对于世界的旋转
     */
    getWordRotation() {
        let angle = this.rotation;
        let parent = this.parent;
        while (parent) {
            angle += parent.rotation;
            parent = parent.parent;

        }
        return angle;
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

    /**
     * 获取尺寸，计算宽高，缩放之后的尺寸实尺寸
     */
    getRectangle() {
        const rect = this.scale.clone();
        const scale = this.getWordScale();
        rect.mul(scale);
        return rect;
    }
}