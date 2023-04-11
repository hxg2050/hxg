import { StoreEmitter } from "store-event";
/**
 * 二维向量
 */
export declare class Vector2 {
    emitter: StoreEmitter;
    constructor(num?: number);
    constructor(vector2: Vector2);
    constructor(x: number, y: number);
    private _x;
    set x(val: number);
    get x(): number;
    private _y;
    set y(val: number);
    get y(): number;
    set(num: number): Vector2;
    set(x: number, y: number): Vector2;
    set(vector2: Vector2): Vector2;
    /**
     * 克隆
     */
    clone(): Vector2;
    /**
     * 向量加法
     * @param vector2 要相加的向量
     */
    add(num: number): Vector2;
    add(x: number, y: number): Vector2;
    add(vector2: Vector2): Vector2;
    /**
     * 向量缩放
     */
    mul(num: number): Vector2;
    mul(x: number, y: number): Vector2;
    /**
    * 向量两个方向分别缩放
     */
    mul(num: Vector2): Vector2;
    /**
     * 向量归一化
     * @returns 归一化后的向量
     */
    normalized(): Vector2;
    toArray(): [number, number];
}
