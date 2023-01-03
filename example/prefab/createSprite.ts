import { Layout, Resource, Sprite, Transform } from "../../src";
import { ImageTexture } from "../../src/core/texture";

export function createSprite(url: string): Promise<Transform> {
    const transform = new Transform(Sprite);
    const sprite = transform.getComponent(Sprite)!;
    return new Promise((resolve, reject) => {
        Resource.load(url).then((img) => {
            sprite.texture = new ImageTexture(img);
            sprite.resize();
            resolve(transform);
        });
    });
}
