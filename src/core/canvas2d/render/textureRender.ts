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
    // if (texture.rotation) {
        // const mat = new Matrix();
        // const t = new Transform();
        // t.anchor.set(texture.anchor);
        // t.rotation = texture.rotation;
        // t.size.set(texture.width, texture.height);
        // t.position.set(texture.left, texture.top);
        // mat.setTransform(t);
        // mat.prepend(matrix);
        // matrix = mat;
    // }
    const _matrix = matrix.get();
    ctx.transform(_matrix[0], _matrix[3], _matrix[1], _matrix[4], _matrix[6], _matrix[7]);
    ctx.drawImage(texture.source, texture.x, texture.y, texture.width, texture.height, 0, 0,  node.size.x, node.size.y);
    // ctx.beginPath();
    // ctx.fillStyle = "rgba(100, 100, 100,0.5)";
    // ctx.rect(0, 0,  texture.width * 2, texture.height * 2);
    // ctx.fill();
    ctx.restore();
}