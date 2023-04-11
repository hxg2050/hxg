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
export declare class Button extends Component {
    start(): void;
    /**
     * 记录销毁点击事件的计时
     */
    private timeout?;
    /**
     * 触摸开始
     */
    private onTouchBegin;
    private onTouchEnd;
    /**
     * 起落时间间隔
     */
    difftime: number;
    callback: Map<any, Function[]>;
    add(callback: Function, target: any): void;
    remove(callback: Function, target: any): void;
}
