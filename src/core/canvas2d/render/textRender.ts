import { Text, TextAlgin } from "../../component/Text";
import { Matrix } from "../../math/Matrix";
import { Texture } from "../../texture";
import { canvasHelper } from "../canvasHelper";
import textureRender from "./textureRender";


interface ISizeText {
    width: number;
    value: string;
}


/**
 * 计算文字换行
 * 可做缓存，仅当可能发生变化时重新计算
 * @param text 文本
 */
const autoWrapText = async (text: Text) => {
    if (text.value === '') {
        return;
    }
    let ctx: CanvasRenderingContext2D;
    if (!text.texture) {
        ctx = canvasHelper.createContext(...text.node.size.toArray(), 1);
        text.texture = new Texture(ctx.canvas);
        text.texture.init = true;
    }

    const texture = text.texture;

    texture.source.width = text.node.size.x;
    texture.source.height = text.node.size.y;
    texture.source = texture.source;

    ctx = (texture.source as HTMLCanvasElement).getContext('2d');
    ctx.canvas.width = text.node.size.x;
    ctx.canvas.height = text.node.size.y;
    ctx.clearRect(0, 0, ...text.node.size.toArray());
    ctx.fillStyle = text.color;

    const transform = text.node;

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
    for (let i = 0; i < text.value.length; i++) {
        const label = text.value.charAt(i)!;
        const labelWidth = ctx.measureText(label).width;
        widthText.push({
            width: labelWidth,
            value: label
        });
    }

    let textLine: ISizeText[][] = [];
    let widthLine: number[] = [];
    for (let i = 0; i < widthText.length; i++) {
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

    let maxWidth = 0;
    // 实际显示有偏差，测试和文字大小有关系
    const padding = text.lineSpace / 2;
    const topOffset = text.fontSize / 7 + padding;

    for (let i = 0; i < textLine.length; i++) {
        let offsetX = 0;
        let lineWidth = 0;
        textLine[i].forEach(val => lineWidth += val.width);
        // 计算字间距
        lineWidth += (textLine[i].length - 1) * letterPacing
        for (let j = 0; j < textLine[i].length; j++) {
            const label = textLine[i][j];
            let left = 0;
            if (align == TextAlgin.CENTER) {
                left = (transform.size.x - lineWidth) / 2;
            } else if (align == TextAlgin.RIGHT) {
                left = transform.size.x - lineWidth;
            }
            ctx.fillText(label.value, left + offsetX, lineHeight - topOffset + i * lineHeight);
            offsetX += label.width + letterPacing;
        }
        if (lineWidth > maxWidth) {
            maxWidth = lineWidth;
        }
    }


    // if (text.texture) {
    //     text.texture.source = ctx.canvas;
    // } else {
    //     const image = await canvasHelper.toImage(ctx.canvas);
    //     text.texture = new Texture(image);
    // }
    text.redraw = false;
}

/**
 * 文字渲染
 * @param ctx 
 * @param node 
 * @returns 
 */
export default function textRender<T extends Text = Text>(ctx: CanvasRenderingContext2D, matrix: Matrix, text: T) {

    if (text.redraw) {
        autoWrapText(text);
    }
	const texture = text.texture;
    if (!texture || !texture.source) {
        return;
    }

    textureRender(ctx, text.node, matrix, text.texture);
}