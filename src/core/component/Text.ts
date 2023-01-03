import { Container } from "./Container";

export enum TextAlgin {
	LEFT = 'left',
	CENTER = 'center',
	RIGHT = 'right'
}

/**
 * 文字显示组件
 */
export class Text extends Container {
	// 字间距
	letterPacing: number = 0;
	// 行间距
	lineSpace: number = 0;
	// 水平对齐方式
	algin: TextAlgin = TextAlgin.LEFT;
	// 文字内容
	value: string = '';
	// 字体
	fontFamily: string = 'Arial';
	// 大小
	fontSize: number = 14;
	// 文字斜体
	italic: boolean = false;
	// 文字加粗
	bold: boolean = false;
	/**
     * 是否自动换行
     * 前提条件，设置了宽度，如果没设置宽度自动换行将不生效
     */
	autoWarp: boolean = false;
    // 文字颜色
    color: string = '#000000';

	// 记录文本实际宽度,需要动态计算
	width: number = 0;
	// 记录文本实际高度,需要动态计算
	height: number = 0;
    /**
     * 测量文字
     */
    // measure() {

    // }
}