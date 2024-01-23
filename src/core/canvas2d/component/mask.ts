import { canvasHelper } from "../canvasHelper";
import { Matrix } from "../../math";
import { Mask, Sprite } from "../../component";
import { Texture } from "../../texture";
import textureRender from "../render/textureRender";

function maskTexture(maskComponent: Mask) {
    const node = maskComponent.node;
    const mask = maskComponent.value;

    const ctx = canvasHelper.createContext(...node.size.toArray());
    ctx.save();

    const matrix = new Matrix().copyFrom(mask.getLocalMatrix());
    ctx.transform(...matrix.toArray());
    const mSprite = <Sprite>mask.display;
    if (!mSprite || !mSprite.texture.source || mSprite.texture.width === 0 || mSprite.texture.height === 0) {
        return;
    }

    ctx.drawImage(mSprite.texture.source, mSprite.texture.x, mSprite.texture.y, mSprite.texture.width, mSprite.texture.height, 0, 0, mSprite.node.size.x, mSprite.node.size.y);
    ctx.restore();
    ctx.globalCompositeOperation = 'source-in';

    const spriteTexture = maskComponent.texture;
    // ctx.drawImage(spriteTexture.source, spriteTexture.x, spriteTexture.y);
    textureRender(ctx, node, matrix, spriteTexture);
    // console.log(ctx.canvas.width, ctx.canvas.height, maskComponent, spriteTexture.width, spriteTexture.height);

    const texture = new Texture(ctx.canvas);
    texture.init = true;
    return texture;
}

export function mask(component: Mask) {
    const texture = maskTexture(component);
    (component.node.display as Sprite).texture = texture;
    if (texture) {
        component.value.active = false;
    }
}