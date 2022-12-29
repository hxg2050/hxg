import { Application } from "../Application";
import { Container, Sprite } from "../component";
import { Matrix } from "../math/Matrix";
import { Transform, Constructor } from "../transform";
import spriteRender from "./spriteRender";

type RenderFunction<T extends Container> = (context: CanvasRenderingContext2D, matrix: Matrix, transform: Transform<T>, constructor: Constructor<T>) => void

type RenderAction<T extends Container = any> = [
    // Transform,
    Constructor<T>, // 要渲染的类型
    RenderFunction<T> // 渲染的逻辑
];
export class Renderer {

    renderActions: RenderAction[] = [
        [Sprite, spriteRender]
    ];

    constructor(public context: CanvasRenderingContext2D, public app: Application) {
    }

    render() {
        this.context.clearRect(0, 0, this.app.config.width, this.app.config.height);
        this._render(this.app.stage);
    }

    private _render(transform: Transform, parentMatrix?: Matrix) {
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
        callback(this.context, matrix, transform as Transform<T>, element);
        return true;
    }
}