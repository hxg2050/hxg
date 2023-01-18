import { Resource, Sprite, Transform } from "../../src";
import { ImageTexture } from "../../src/core/texture";

export function createSpriteByName(name: string) {
    const spriteNode = new Transform(Sprite);
    const sprite = spriteNode.getComponent(Sprite)!;
    const res = Resource.get(name)!;
    sprite.texture = new ImageTexture(res.data);
    sprite.resize();
    return sprite;
}