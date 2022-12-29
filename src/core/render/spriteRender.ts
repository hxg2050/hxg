import { Sprite } from "../component";
import { Matrix } from "../math/Matrix";
import { Transform } from "../transform";

// export function imageGL(gl: WebGLRenderingContext, node: Transform<Sprite>) {
    
//     const sprite = node.getComponent(Sprite)!;
//     if (!sprite.source) {
//         return;
//     }
//     const texture = gl.createTexture();
//     gl.bindTexture(gl.TEXTURE_2D, texture);
//     gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
//     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sprite.source);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
//     //清除当前纹理
//     gl.bindTexture(gl.TEXTURE_2D, null);
// }

/**
 * sprite渲染
 * 图片渲染
 * @param ctx 
 * @param node 
 * @returns 
 */
export default function spriteRender<T extends Sprite = Sprite>(ctx: CanvasRenderingContext2D, matrix: Matrix, node: Transform<T>, sprite?: T) {
    sprite = sprite ?? node.getComponent(Sprite)! as T;
    if (!sprite.source) {
        return;
    }
    // const matrix = new Matrix();
    // matrix.setTransform(node);

    // console.log(node.size);
    ctx.save();
    ctx.transform(...matrix.get());
	ctx.drawImage(sprite.source, 0, 0, sprite.source.width, sprite.source.height, 0, 0, node.size.x, node.size.y);
    ctx.restore();
}