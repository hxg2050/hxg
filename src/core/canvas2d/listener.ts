import { DisplayObject } from "../component";
import { Transform, TransformComponentEvent, TransformEvent } from "../transform";
import { canvasHelper } from "./canvasHelper";
import graphicsRender from "./render/graphicsRender";

const childAddedHandler = (event: TransformEvent) => {
    addlistener(event.data);
}

const childRemovedHandler = (event: TransformEvent) => {

}

const componentAddedHandler = (event: TransformComponentEvent) => {

}

const componentRemovedHandler = (event: TransformComponentEvent) => {
    const component = event.data;
    if (component instanceof DisplayObject) {
        // 显示对象被移除
    }
}

const removedHandler = (event: TransformEvent) => {

}
export const linkTransform = (node: Transform) => {
    // 1、遍历现有组件？
    // 2、读取display(container)组件
    // 3、监听事件

    const display = node.container;
    if (display && display instanceof DisplayObject) {
        // 处理渲染相关逻辑
        // 先拿graphics开刀
        if (!node.meta.ctx) {
            // node.meta.selfTexture = canvasHelper.createContext(...node.size.toArray());
            node.meta.ctx = canvasHelper.createContext();
        }

        node.meta.renderer = () => {
            // 先渲染子元素纹理,倒序渲染
            // 渲染自身纹理，加入到最底层
            // 更新叠加缓存纹理
            node.children.forEach((child) => {
                child.meta.renderer && child.meta.renderer();
            })
            if (display.dirty) {
                // graphicsRender(node.meta.ctx);
            }
        }
    }
    addlistener(node);
}

export const addlistener = (node: Transform) => {
    // 有子元素加入
    node.emitter.on(Transform.Event.CHILD_ADDED, childAddedHandler, node);
    // 移除一个子元素
    node.emitter.on(Transform.Event.CHILD_REMOVED, childRemovedHandler, node);
    // 添加组件
    node.emitter.on(Transform.Event.COMPONENT_ADDED, componentAddedHandler, node);
    // 移除组件
    node.emitter.on(Transform.Event.COMPONENT_REMOVED, componentRemovedHandler, node);
    // 从父元素移除
    node.emitter.on(Transform.Event.REMOVED, removedHandler, node);
}

export const removeListener = (node: Transform) => {
    node.emitter.off(Transform.Event.CHILD_ADDED, childAddedHandler, node);
    node.emitter.off(Transform.Event.CHILD_REMOVED, childAddedHandler, node);
    node.emitter.off(Transform.Event.COMPONENT_ADDED, childAddedHandler, node);
    node.emitter.off(Transform.Event.COMPONENT_REMOVED, childAddedHandler, node);
    node.emitter.off(Transform.Event.REMOVED, removeListener, node);
}