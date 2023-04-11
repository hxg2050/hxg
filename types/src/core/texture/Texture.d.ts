import { BaseTexture } from "./BaseTexture";
type Resource = HTMLImageElement | HTMLCanvasElement;
/**
 * 纹理
 */
export declare class Texture extends BaseTexture {
    _source?: Resource;
    get source(): Resource;
    set source(val: Resource);
    constructor(source?: Resource);
}
export {};
