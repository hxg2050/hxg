import { Transform } from "../transform";
import { Vector2 } from "./Vector2";
type IsNever<T> = [T] extends [never] ? true : false;
type IsTypeSelf<TA, TB> = TA extends TB ? TB extends TA ? true : false : false;
type IslegalNumber<N> = IsNever<N> extends true ? false : IsTypeSelf<number, N> extends true ? false : true;
type FixedArray<T = any, Len extends number = 6, List extends Array<T> = []> = IslegalNumber<Len> extends false ? List : List['length'] extends Len ? List : FixedArray<T, Len, [...List, T]>;
type MatrixData = FixedArray<number, 9>;
/**
 * transform矩阵计算
 */
export declare class Matrix {
    value: MatrixData;
    /**
     * 大小，可用于计算锚点
     */
    size: Vector2;
    /**
     * 锚点
     */
    offset: Vector2;
    /**
     * 缩放
     */
    scale: Vector2;
    /**
     * 尺寸
     */
    /**
     * 倾斜，未实现
     */
    skewX: number;
    skewY: number;
    /**
     * 位置，移动
     */
    translate: Vector2;
    /**
     * 旋转角度
     */
    angle: number;
    /**
     * 设置节点信息
     * @param transform 节点
     */
    setTransform(transform: Transform): this;
    /**
     * 设置矩阵数据
     * @param args
     */
    set(...args: MatrixData): void;
    append(matrix: Matrix): this;
    prepend(matrix: Matrix): this;
    /**
     * 克隆当前矩阵
     * @returns
     */
    clone(): Matrix;
    /**
     * 获取矩阵数据
     * @returns
     */
    get(): MatrixData;
}
export {};
