import { Resource, Sprite, Texture, Transform } from "../../src";

export function createSpriteByName(name: string) {
    const spriteNode = new Transform(Sprite);
    const sprite = spriteNode.getComponent(Sprite)!;
    const res = Resource.get(name)!;
    sprite.texture = new Texture(res.data);
    sprite.resize();
    return sprite;
}