import EE from "eventemitter3";

/**
 * 二维向量
 */
export class Vector2 {

    emitter = new EE();

    constructor(num?: number);
    constructor(vector2: Vector2);
    constructor(x: number, y: number);
    constructor(x: number | Vector2 = 0, y?: number) {
        typeof x === 'number' ? this.set(x, y) : this.set(x);
    }

    private _x: number = 0;
    public set x(val: number) {
        this._x = val;
        this.emitter.emit('change', this);
    }
    public get x() {
        return this._x;
    }

    private _y: number = 0;
    public set y(val: number) {
        this._y = val;
        this.emitter.emit('change', this);
    }
    public get y() {
        return this._y;
    }
    public set(num: number) : Vector2;
    public set(x: number, y: number): Vector2;
    public set(vector2: Vector2): Vector2;
    // public set(x: number | Vector2, y?: number): Vector2;
    public set(x: number | Vector2, y?: number) {
        if (typeof x === 'number') {
            if (y == undefined) {
                y = x;
            }
            this.x = x;
            this.y = y;
            return this;
        }
        return this.set(x.x, x.y);
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
    public add(num: number): Vector2;
    public add(x: number, y: number): Vector2;
    public add(vector2: Vector2): Vector2;
    public add(x: Vector2 | number, y?: number) {
        if (typeof x === 'number') {
            if (y === undefined) {
                y = x;
            }
            this.x += x;
            this.y += y;
            return this;
        } 
        return this.add(x.x, x.y);
    }

    /**
     * 向量缩放
     */
    public mul(num: number): Vector2;
    public mul(x: number, y: number): Vector2;
    /**
    * 向量两个方向分别缩放
     */
    public mul(num: Vector2): Vector2;
    public mul(x: Vector2 | number, y?: number): Vector2 {
        if (typeof x === 'number') {
            if (y === undefined) {
                y = x;
            }

            this.x *= x;
            this.y *= y;
            return this;
        }
        return this.mul(x.x, x.y);
    }

    /**
     * 向量归一化
     * @returns 归一化后的向量
     */
    public normalized(): Vector2 {
        const r = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return new Vector2(this.x / r, this.y / r);
    }

    toArray(): [number, number] {
        return [this.x, this.y];
    }
}