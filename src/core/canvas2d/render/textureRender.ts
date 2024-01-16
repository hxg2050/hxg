import { Matrix } from "../../math";
import { Texture } from "../../texture/Texture";
import { Transform } from "../../transform";
import { canvasHelper } from "../canvasHelper";

/**
 * 初始化一个纹理
 * 统一处理成ImageBitmap
 * @param texture 
 */
function textureSource(texture: Texture) {
    if (texture.init) {
        return texture.source;
    }
    texture.init = true;

    let sw = texture.width;
    let sh = texture.height;

    let ctx: CanvasRenderingContext2D;
    if (texture.rotation != 0) {
        sw = texture.height;
        sh = texture.width;
        ctx = canvasHelper.createContext(sh, sw, 1);
        ctx.rotate(-90 * Math.PI / 180);
        ctx.translate(-sw, 0);
    } else {
        ctx = canvasHelper.createContext(sw, sh, 1);
    }

    ctx.drawImage(texture.source, texture.x, texture.y, sw, sh, 0, 0, sw, sh);
    texture.source = ctx.canvas;
    createImageBitmap(ctx.canvas).then((imageBitmap) => {
        texture.source = imageBitmap;
    });
    return texture.source;
}

/**
 * 纹理渲染
 */
export default function textureRender(ctx: CanvasRenderingContext2D, node: { width: number, height: number }, matrix: Matrix, texture: Texture) {
    if (texture.width == 0 || texture.height == 0) {
        return;
    }
    ctx.save();

    if (texture.left != 0 || texture.top != 0) {
        const t = new Transform();
        t.position.set(texture.left, texture.top);
        const mat = new Matrix();
        mat.setTransform(t);
        matrix = mat.prepend(matrix);
    }

    const _matrix = matrix.get();
    const source = textureSource(texture);
    ctx.transform(_matrix[0], _matrix[3], _matrix[1], _matrix[4], _matrix[6], _matrix[7]);
    ctx.drawImage(source, 0, 0, texture.width, texture.height, 0, 0, node.width, node.height);
    ctx.restore();
}