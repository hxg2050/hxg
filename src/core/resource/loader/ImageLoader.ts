import { ILoader } from "./ILoader";

/**
 * 图片资源加载
 */
export class ImageLoader implements ILoader {
    load(source: string): Promise<HTMLImageElement> {
        const image = new Image();
        image.src = source;
        return new Promise((resolve) => {
            image.addEventListener('load', () => {
                resolve(image);
            });
        });
    }
}