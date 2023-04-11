import { Texture } from "../texture";
import { Transform } from "../transform";
import { Component } from "./Component";
/**
 * mask遮罩
 * 在主节点上挂载一个mask，设置为mask.value的节点将不会被展示出来或激活参与其它动态布局计算，且必须将其设置为子节点
 * ```ts
 * // 创建节点
 * const node = new Transform();
 * // 添加遮罩
 * const mask = node.addComponent(Mask);
 * mask.value = node.addChild(new Transform());
 * // 放入父节点
 * parent.addChild(node);
 * ```
 */
export declare class Mask extends Component {
    /**
     * 是否需要重绘
     */
    renew: boolean;
    /**
     * 遮罩蒙版
     */
    value?: Transform;
    /**
     * 最终效果的纹理，这样设计不影响原节点和蒙版节点
     */
    texture?: Texture;
}
