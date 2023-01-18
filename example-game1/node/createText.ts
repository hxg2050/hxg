import { Layout, Text, Transform } from "../../src";

export function createText(label: string, width?: number, height?: number) {
    const node = new Transform(Text);
    const text = node.getComponent(Text)!;
    text.fontSize = 24;
    text.value = label;

    if (width != undefined) {
        node.size.x = width;
    }
    if (height != undefined) {
        node.size.y = height;
    }
    
    // 第一个渲染帧结束后重新矫正尺寸
    node.emitter.once(Transform.Event.TICKER_AFTER, () => {
        // if (width == undefined) {
        //     node.size.x = text.width;
        // }
        // if (height == undefined) {
        //     node.size.y = text.height;
        // }

        node.getComponent(Layout)?.saveNewSize();
    }, node);

    return text;
}