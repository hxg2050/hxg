import { BaseTexture } from "./BaseTexture";

/**
 * ๅพ็็บน็
 */
export class ImageTexture extends BaseTexture {
    // source: HTMLImageElement;
    constructor(public source: HTMLImageElement) {
        super();
        this.width = source.width;
        this.height = source.height;
    }
}