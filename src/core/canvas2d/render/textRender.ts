import { Text } from "../../component/Text";
import { Matrix } from "../../math/Matrix";
/**
 * 文字渲染
 * @param ctx 
 * @param node 
 * @returns 
 */
export default function textRender<T extends Text = Text>(ctx: CanvasRenderingContext2D, matrix: Matrix, text: T) {
	const texture = text.texture;
    if (!texture || !texture.source) {
        return;
    }
    const _matrix = matrix.get();
    ctx.save();
    ctx.transform(_matrix[0], _matrix[3], _matrix[1], _matrix[4], _matrix[6], _matrix[7]);
	ctx.putImageData(texture.source, 0, 0, texture.x, texture.y, text.node.size.x, text.node.size.y);
    ctx.restore();
}