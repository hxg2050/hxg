import { Matrix } from "../../math";
import { Texture } from "../../texture/Texture";
import { Transform } from "../../transform";

/**
 * 纹理渲染
 */
export default function textureRender(ctx: CanvasRenderingContext2D, node: Transform, matrix: Matrix, texture: Texture) {
    if (texture.width == 0 || texture.height == 0) {
        return;
    }
    ctx.save();
    if (texture.rotation) {
        const mat = new Matrix();
        const t = new Transform();
        t.anchor.set(0.5);
        t.rotation = -90;
        t.position.set(0, 250);
        mat.setTransform(t);
        mat.prepend(matrix);
        matrix = mat;
    }
    const _matrix = matrix.get();
    ctx.transform(_matrix[0], _matrix[3], _matrix[1], _matrix[4], _matrix[6], _matrix[7]);
    ctx.drawImage(texture.source, texture.x, texture.y, texture.width, texture.height, 0, 0, node.size.x, node.size.y);
    ctx.restore();
}