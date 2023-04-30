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
    start() {
    }

    /**
     * 每帧调用
     * @param time - 和上一帧的间隔时间 ms
     */
    update(time: number) {
        time;
    }

    /**
     * 添加一个组件
     * @param classConstructor - 要挂载的组件
     */
     addComponent<T extends Component>(classConstructor: Constructor<T>): T {
        return this.node.addComponent(classConstructor);
    }

    /**
     * 移除一个组件
     * @param component - 将要移除的组件
     */
    removeComponent(component: Component) {
        this.node.removeComponent(component);
    }

    /**
     * 移除所有组件
     */
    removeAllComponent() {
        this.node.removeAllComponent();
    }

    /**
     * 获取单个组件，获取首个匹配到的组件
     * @param classConstructor - 组件
     */
    getComponent<T extends Component>(classConstructor: Constructor<T>) {
        return this.node.getComponent<T>(classConstructor);
    }

    /**
     * 获取所有组件
     * @param classConstructor - 组件
     */
    getComponents<T>(classConstructor: Constructor<T>): T[] {
        return this.node.getComponents<T>(classConstructor);
    }

    /**
     * 从子节点获取所有组件，不会包含当前节点
     * @param classConstructor - 组件
     */
    getComponentsInChildren<T>(classConstructor: Constructor<T>): T[] {
        return this.node.getComponentsInChildren<T>(classConstructor);
    }

    /**
     * 消毁
     */
    destroy() {
        this.node.removeComponent(this);
    }

    /**
     * 组件被销毁时触发
     */
    onDestroy(): void {
        
    }
}