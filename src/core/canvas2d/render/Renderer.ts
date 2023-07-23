import { Application } from "../../Application";
import { ticker } from "../../ticker";
import { Container, Graphics, Sprite } from "../../component";
import { Text } from "../../component/Text";
import { Matrix } from "../../math/Matrix";
import { Transform, Constructor } from "../../transform";
import spriteRender from "./spriteRender";
import textRender from "./textRender";
import graphicsRender from "./graphicsRender";
import { canvasHelper } from "../canvasHelper";
import textureRender from "./textureRender";
import { Texture } from "../..";

type RenderFunction<T extends Container> = (context: CanvasRenderingContext2D, matrix: Matrix, component: T) => void

type RenderAction<T extends Container = any> = [
    // Transform,
    Constructor<T>, // 要渲染的类型
    RenderFunction<T> // 渲染的逻辑
];
/**
 * 渲染器
 */
export class Renderer {

    renderActions: RenderAction[] = [
        [Sprite, spriteRender],
        [Text, textRender],
        [Graphics, graphicsRender],
    ];

    constructor(public context: CanvasRenderingContext2D, public app: Transform) {
    }

    render() {
        this.context.clearRect(0, 0, this.app.width, this.app.height);
        this._render(this.app);
        return this.context;
    }

    private _render(transform: Transform, parentMatrix?: Matrix) {
        // 当前节点帧开始
        if (!transform.active) {
            return;
        }
        
        const matrix = new Matrix();
        if (this.app !== transform) {
            matrix.setTransform(transform);
        }

        if (parentMatrix) {
            matrix.prepend(parentMatrix);
        }

        if (this.app !== transform) { //transform.alone && 
            const texture = new Texture(this.renderAlone(transform).canvas);
            textureRender(this.context, transform, matrix, texture);
            return;
        }

        transform.emitter.emit(Transform.Event.TICKER_BEFORE);
        transform.update(ticker.deltaTime);

        for (let j = 0; j < this.renderActions.length; j++) {
            if (this._renderElement(transform, this.renderActions[j][0], matrix, this.renderActions[j][1])) {
                break;
            }
        }
        // 当前节点帧结束
        transform.emitter.emit(Transform.Event.TICKER_AFTER);
        if (transform.children.length == 0) {
            return;
        }
        for (let i = 0; i < transform.children.length; i++) {
            const child = transform.children[i];
            this._render(child, matrix);
        }
    }

    /**
     * 独立绘制
     */
    private renderAlone(transform: Transform) {
        const ctx = canvasHelper.createContext(...transform.size.toArray());
        const renderer = new Renderer(ctx, transform);
        return renderer.render();
    }

    /**
     * 判断是否需要渲染，并执行渲染返回结果
     * @param transform 
     * @param constructor 
     * @param callback 
     * @returns 
     */
    private _renderElement<T extends Container>(transform: Transform, constructor: Constructor<T>, matrix: Matrix, callback: Function) {
        const element = transform.getComponent(constructor);
        if (!element) {
            return false;
        }
        this.context.globalAlpha = transform.alpha;
        callback(this.context, matrix, element);
        return true;
    }
}