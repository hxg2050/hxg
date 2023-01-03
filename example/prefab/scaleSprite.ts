import { Layout, Resource, Sprite, Transform } from "../../src";
import { ImageTexture } from "../../src/core/texture";
import { ScaleAnimation } from "../component/ScaleAnimation";

export function scaleSprite() {
    const transform = new Transform(Sprite);
    transform.anchor.set(0.5, 0.5);
    const sprite = transform.getComponent(Sprite)!;
    transform.addComponent(ScaleAnimation);

    const source = '../assets/images/img.png';
    Resource.load(source).then((img) => {
        const texture = new ImageTexture(img);
        sprite.texture = texture;
        // 更具图片重置尺寸
        sprite.resize();
        const layout = transform.addComponent(Layout);
        layout.top = 0;
        layout.left = 0;
        layout.right = 0;
        layout.bottom = 0;
    });
    return transform;
}
