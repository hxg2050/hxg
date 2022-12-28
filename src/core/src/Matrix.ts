import Transform from "./Transform";
import Vector2 from "./Vector2";
//判断是否为 never 的类型工具
type IsNever<T> = [T] extends [never] ? true : false
// 用于判断两个泛型是否相同，只要一个泛型传入 Len, 零一个泛型传入 number，就能判断 Len 是否为 number 本身
type IsTypeSelf<TA, TB> = TA extends TB ? TB extends TA ? true : false : false
// 判断 Len 是否为合法的 number 字面量类型
type IslegalNumber<N> = IsNever<N> extends true ? false : IsTypeSelf<number, N> extends true ? false : true

type FixedArray<T = any, Len extends number = 6, List extends Array<T> = []> =
    IslegalNumber<Len> extends false
    ? List
    : List['length'] extends Len // 判断 `List['length']` 是否等于 `Len`
    ? List // 是就返回 List 本身
    : FixedArray<T, Len, [...List, T]> // 不是就递归，注意传入的数组添加了新的元素 T

type MatrixData = FixedArray<number, 6>;
/**
 * transform矩阵计算
 * 3*3
 * [scale x, skew y, skew x
 *  scale y, posi x, posi y
 *  0,       0,      1]
 */
export default class Matrix {
    value: MatrixData = [
        1, 0, 0,
        1, 0, 0
    ];

    /**
     * 大小，可用于计算锚点
     */
    size: Vector2 = new Vector2();

    /**
     * 锚点
     */
    offset: Vector2 = new Vector2();

    /**
     * 缩放
     */
    scale: Vector2 = new Vector2();
    /**
     * 尺寸
     */


    /**
     * 倾斜，未实现
     */
    skewX: number = 0;
    skewY: number = 0;

    /**
     * 位置，移动
     */
    translate: Vector2 = new Vector2();

    /**
     * 旋转角度
     */
    angle: number = 0;

    /**
     * 设置节点信息
     * @param transform 节点
     */
    setTransform(transform: Transform) {
        this.translate.set(transform.position);
        this.scale.set(transform.scale);
        this.angle = transform.rotation;
        this.size.set(transform.size);
        this.offset.set(this.size).mul(transform.anchor);


        const sin = Math.sin(this.angle);
        const cos = Math.cos(this.angle);
        const a = cos * this.scale.x;
        const b = sin * this.scale.x;
        const c = - sin * this.scale.y;
        const d = cos * this.scale.y;

        const x = this.translate.x - (this.offset.x * a) - (this.offset.y * c);
        const y = this.translate.y - (this.offset.x * b) - (this.offset.y * d);
        this.set(a, b, c, d, x, y);
    }

    public set(...args: MatrixData) {
        this.value = args;
    }


    append(matrix: Matrix): this {
        const a1 = this.value[0];
        const b1 = this.value[1];
        const c1 = this.value[2];
        const d1 = this.value[3];

        this.value[0] = (matrix.value[0] * a1) + (matrix.value[1] * c1);
        this.value[1] = (matrix.value[0] * b1) + (matrix.value[1] * d1);
        this.value[2] = (matrix.value[2] * a1) + (matrix.value[3] * c1);
        this.value[3] = (matrix.value[2] * b1) + (matrix.value[3] * d1);

        this.value[4] = (matrix.value[4] * a1) + (matrix.value[5] * c1) + this.value[4];
        this.value[5] = (matrix.value[4] * b1) + (matrix.value[5] * d1) + this.value[5];

        return this;
    }

    prepend(matrix: Matrix): this {
        const tx1 = this.value[4];

        if (matrix.value[0] !== 1 || matrix.value[1] !== 0 || matrix.value[2] !== 0 || matrix.value[3] !== 1) {
            const a1 = this.value[0];
            const c1 = this.value[2];

            this.value[0] = (a1 * matrix.value[0]) + (this.value[1] * matrix.value[2]);
            this.value[1] = (a1 * matrix.value[1]) + (this.value[1] * matrix.value[3]);
            this.value[2] = (c1 * matrix.value[0]) + (this.value[3] * matrix.value[2]);
            this.value[3] = (c1 * matrix.value[1]) + (this.value[3] * matrix.value[3]);
        }

        this.value[4] = (tx1 * matrix.value[0]) + (this.value[5] * matrix.value[2]) + matrix.value[4];
        this.value[5] = (tx1 * matrix.value[1]) + (this.value[5] * matrix.value[3]) + matrix.value[5];

        return this;
    }

    clone() {
        const matrix = new Matrix();
        matrix.set(...this.get());
        return matrix;
    }

    /**
     * 获取矩阵数据
     * @returns 
     */
    get(): MatrixData {
        return this.value;
    }
}