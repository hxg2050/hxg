import { Sprite } from "../../component";
import { Matrix } from "../../math/Matrix";
/**
 * sprite渲染
 * 图片渲染
 * @param ctx
 * @param node
 * @returns
 */
export default function spriteRender<T extends Sprite = Sprite>(ctx: CanvasRenderingContext2D, matrix: Matrix, sprite: T): void;
