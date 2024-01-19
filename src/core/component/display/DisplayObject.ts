import { Component } from "../Component";

/**
 * 显示对象组件
 */
export abstract class DisplayObject extends Component {

    /**
     * 是否需要重绘
     */
    dirty: boolean = true;
}