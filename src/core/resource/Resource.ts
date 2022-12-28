/**
 * 资源管理和加载
 */
export default class Resource {

    static cache: { [props: string]: HTMLImageElement } = {};

    /**
     * 加载资源
     * 1、图片资源
     */
    static load(source: string): Promise<HTMLImageElement> {
        if (!!this.cache[source]) {
            return Promise.resolve(this.cache[source]);
        }
        const image = new Image();
        image.src = source;
        return new Promise((resolve) => {
            image.addEventListener('load', () => {
                this.cache[source] = image;
                resolve(image);
            });
        });
    }
}