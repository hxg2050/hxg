import { StoreEmitter as Emitter } from 'store-event';
import { IComponent } from "./IComponent";
import { Transform, Constructor } from "../transform";
export declare class Component implements IComponent {
    /**
     * 用于表示组件的唯一标识
     */
    id: number;
    /**
     * 组件名
     */
    name: string;
    /**
     * 组件挂载节点
     */
    node: Transform;
    /**
     * 事件处理器
     */
    emitter: Emitter<string>;
    /**
     * 组件不能单独实例化，必须通过Transform.addComponent创建
     * ```ts
     * const node = new Transform();
     * const componet = node.addComponent(Component);
     * ```
     * @param transform
     */
    constructor(transform: Transform);
    /**
     * 组件被挂载到节点时触发
     */
    start(): void;
    /**
     * 每帧调用
     * @param time - 和上一帧的间隔时间 ms
     */
    update(time: number): void;
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
    getComponent<T extends Component>(classConstructor: Constructor<T>): T;
    /**
     * 获取所有组件
     * @param classConstructor - 组件
     */
    getComponents<T>(classConstructor: Constructor<T>): T[];
    /**
     * 从子节点获取所有组件，不会包含当前节点
     * @param classConstructor - 组件
     */
    getComponentsInChildren<T>(classConstructor: Constructor<T>): T[];
    /**
     * 消毁
     */
    destroy(): void;
    /**
     * 组件被销毁时触发
     */
    onDestroy(): void;
}
