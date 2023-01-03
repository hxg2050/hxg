import { Transform } from "../transform";
import { BaseContainer } from "./BaseContainer";
import { Vector2 } from "../math/Vector2";
import { ImageTexture } from "../texture";

export class Sprite extends BaseContainer {

    constructor(transform: Transform) {
        super(transform);
    }
    
    /**
     * 储存图片的相关信息
     */
    public texture?: ImageTexture;

    start(): void {
        super.start();
    }

    /**
     * 重置尺寸信息，根据当前图片纹理
     */
    resize() {
        if (!this.texture) {
            return;
        }
        this.node.size.set(this.texture.width, this.texture.height);
    }
}