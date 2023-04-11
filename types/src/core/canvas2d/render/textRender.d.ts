import { Text } from "../../component/Text";
import { Matrix } from "../../math/Matrix";
/**
 * 文字渲染
 * @param ctx
 * @param node
 * @returns
 */
export default function textRender<T extends Text = Text>(ctx: CanvasRenderingContext2D, matrix: Matrix, text: T): Promise<void>;
