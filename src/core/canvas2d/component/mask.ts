import { canvasHelper } from "../canvasHelper";
import { Matrix } from "../../math";
import { Mask, Sprite } from "../../component";
import { Texture } from "../../texture";

function maskTexture(maskComponent: Mask) {
    const node = maskComponent.node;
    const mask = maskComponent.value;
    
    const ctx = canvasHelper.createContext(...node.size.toArray(), 1);
    ctx.save();
    const matrix = new Matrix().setTransform(mask).get();
    ctx.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[6], matrix[7]);

    const mSprite = <Sprite>mask.container;

    ctx.drawImage(mSprite.texture.source, mSprite.texture.x, mSprite.texture.y, mSprite.texture.width, mSprite.texture.height, 0, 0, mSprite.node.size.x, mSprite.node.size.y);
    ctx.restore();
    ctx.globalCompositeOperation = 'source-in';

    const spriteTexture = maskComponent.texture;
    ctx.drawImage(spriteTexture.source, spriteTexture.x, spriteTexture.y);

    const texture = new Texture(ctx.canvas);
    texture.init = true;
    return texture;
}

export function mask(component: Mask) {
    (component.node.container as Sprite).texture = maskTexture(component);
    component.value.active = false;
}