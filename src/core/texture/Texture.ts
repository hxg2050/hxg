import { BaseTexture } from "./BaseTexture";

/**
 * 纹理
 */
export class Texture extends BaseTexture {
    // source: HTMLImageElement;
    constructor(public source: HTMLImageElement) {
        super();
        source.addEventListener('load', this.onLoadFn);
        this.width = source.width;
        this.height = source.height;
    }

    onLoadFn = this.onLoad.bind(this);
    onLoad() {
        this.width = this.source.width;
        this.height = this.source.height;
    }
}