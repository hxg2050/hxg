import { TextTexture } from "../texture";
import { Transform } from "../transform";
import { Container } from "./Container";
export enum TextAlgin {
	LEFT = 'left',
	CENTER = 'center',
	RIGHT = 'right'
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
export class Text extends Container {
	private _letterPacing = 0;
	/**
	 * 字间距
	 */
	get letterPacing() {
		return this._letterPacing;
	}
	set letterPacing(val: number) {
		if (this._letterPacing == val) {
			return;
		}
		this._letterPacing = val;
		this._update = true;
	}

	private _lineSpace: number = 0;
	/**
	 * 行间距
	 */
	get lineSpace() {
		return this._lineSpace;
	}
	set lineSpace(val: number) {
		if (this._lineSpace == val) {
			return;
		}
		this._lineSpace = val;
		this._update = true;
	}

	private _algin: TextAlgin = TextAlgin.LEFT;
	/**
	 * 水平对齐方式
	 */
	get algin() {
		return this._algin;
	}
	set algin(val: TextAlgin) {
		if (this._algin === val) {
			return;
		}
		this._algin = val;
		this._update = true;
	}

	/**
	 * 文字内容
	 */
	private _value: string = '';
	get value() {
		return this._value;
	}
	set value(val: string) {
		if (this._value === val) {
			return;
		}
		this._value = val;
		this._update = true;
	}

	private _fontFamily: string = 'Arial';
	/**
	 * 字体
	 */
	get fontFamily() {
		return this._fontFamily;
	}
	set fontFamily(val: string) {
		if (this._fontFamily === val) {
			return;
		}
		this._fontFamily = val;
		this._update = true;
	}
	
	private _fontSize: number = 14;
	/**
	 * 字体大小
	 */
	get fontSize() {
		return this._fontSize;
	}
	set fontSize(val: number) {
		if (this._fontSize === val) {
			return;
		}
		this._fontSize = val;
		this._update = true;
	}
	
	private _italic: boolean = false;
	/**
	 * 斜体
	 */
	get italic() {
		return this._italic;
	}
	set italic(val: boolean) {
		if (this._italic === val) {
			return;
		}
		this._italic = val;
		this._update = true;
	}

	private _bold: boolean = false;
	/**
	 * 文字加粗
	 */
	get bold() {
		return this._bold;
	}
	set bold(val: boolean) {
		if (this._bold === val) {
			return;
		}
		this._bold = val;
		this._update = true;
	}

	private _autoWarp: boolean = false;
	/**
     * 是否自动换行
     * 前提条件，设置了宽度，如果没设置宽度自动换行将不生效
     */
	get autoWarp() {
		return this._autoWarp;
	}
	set autoWarp(val: boolean) {
		if (this._autoWarp === val) {
			return;
		}
		this._autoWarp = val;
		this._update = true;
	}

    private _color: string = '#000000';
	/**
	 * 文字颜色
	 */
	get color() {
		return this._color;
	}
	set color(val: string) {
		if (this._color === val) {
			return;
		}
		this._color = val;
		this._update = true;
	}

	/**
	 * 记录文本实际宽度,需要动态计算
	 */
	// width: number = 0;
	// /**
	//  * 记录文本实际高度,需要动态计算
	//  */
	// height: number = 0;

	texture: TextTexture = new TextTexture(this);

	start() {
		this.node.emitter.on(Transform.Event.TICKER_BEFORE, this._updateTexture, this);
	}

	private _update = false;
    /**
     * 测量绘制文字
     */
    private _updateTexture() {
		if (!this._update) {
			return;
		}
		this._update = false;
		this.texture.update();
    }
}