import { Sprite } from "../../component";
import { Mask } from "../../component/Mask";
import { Vector2 } from "../../math";
import { Matrix } from "../../math/Matrix";
import { ImageTexture } from "../../texture";
import { Transform } from "../../transform";
import { hidpi } from "../hidpi";

const maskWeak = new WeakMap();

const canvas = document.createElement('canvas');
document.body.append(canvas);

function createCanvas(size: Vector2) {
    const canvas = document.createElement('canvas');
    canvas.width = size.x;
    canvas.height = size.y;
    return canvas.getContext('2d');
}

function maskTexture(node: Transform, mask: Transform) {
    const ctx = createCanvas(node.size);
    ctx.save();
    const matrix = new Matrix().setTransform(mask).get();
    ctx.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[6], matrix[7]);

    const mSprite = <Sprite>mask.container;

    ctx.drawImage(mSprite.texture.source, mSprite.texture.x, mSprite.texture.y, mSprite.texture.width, mSprite.texture.height, 0, 0, mSprite.node.size.x, mSprite.node.size.y);
    ctx.restore();
    ctx.globalCompositeOperation = 'source-in';

    const sprite = <Sprite>node.container;
    ctx.drawImage(sprite.texture.source, sprite.texture.x, sprite.texture.y);

    const image = new Image();
    image.src = ctx.canvas.toDataURL();

    const texture = new ImageTexture(image);
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
    const _matrix = matrix.get();
    ctx.save();
    const mask = sprite.getComponent(Mask);
    if (mask) {
        if (!mask.texture) {
            mask.value.active = false;
            mask.texture = maskTexture(sprite.node, mask.value);
        }
        ctx.transform(_matrix[0], _matrix[3], _matrix[1], _matrix[4], _matrix[6], _matrix[7]);

        ctx.drawImage(mask.texture.source, mask.texture.x, mask.texture.y, mask.texture.width, mask.texture.height, 0, 0, sprite.node.size.x, sprite.node.size.y);
    } else {
        // ctx.globalCompositeOperation = 'source-over';
        ctx.transform(_matrix[0], _matrix[3], _matrix[1], _matrix[4], _matrix[6], _matrix[7]);
        ctx.drawImage(texture.source, texture.x, texture.y, texture.width, texture.height, 0, 0, sprite.node.size.x, sprite.node.size.y);
    }
    ctx.restore();
}