import { Vector2 } from "../math";
import { BaseTexture } from "./BaseTexture";

export type TextureResource = HTMLImageElement | HTMLCanvasElement;

/**
 * 纹理
 */
export class Texture extends BaseTexture {
    /**
     * 旋转
     */
    rotation = 0;
    left = 0;
    top = 0;
    anchor: Vector2 = new Vector2();

    _source?: TextureResource;
    get source() {
        return this._source;
    }

    set source(val: TextureResource) {
        this._source = val;
        this.width = this.source.width;
        this.height = this.source.height;
    }

    // source: HTMLImageElement;
    constructor(source?: TextureResource) {
        super();
        if (!source) {
            return;
        }
        this.source = source;
    }
}