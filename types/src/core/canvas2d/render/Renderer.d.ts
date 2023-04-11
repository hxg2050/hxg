import { Application } from "../../Application";
import { Container } from "../../component";
import { Matrix } from "../../math/Matrix";
import { Constructor } from "../../transform";
type RenderFunction<T extends Container> = (context: CanvasRenderingContext2D, matrix: Matrix, component: T) => void;
type RenderAction<T extends Container = any> = [
    Constructor<T>,
    RenderFunction<T>
];
/**
 * 渲染器
 */
export declare class Renderer {
    context: CanvasRenderingContext2D;
    app: Application;
    renderActions: RenderAction[];
    constructor(context: CanvasRenderingContext2D, app: Application);
    render(): void;
    private _render;
    /**
     * 判断是否需要渲染，并执行渲染返回结果
     * @param transform
     * @param constructor
     * @param callback
     * @returns
     */
    private _renderElement;
}
export {};
