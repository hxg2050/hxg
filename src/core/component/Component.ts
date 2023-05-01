import EE from 'eventemitter3'
import { IComponent } from "./IComponent";
import { Transform, Constructor } from "../transform";

let idIndex = 0;

export class Component implements IComponent
 {
    /**
     * 用于表示组件的唯一标识
     */
    id: number;

    /**
     * 组件名
     */
    name: string = '';

    /**
     * 组件挂载节点
     */
    node!: Transform;

    /**
     * 事件处理器
     */
    emitter = new EE();

    /**
     * 组件不能单独实例化，必须通过Transform.addComponent创建
     * ```ts
     * const node = new Transform();
     * const componet = node.addComponent(Component);
     * ```
     * @param transform 
     */
    constructor(transform: Transform) {
        this.id = ++idIndex;
        this.node = transform;
    }

    /**
     * 组件被挂载到节点时触发
     */
    start?(): void;

    /**
     * 每帧调用
     * @param time - 和上一帧的间隔时间 ms
     */
    update?(time: number): void;

    /**
     * 消毁
     */
    destroy() {
        this.node.removeComponent(this);
    }

    /**
     * 组件被销毁时触发
     */
    onDestroy?(): void;
}