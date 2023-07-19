import { Component } from "../component";
import { Props, setProps } from "../utils";
import { Constructor, Transform } from "./Transform";

const components: Map<Constructor<Component>, Component[]> = new Map();

function remove(arr: any[], item: any) {
    let index = arr.indexOf(item);
    if (index == -1) {
        return false;
    }
    arr.splice(index, 1);
    return true;
}

/**
 * 添加一个组件
 * @param classConstructor - 要挂载的组件
 */
export function addComponent<T extends Component>(transform: Transform, component: Constructor<T> | T, props?: Props<T>): T {
    let classConstructor;
    if (typeof component == 'object') {
        classConstructor = Object.getPrototypeOf(component);
    } else {
        classConstructor = component;
        component = new classConstructor() as T;
    }
    // 缓存
    if (!components.has(classConstructor)) {
        components.set(classConstructor, []);
    }
    
    components.get(classConstructor).push(component);
    transform.components.push(component);
    component.node = transform;

    props && setProps(component, props);

    component.start && setTimeout(component.start.bind(component));
    return component;
}

/**
 * 移除一个组件
 * @param component - 将要移除的组件
 */
export function removeComponent(transform: Transform, component: Component) {
    const list = Object.getPrototypeOf(component).constructor;
    remove(list, component);

    if (remove(transform.components, component)) {
        component.onDestroy();
    }
}

/**
 * 获取某个组件
 */
export function getComponents<T extends Component>(classConstructor: Constructor<T>) {
    return components.get(classConstructor) || [];
}