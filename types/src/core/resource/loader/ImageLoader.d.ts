import { ILoader } from "./ILoader";
/**
 * 图片资源加载
 */
export declare class ImageLoader implements ILoader {
    load(source: string): Promise<HTMLImageElement>;
}
