import { Emitter } from '../emitter/Emitter'
import { IComponent } from "./IComponent";
import { Transform, Constructor } from "../transform";

let idIndex = 0;

export class Component implements IComponent
 {
    id: number;

    name: string = '';

    node!: Transform;

    emitter = new Emitter();

    constructor(transform: Transform) {
        this.id = ++idIndex;
        this.node = transform;
    }

    start() {
    }

    update() {

    }

    /**
     * 添加一个组件
     */
     addComponent<T extends Component>(classConstructor: Constructor<T>): T {
        return this.node.addComponent(classConstructor);
    }

    /**
     * 移除一个组件
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
     * 获取单个组件
     */
    getComponent<T extends Component>(classConstructor: Constructor<T>) {
        return this.node.getComponent<T>(classConstructor);
    }

    /**
     * 获取组件
     */
    getComponents<T>(classConstructor: Constructor<T>): T[] {
        return this.node.getComponents<T>(classConstructor);
    }

    /**
     * 获取组件
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

    onDestroy(): void {
        
    }
}