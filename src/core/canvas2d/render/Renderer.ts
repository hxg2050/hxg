import { Application } from "../../Application";
import { ticker } from "../../ticker";
import { Container, Sprite } from "../../component";
import { Text } from "../../component/Text";
import { Matrix } from "../../math/Matrix";
import { Transform, Constructor } from "../../transform";
import spriteRender from "./spriteRender";
import textRender from "./textRender";

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
    ];

    constructor(public context: CanvasRenderingContext2D, public app: Application) {
    }

    render() {
        this.context.clearRect(0, 0, this.app.config.width, this.app.config.height);
        this._render(this.app.stage);
    }

    private _render(transform: Transform, parentMatrix?: Matrix) {
        // 当前节点帧开始
        if (!transform.active) {
            return;
        }
        transform.emitter.emit(Transform.Event.TICKER_BEFORE);
        transform.update(ticker.deltaTime);
        const matrix = new Matrix();
        matrix.setTransform(transform);
        if (parentMatrix) {
            matrix.prepend(parentMatrix);
        }

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
        callback(this.context, matrix, element);
        return true;
    }
}