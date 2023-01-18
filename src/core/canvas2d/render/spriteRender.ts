import { Sprite } from "../../component";
import { Matrix } from "../../math/Matrix";
/**
 * sprite渲染
 * 图片渲染
 * @param ctx 
 * @param node 
 * @returns 
 */
export default function spriteRender<T extends Sprite = Sprite>(ctx: CanvasRenderingContext2D, matrix: Matrix, sprite: T) {
    const texture = sprite.texture;
    if (!texture) {
        return;
    }
    const _matrix = matrix.get();
    ctx.save();
    ctx.transform(_matrix[0], _matrix[3], _matrix[1], _matrix[4], _matrix[6], _matrix[7]);
	ctx.drawImage(texture.source, texture.x, texture.y, texture.width, texture.height, 0, 0, sprite.node.size.x, sprite.node.size.y);
    ctx.restore();
}