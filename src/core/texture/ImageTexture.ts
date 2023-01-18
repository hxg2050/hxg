import { BaseTexture } from "./BaseTexture";

/**
 * 图片纹理
 */
export class ImageTexture extends BaseTexture {
    // source: HTMLImageElement;
    constructor(public source: HTMLImageElement) {
        super();
        this.width = source.width;
        this.height = source.height;
    }
}