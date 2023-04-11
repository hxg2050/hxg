import { Texture } from "../texture";
import { Container } from "./Container";
export declare enum TextAlgin {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}
/**
 * 文字显示组件
 * ```ts
 * // 创建一个文字节点
 * const node = new Transform(Text);
 * // 设置组件宽度
 * node.size.x = 200;
 * // 获取文字组件
 * const text = node.getComponent(Text)!;
 * // 设置文字间距为5像素
 * text.letterPacing = 5;
 * // 设置行间距为5像素
 * text.lineSpace = 5;
 * // 文字居中显示
 * text.algin = TextAlgin.CENTER;
 * // 设置要显示的文字内容
 * text.value = '创建了一个文字组件';
 * // 设置字体跟随系统
 * text.fontFamily = 'system';
 * // 设置文字大小
 * text.fontSize = 20;
 * // 设置文字为斜体
 * text.italic = true;
 * // 设置文字加粗
 * text.bold = true;
 * // 设置文字超过宽度后自动换行，前提是设置了节点的宽度
 * text.autoWarp = true;
 * // 设置文字显示颜色为红色
 * text.color = '#FF0000';
 * ```
 */
export declare class Text extends Container {
    private _letterPacing;
    /**
     * 字间距
     */
    get letterPacing(): number;
    set letterPacing(val: number);
    private _lineSpace;
    /**
     * 行间距
     */
    get lineSpace(): number;
    set lineSpace(val: number);
    private _algin;
    /**
     * 水平对齐方式
     */
    get algin(): TextAlgin;
    set algin(val: TextAlgin);
    /**
     * 文字内容
     */
    private _value;
    get value(): string;
    set value(val: string);
    private _fontFamily;
    /**
     * 字体
     */
    get fontFamily(): string;
    set fontFamily(val: string);
    private _fontSize;
    /**
     * 字体大小
     */
    get fontSize(): number;
    set fontSize(val: number);
    private _italic;
    /**
     * 斜体
     */
    get italic(): boolean;
    set italic(val: boolean);
    private _bold;
    /**
     * 文字加粗
     */
    get bold(): boolean;
    set bold(val: boolean);
    private _autoWarp;
    /**
     * 是否自动换行
     * 前提条件，设置了宽度，如果没设置宽度自动换行将不生效
     */
    get autoWarp(): boolean;
    set autoWarp(val: boolean);
    private _color;
    /**
     * 文字颜色
     */
    get color(): string;
    set color(val: string);
    /**
     * 记录文本实际宽度,需要动态计算
     */
    texture: Texture;
    redraw: boolean;
}
