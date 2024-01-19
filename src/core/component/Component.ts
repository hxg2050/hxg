import EE from 'eventemitter3'
import { IComponent } from "./IComponent";
import { Node } from "../transform";

let idIndex = 0;

export class Component implements IComponent {
    /**
     * 用于表示组件的唯一标识
     */
    id: number;

    /**
     * 提供给任意位置调用的元数据
     */
    meta: Record<string, any> = {};

    /**
     * 组件名
     */
    name: string = '';

    /**
     * 组件挂载节点
     */
    node!: Node;

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
    constructor() {
        this.id = ++idIndex;
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