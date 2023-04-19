import { Vector2 } from "../math";
import { BaseTexture } from "./BaseTexture";

export type TextureResource = HTMLImageElement | HTMLCanvasElement | ImageBitmap;

/**
 * 纹理
 * 能力，能够完整的描述一张素材
 * 统一传入处理
 * canvas 异步转 ImageBitmap
 */
export class Texture<T extends TextureResource = TextureResource> extends BaseTexture {
    /**
     * 旋转
     */
    rotation = 0;
    left = 0;
    top = 0;
    anchor: Vector2 = new Vector2();

    sourceSize?: Vector2;

    /**
     * 是否进行了初始化/是否需要初始化
     */
    init = false;

    _source?: T;
    get source() {
        return this._source;
    }

    set source(val: T) {
        this._source = val;
        this.width = this.source.width;
        this.height = this.source.height;
    }

    // source: HTMLImageElement;
    constructor(source?: T) {
        super();
        if (!source) {
            return;
        }
        this.source = source;
    }
}