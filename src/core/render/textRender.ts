import { Text } from "../component/Text";
import { Matrix } from "../math/Matrix";
import { Transform } from "../transform";

interface ISizeText {
	width: number;
	value: string;
}


/**
 * 计算文字换行
 * @param text 文本
 */
 const autoWrapText = (ctx: CanvasRenderingContext2D, text: Text, transform: Transform) => {
	ctx.fillStyle = text.color;

    const fontConfig = [];
    if (text.italic) {
        fontConfig.push('italic');
    }
    if (text.bold) {
        fontConfig.push('bold');
    }
    fontConfig.push(`${text.fontSize}px`);
    fontConfig.push(text.fontFamily);

	ctx.font = fontConfig.join(' ');
	
	let textCache: ISizeText[] = [];
	let widthCache = 0;
	const letterPacing = text.letterPacing;
	const lineHeight = text.fontSize + text.lineSpace;
	const align = text.algin;
    const autoWarp = text.autoWarp;

	// 先计算每个文字的宽度
	let widthText: ISizeText[] = [];
	for (let i = 0; i < text.value.length; i ++) {
		const label = text.value.at(i)!;
		const labelWidth = ctx.measureText(label).width;
		widthText.push({
			width: labelWidth,
			value: label
		});
	}

	let textLine: ISizeText[][] = [];
	let widthLine: number[] = [];
	for (let i = 0; i < widthText.length; i ++) {
		const label = widthText[i];
		textCache.push(label);
        if (autoWarp) {
            widthCache += label.width;
            let nextWidth = widthCache;
            let nextLabel = widthText[i + 1];
            if (!!nextLabel) {
                nextWidth += letterPacing + nextLabel.width;
            }
            if (nextWidth > transform.size.x) {
                textLine.push(textCache);
                widthLine.push(widthCache);
                textCache = [];
                widthCache = 0;
                continue;
            }
        }
		if (i == widthText.length - 1) {
			textLine.push(textCache);
			widthLine.push(widthCache);
		}
		widthCache += letterPacing;
	}
	
	for (let i = 0; i < textLine.length; i ++) {
		let offsetX = 0;
		let lineWidth = 0;
		textLine[i].forEach(val => lineWidth += val.width );
		// 计算字间距
		lineWidth += (textLine[i].length - 1) * letterPacing
		for (let j = 0; j < textLine[i].length; j ++) {
			const label = textLine[i][j];
			let left = 0;
			if (align == 'center') {
				left = (transform.size.x - lineWidth) / 2;
			} else if (align == 'right') {
				left = transform.size.x - lineWidth;
			}
			ctx.fillText(label.value, left + offsetX, lineHeight + i * lineHeight);
			offsetX += label.width + letterPacing;
		}
	}

}

/**
 * 文字渲染
 * @param ctx 
 * @param node 
 * @returns 
 */
export default function textRender<T extends Text = Text>(ctx: CanvasRenderingContext2D, matrix: Matrix, node: Transform<T>, text?: T) {
    text = text ?? node.getComponent(Text)! as T;
    if (!text.value) {
        return;
    }
    ctx.save();
    ctx.transform(...matrix.get());
    autoWrapText(ctx, text, node);
    ctx.restore();
}