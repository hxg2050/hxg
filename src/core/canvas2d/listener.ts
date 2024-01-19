import { Container, DisplayObject, Graphics } from "../component";
import { Matrix } from "../math";
import { Node, NodeComponentEvent, NodeEvent } from "../transform";
import { canvasHelper } from "./canvasHelper";
import { gr } from "./render/graphicsRender";

interface IMate {
    /**
     * 位置偏移量，主要记录锚点点位置
     */
    tempMatrix: Matrix,
}

const childAddedHandler = (event: NodeEvent) => {
    linkTransform(event.data);
    // event.target.meta.renderer();
}

const childRemovedHandler = (event: NodeEvent) => {

}

const componentAddedHandler = (event: NodeComponentEvent) => {

}

const componentRemovedHandler = (event: NodeComponentEvent) => {
    const component = event.data;
    if (component instanceof DisplayObject) {
        // 显示对象被移除
    }
}

const removedHandler = (event: NodeEvent) => {

}
export const linkTransform = (node: Node) => {
    // 1、遍历现有组件？
    // 2、读取display(container)组件
    // 3、监听事件

    const display = node.display!;
    if (display) {
        if (display instanceof Graphics) {
            // 处理渲染相关逻辑
            // 先拿graphics开刀
            if (!node.meta.ctx) {
                // node.meta.selfTexture = canvasHelper.createContext(...node.size.toArray());
                node.meta.layerCanvas = canvasHelper.createContext(
                    720,
                    720 / (window.innerWidth / window.innerHeight)
                );
            }

            node.meta.renderer = () => {
                // 先渲染子元素纹理,倒序渲染
                // 渲染自身纹理，加入到最底层
                // 更新叠加缓存纹理
                if (display.dirty) {
                    // display.dirty = false;
                    gr(node as Node<Graphics>);
                    // graphicsRender(node.meta.ctx);
                    // const mat = new Matrix();
                    // mat.setTransform(node);

                    // node.meta.layerCanvas.canvas.computedWidth = display.texture.source.computedWidth;
                    // node.meta.layerCanvas.canvas.computedHeight = display.texture.source.computedHeight;
                    const lctx = node.meta.layerCanvas as CanvasRenderingContext2D;
                    lctx.restore();
                    lctx.save();
                    lctx.transform(...node.getWorldMatrix().toArray());
                    lctx.drawImage(
                        display.texture.source,
                        0,
                        0,
                        display.texture.source.computedWidth,
                        display.texture.source.computedHeight,
                        0,
                        0,
                        display.texture.source.computedWidth,
                        display.texture.source.computedHeight
                    );
                    lctx.restore();

                    node.children.forEach((child) => {
                        if (!child.meta.renderer) {
                            linkTransform(child);
                        }
                        child.meta.renderer();
                        lctx.drawImage(
                            child.meta.layerCanvas.canvas,
                            0,
                            0
                        );
                    })
                }
            }
        } else if (display instanceof Container) {
            if (!node.meta.ctx) {
                node.meta.layerCanvas = canvasHelper.createContext(
                    720,
                    720 / (window.innerWidth / window.innerHeight)
                );
            }
            node.meta.renderer = () => {
                // 先渲染子元素纹理,倒序渲染
                // 渲染自身纹理，加入到最底层
                // 更新叠加缓存纹理
                node.children.forEach((child) => {
                    child.meta.renderer && child.meta.renderer();
                })
                if (display.dirty) {
                    // const { tempMatrix } = gr(node as Transform<Graphics>);
                    // graphicsRender(node.meta.ctx);
                    // const mat = new Matrix();
                    // mat.setTransform(node);

                    // node.meta.layerCanvas.computedWidth = node.width;
                    // node.meta.layerCanvas.computedHeight = node.height;
                    // node.meta.layerCanvas.drawImage(node, 0, 0, display.texture.source.computedWidth, display.texture.source.computedHeight);

                    node.children.forEach((child) => {
                        if (child.meta.renderer) {
                            child.meta.renderer();
                            node.meta.layerCanvas.drawImage(
                                child.meta.layerCanvas.canvas,
                                0,
                                0
                            );
                        } else {
                            linkTransform(child);
                        }
                    })
                }
            }
        }
    }
    addlistener(node);
}

export const addlistener = (node: Node) => {
    // 有子元素加入
    node.emitter.on(Node.Event.CHILD_ADDED, childAddedHandler, node);
    // 移除一个子元素
    node.emitter.on(Node.Event.CHILD_REMOVED, childRemovedHandler, node);
    // 添加组件
    node.emitter.on(Node.Event.COMPONENT_ADDED, componentAddedHandler, node);
    // 移除组件
    node.emitter.on(Node.Event.COMPONENT_REMOVED, componentRemovedHandler, node);
    // 从父元素移除
    node.emitter.on(Node.Event.REMOVED, removedHandler, node);
}

export const removeListener = (node: Node) => {
    node.emitter.off(Node.Event.CHILD_ADDED, childAddedHandler, node);
    node.emitter.off(Node.Event.CHILD_REMOVED, childAddedHandler, node);
    node.emitter.off(Node.Event.COMPONENT_ADDED, childAddedHandler, node);
    node.emitter.off(Node.Event.COMPONENT_REMOVED, childAddedHandler, node);
    node.emitter.off(Node.Event.REMOVED, removeListener, node);
}