import { Node } from "../../transform";
import { Sprite } from "../../component";
import { Matrix } from "../../math/Matrix";
import textureRender from "./textureRender";

/**
 * sprite渲染
 * 图片渲染
 * @param ctx 
 * @param node 
 * @returns 
 */
export default function spriteRender(ctx: CanvasRenderingContext2D, node: Node<Sprite>) {
    const texture = node.display.texture;
    if (!texture) {
        return;
    }
    // const mask = sprite.node.getComponent(Mask);
    // if (mask) {
    //     if (!mask.texture) {
    //         mask.value.active = false;
    //         mask.texture = maskTexture(sprite.node, mask.value);
    //     }
    //     textureRender(ctx, sprite.node, matrix, mask.texture);
    // } else {
    textureRender(ctx, node, node.getWorldMatrix(), texture);
    // }
}