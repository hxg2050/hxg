import { Sprite } from "../../component";
import { Mask } from "../../component/Mask";
import { Vector2 } from "../../math";
import { Matrix } from "../../math/Matrix";
import { Texture } from "../../texture";
import { Transform } from "../../transform";
import { canvasHelper } from "../canvasHelper";
import textureRender from "./textureRender";

function maskTexture(node: Transform, mask: Transform) {
    const ctx = canvasHelper.createContext(...node.size.toArray(), 1);
    ctx.save();
    const matrix = new Matrix().setTransform(mask).get();
    ctx.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[6], matrix[7]);

    const mSprite = <Sprite>mask.container;

    ctx.drawImage(mSprite.texture.source, mSprite.texture.x, mSprite.texture.y, mSprite.texture.width, mSprite.texture.height, 0, 0, mSprite.node.size.x, mSprite.node.size.y);
    ctx.restore();
    ctx.globalCompositeOperation = 'source-in';

    const sprite = <Sprite>node.container;
    ctx.drawImage(sprite.texture.source, sprite.texture.x, sprite.texture.y);

    const texture = new Texture(ctx.canvas);
    texture.init = true;
    return texture;
}

/**
 * sprite渲染
 * 图片渲染
 * @param ctx 
 * @param node 
 * @returns 
 */
export default function spriteRender<T extends Sprite = Sprite>(ctx: CanvasRenderingContext2D, matrix: Matrix, sprite: T) {
    const texture = sprite.texture;
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
        textureRender(ctx, sprite.node, matrix, texture);
    // }
}