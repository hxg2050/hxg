import { Component, Container } from "../component";
import EE from 'eventemitter3'
import { Matrix, Vector2 } from "../math";
import { Event, TouchEvent, createEventHelper } from "../event";
import { ValueOf } from "../types/ValueOf";
import { addComponent, removeComponent } from "./componentBridge";
import { Props, setProps } from "../utils";


export type Constructor<T = unknown> = new (...args: any[]) => T;
export type TransformEventType = ValueOf<typeof Transform.Event> | `${TouchEvent}`;

export class TransformEvent extends Event<TransformEventType, Transform, Transform | undefined> {
}

export class TransformComponentEvent extends Event<TransformEventType, Transform, Component> {
}

/**
 * 创建一个事件
 * @param type 事件名称
 * @param target 触发元素
 * @param data 发射数据
 * @returns 
 */
export const createTransformEvent = createEventHelper(TransformEvent);
export const createTransformComponentEvent = createEventHelper(TransformComponentEvent);
let id = 0;

/**
 * 节点，用于构建整个项目的节点树，也是所有组件挂载的节点
 * ```ts
 * const node = new Transform();
 * ```
 */
export class Transform {

    emitter = new EE<TransformEventType>();

    matrix = new Matrix();

    private _position: Vector2 = new Vector2();
    /**
     * 位置
     */
    get position() {
        return this._position;
    }
    set position(value: Vector2) {
        this._position = value;
    }

    get x() {
        return this.position.x;
    }
    set x(val: number) {
        this.position.x = val;
    }


    get y() {
        return this.position.y;
    }
    set y(val: number) {
        this.position.y = val;
    }

    private _size: Vector2 = new Vector2();
    /**
     * 大小
     */
    get size() {
        return this._size;
    }
    set size(value: Vector2) {
        this._size = value;
        this.emitter.emit(Transform.Event.RESIZE);
    }

    get width() {
        return this.size.x;
    }
    set width(val: number) {
        this.size.x = val;
        this.emitter.emit(Transform.Event.RESIZE);
    }
    get height() {
        return this.size.y;
    }
    set height(val: number) {
        this.size.y = val;
        this.emitter.emit(Transform.Event.RESIZE);
    }

    private _scale: Vector2 = new Vector2(1, 1);
    /**
     * 缩放
     */
    get scale() {
        return this._scale;
    }
    set scale(value: Vector2) {
        this._scale = value;
    }

    get scaleX() {
        return this.scale.x;
    }
    set scaleX(val: number) {
        this.scale.x = val;
    }

    get scaleY() {
        return this.scale.y;
    }
    set scaleY(val: number) {
        this.scale.y = val;
    }

    /**
     * 旋转角度
     */
    angle = 0;

    // _rotation: number = 0;//Vector2 = new Vector2(0, 1);
    /**
     * 旋转
     */
    get rotation() {
        return this.angle * Math.PI / 180;
    }
    // set rotation(value: number) {
    //     this._rotation = value;
    // }

    _anchor: Vector2 = new Vector2(0, 0);
    /**
     * 锚点
     */
    get anchor() {
        return this._anchor;
    }
    set anchor(value: Vector2) {
        this._anchor = value;
    }

    get anchorX() {
        return this.anchor.x;
    }
    set anchorX(val: number) {
        this.anchor.x = val;
    }

    get anchorY() {
        return this.anchor.y;
    }
    set anchorY(val: number) {
        this.anchor.y = val;
    }

    get pivotX() {
        return this.width * this.anchorX;
    }
    get pivotY() {
        return this.height * this.anchorY;
    }

    getTransform() {
        const sin = Math.sin(this.angle * Math.PI / 180);
        const cos = Math.cos(this.angle * Math.PI / 180);

        const a = this.scaleX * cos;
        const b = this.scaleX * sin;
        const c = -this.scaleY * sin;
        const d = this.scaleY * cos;
        const tx = this.x - this.pivotX * a - this.pivotY * c;
        const ty = this.y - this.pivotX * b - this.pivotY * d;

        this.matrix.set(a, b, c, d, tx, ty);
        return this.matrix.get();
    }

    getWorldTransform() {

    }
}