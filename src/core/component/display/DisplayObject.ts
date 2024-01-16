import { Component } from "../Component";

/**
 * 显示对象组件
 */
export abstract class DisplayObject extends Component {
    dirty: boolean = true;
}