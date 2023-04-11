import { Graphics } from "../../component";
import { Matrix } from "../../math";
export default function graphicsRender<T extends Graphics = Graphics>(ctx: CanvasRenderingContext2D, matrix: Matrix, sprite: T): Promise<void>;
