/**
 * 二维向量
 */
export class Vector2 {

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public x: number = 0;
    public y: number = 0;

    public set(x: number, y: number): Vector2;
    public set(vector2: Vector2): Vector2;
    public set(vector2: Vector2 | number, y?: number) {
        if (typeof vector2 == 'number') {
            this.x = vector2;
            this.y = y!;
        } else {
            this.x = vector2.x;
            this.y = vector2.y;
        }
        return this;
    }

    /**
     * 克隆
     */
    public clone() {
        const vector2 = new Vector2(this.x, this.y);
        return vector2;
    }

    /**
     * 向量加法
     * @param vector2 要相加的向量
     */
    public add(x: number, y: number): Vector2;
    public add(num: number): Vector2;
    public add(vector2: Vector2): Vector2;
    public add(x: Vector2 | number, y?: number) {
        if (typeof x == 'number') {
            if (y == undefined) {
                return this.add(x, x);
            }
        } else {
            return this.add(x.x, x.y);
        }
        this.x += x;
        this.y += y;
        return this;
    }

    /**
     * 向量缩放
     */
    public mul(x: number, y: number): Vector2;
    public mul(num: number): Vector2;
    /**
    * 向量两个方向分别缩放
     */
    public mul(num: Vector2): Vector2;
    public mul(x: Vector2 | number, y?: number): Vector2 {
        if (typeof x == 'number') {
            if (y == undefined) {
                return this.mul(x, x);
            }
        } else {
            return this.mul(x.x, x.y);
        }
        this.x *= x;
        this.y *= y;
        return this;
    }

    /**
     * 向量归一化
     * @returns 归一化后的向量
     */
    public normalized(): Vector2 {
        const r = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return new Vector2(this.x / r, this.y / r);
    }
}