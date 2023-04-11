import { Transform } from "../transform";
import { BaseContainer } from "./BaseContainer";
import { Texture } from "../texture";
/**
 * 图片显示组件
 * ```ts
 * // 创建一个图片节点
 * const node = new Transform(Sprite);
 * // 获取图片组件
 * const sprite = node.getComponent(Sprite);
 * // 加载图片资源
 * Resource.load('1.png').then((res: IRes) => {
 *      // 设置纹理素材
 *      sprite.texture = new ImageTexture(res.data);
 *      // 根据纹理重新设置挂载节点的尺寸
 *      sprite.resize();
 * });
 * ```
 */
export declare class Sprite extends BaseContainer {
    /**
     * 显示图片
     * @param transform 挂载的节点
     */
    constructor(transform: Transform);
    /**
     * 图片纹理，储存图片的相关信息
     */
    texture?: Texture;
    start(): void;
    /**
     * 根据当前图片纹理，重置节点尺寸信息
     * ```ts
     * const node = new Transform(Sprite);
     * const sprite = node.getComponent(Sprite)!;
     * sprite.resize();
     * ```
     */
    resize(): void;
}
