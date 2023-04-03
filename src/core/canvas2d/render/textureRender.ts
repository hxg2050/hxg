import { Matrix } from "../../math";
import { Texture } from "../../texture/Texture";
import { Transform } from "../../transform";

/**
 * 纹理渲染
 */
export default function textureRender(ctx: CanvasRenderingContext2D, node: Transform, matrix: Matrix, texture: Texture) {
    ctx.save();
    const _matrix = matrix.get();
    ctx.transform(_matrix[0], _matrix[3], _matrix[1], _matrix[4], _matrix[6], _matrix[7]);
    ctx.drawImage(texture.source, texture.x, texture.y, texture.width, texture.height, 0, 0, node.size.x, node.size.y);
    ctx.restore();
}