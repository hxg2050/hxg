import { Emitter } from "../emitter";
import { TouchEvent } from "../event";
import { Vector2 } from "../math";
import { Transform } from "../transform";
import { isHitPoint } from "../utils/hitTest";

/**
 * 用于事件监听
 * 该组件应该是一个全局组件
 * 应该要挂载到跟节点
 * 用于获取和派发全局事件
 */
export class EventSystem extends Emitter {
    constructor(public transform: Transform) {
        super();
        this.addEvents();
    }

    addEvents() {
        this.on(TouchEvent.TOUCH_TAP, this.onTap, this);
    }
    
    point: Vector2 = new Vector2();

    /**
     * 点击事件处理
     */
    onTap(event: Vector2) {
        this.point.set(event.x, event.y);
        this.tapEmit(this.transform);
    }

    /**
     * 发送点击事件到正确的节点
     * @param transform 
     */
    tapEmit(transform: Transform) {
        // 此处可做冒泡判定
        for (let i = transform.children.length - 1; i >= 0; i --) {
            const node = transform.children[i];
            if (!this.tapEmit(node)) {
                return;
            }
        }

        if (transform.touch && isHitPoint(transform, this.point)) {
            transform.emitter.emit(TouchEvent.TOUCH_TAP, this.point);
            // 判断是否继续传递事件
            return transform.deliver;
        }
        return true;
    }
}