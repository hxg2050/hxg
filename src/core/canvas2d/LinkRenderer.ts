import { Application } from "../Application";
import { Container, DisplayObject, Graphics, Sprite } from "../component";
import { Node, NodeComponentEvent, NodeEvent } from "../transform";
import { gr } from "./render/graphicsRender";
import spriteRender from "./render/spriteRender";

/**
 * 创建一个渲染器
 */
const createRenderer = <T extends DisplayObject>(context: CanvasRenderingContext2D, node: Node<T>, renderer?: (context: CanvasRenderingContext2D, node: Node<T>) => void) => {
    return () => {
        renderer && renderer(context, node);
        // if (texture.left != 0 || texture.top != 0) {
        //     const t = new Transform();
        //     t.position.set(texture.left, texture.top);
        //     const mat = new Matrix();
        //     mat.setTransform(t);
        //     matrix = mat.prepend(matrix);
        // }

        // const _matrix = matrix.get();
        // const source = textureSource(texture);
        // if (Object.hasOwn(node.display, 'texture')) {
        //     const texture = (node.display as any).texture;
        //     context.save();
        //     context.transform(...node.getWorldMatrix().toArray());
        //     context.drawImage(texture.source, 0, 0, texture.width, texture.height, 0, 0, node.width, node.height);
        //     context.restore();

        // }
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            child.meta.renderer();
        }
    }
}

export class LinkRenderer {
    app: Application;
    context: CanvasRenderingContext2D;

    link(node: Node) {
        if (node.meta.link) {
            return;
        }
        this.addListener(node);
        this.bindDisplayRenderer(node);
        node.meta.link = true;
        for (let i = 0; i < node.children.length; i++) {
            this.link(node.children[i]);
        }
    }

    addListener(node: Node) {
        // 有子元素加入
        node.emitter.on(Node.Event.CHILD_ADDED, this.childAddedHandler, this);
        // 移除一个子元素
        node.emitter.on(Node.Event.CHILD_REMOVED, this.childRemovedHandler, this);
        // 添加组件
        node.emitter.on(Node.Event.COMPONENT_ADDED, this.componentAddedHandler, this);
        // 移除组件
        node.emitter.on(Node.Event.COMPONENT_REMOVED, this.componentRemovedHandler, this);
        // 从父元素移除
        node.emitter.on(Node.Event.REMOVED, this.removedHandler, this);
    }


    childAddedHandler = (event: NodeEvent) => {
        this.link(event.data);
    }

    childRemovedHandler = (event: NodeEvent) => {

    }

    componentAddedHandler = (event: NodeComponentEvent) => {
        this.bindDisplayRenderer(event.data.node);
    }

    componentRemovedHandler = (event: NodeComponentEvent) => {
        const component = event.data;
        if (component instanceof DisplayObject) {
            // 显示对象被移除
        }
    }

    bindDisplayRenderer(node: Node) {
        const component = node.display;
        if (component instanceof DisplayObject) {
            // 注册渲染器
            if (component instanceof Graphics) {
                component.node.meta.renderer = createRenderer(this.context, component.node, gr);
            } else if (component instanceof Sprite) {
                component.node.meta.renderer = createRenderer(this.context, component.node, spriteRender);
            } else if (component instanceof Container) {
                component.node.meta.renderer = createRenderer(this.context, component.node);
            }
        }
    }

    removedHandler = (event: NodeEvent) => {

    }

    removeListener() {

    }
}