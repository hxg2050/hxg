import EE from 'eventemitter3'
import { TouchEvent } from '../event';
import { Vector2 } from "../math";
import { Transform } from "../transform";
import { isHitPoint } from "../utils/hitTest";

/**
 * 用于事件监听
 * 该组件应该是一个全局组件
 * 应该要挂载到跟节点
 * 用于获取和派发全局事件
 * 
 * 点击穿透
 * 点击冒泡
 */
export class EventSystem extends EE {
    constructor(public transform: Transform) {
        super();
        this.addEvents();
    }

    addEvents() {
        // this.on(TouchEvent.TOUCH_TAP, this.onTap, this);
        this.on(TouchEvent.TOUCH_BEGIN, this.onBeagin, this);
        this.on(TouchEvent.TOUCH_END, this.onEnd, this);
        this.on(TouchEvent.TOUCH_MOVE, this.onMove, this);
    }
    
    point: Vector2 = new Vector2();

    onBeagin(event: Vector2) {
        this.touchEvent(event, TouchEvent.TOUCH_BEGIN);
    }

    onEnd(event: Vector2) {
        this.touchEvent(event, TouchEvent.TOUCH_END);
    }

    onMove(event: Vector2) {
        this.touchEvent(event, TouchEvent.TOUCH_MOVE);
    }

    /**
     * 点击事件处理
     */
    // onTap(event: Vector2) {
    //     this.touchEvent(event, TouchEvent.TOUCH_TAP);
    // }

    private touchEvent(event: Vector2, eventName: TouchEvent) {
        this.point.set(event.x, event.y);
        this.tapEmit(this.transform, eventName);
    }

    /**
     * 发送点击事件到正确的节点
     * @param transform 
     */
    tapEmit(transform: Transform, eventName: TouchEvent) {

        // 此处可做冒泡判定
        for (let i = transform.children.length - 1; i >= 0; i --) {
            const node = transform.children[i];
            if (!this.tapEmit(node, eventName)) {
                return false;
            }
        }

        if (transform.touch && isHitPoint(this.point, transform)) {
            transform.emitter.emit(eventName, this.point);
            // 判断是否继续传递事件
            return transform.deliver;
        }
        return true;
    }
}