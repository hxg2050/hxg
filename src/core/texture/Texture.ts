import { BaseTexture } from "./BaseTexture";

type Resource = HTMLImageElement | HTMLCanvasElement;

/**
 * 纹理
 */
export class Texture extends BaseTexture {

    _source?: Resource;
    get source() {
        return this._source;
    }

    set source(val: Resource) {
        this._source = val;
        this.width = this.source.width;
        this.height = this.source.height;
    }

    // source: HTMLImageElement;
    constructor(source?: Resource) {
        super();
        if (!source) {
            return;
        }
        this.source = source;
    }
}