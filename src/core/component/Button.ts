import { TouchEvent } from "../event";
import { Component } from "./Component";

/**
 * 处理点击事件
 * ```ts
 * // 创建节点
 * const node = new Transform();
 * // 添加布局组件
 * const button = node.addComponent(Button);
 * const target = this;
 * function onClick() {
 *      console.log('click');
 *      button.remove(onClick, target);
 * }
 * // 添加点击事件
 * button.add(onClick, target)
 * // 放入父节点
 * parent.addChild(node);
 * ```
 */
export class Button extends Component {

    start(): void {
        this.node.touch = true;
        this.node.deliver = false;
        this.node.emitter.on(TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.node.emitter.on(TouchEvent.TOUCH_END, this.onTouchEnd, this);
    }

    /**
     * 记录销毁点击事件的计时
     */
    private timeout?: NodeJS.Timeout;

    /**
     * 触摸开始
     */
    private onTouchBegin() {
        /**
         * 当经过设定的点击时间间隔后，认为不能触发点击（此设定可做双击）
         */
        this.timeout = setTimeout(() => {
            this.node.emitter.on(TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }, this.difftime);
    }

    private onTouchEnd() {
        clearTimeout(this.timeout);
        this.callback.forEach((value, target) => {
            value.forEach((func) => {
                func.apply(target);
            });
        });
    }

    /**
     * 起落时间间隔
     */
    difftime = 200;

    callback = new Map<any, Function[]>();

    add(callback: Function, target: any) {
        if (!this.callback.has(target)) {
            this.callback.set(target, []);
        }

        const func = this.callback.get(target);
        func.push(callback);
    }

    remove(callback: Function, target: any) {
        if (!this.callback.has(target)) {
            return;
        }
        const func = this.callback.get(target);
        const index = func.indexOf(callback);
        if (index == -1) {
            return;
        }
        func.splice(index, 1);
        if (func.length == 0) {
            this.callback.delete(target);
        }
    }
}