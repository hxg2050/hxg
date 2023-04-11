import { StoreEmitter as Emitter } from 'store-event';
import { TouchEvent } from '../event';
import { Vector2 } from "../math";
import { Transform } from "../transform";
/**
 * 用于事件监听
 * 该组件应该是一个全局组件
 * 应该要挂载到跟节点
 * 用于获取和派发全局事件
 *
 * 点击穿透
 * 点击冒泡
 */
export declare class EventSystem extends Emitter {
    transform: Transform;
    constructor(transform: Transform);
    addEvents(): void;
    point: Vector2;
    onBeagin(event: Vector2): void;
    onEnd(event: Vector2): void;
    onMove(event: Vector2): void;
    /**
     * 点击事件处理
     */
    private touchEvent;
    /**
     * 发送点击事件到正确的节点
     * @param transform
     */
    tapEmit(transform: Transform, eventName: TouchEvent): boolean;
}
