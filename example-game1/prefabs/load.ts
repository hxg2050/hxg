import { Layout, TextAlgin } from "../../src";
import { createText } from "../node/createText";

export function load() {

    const text = createText('', 100, 100);
    text.algin = TextAlgin.CENTER;
    text.node.anchor.set(0.5, 0.5);
    const layout = text.addComponent(Layout);
    layout.vertical = 0;
    layout.horizontal = 0;
    const tips = createText('资源加载中');
    text.node.addChild(tips.node);
    // tips.node.anchor.set(0.5, 0);
    tips.node.position.y = 40;
    return text;
}