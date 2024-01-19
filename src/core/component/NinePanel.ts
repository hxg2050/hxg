import { Vector2 } from "../math";
import { Texture } from "../texture";
import { Node } from "../transform";
import { Component } from "./Component";
import { Sprite } from "./Sprite";

/**
 * 九宫格绘制
 * 将原图拆分9部分
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
 * 
 *      const ninePanel = node.addComponent(NinePanel);
 *      ninePanel.left = 7;
 *      ninePanel.right = 7;
 *      ninePanel.top = 7;
 *      ninePanel.bottom = 7;
 *      node.width = 400;
 *      node.height = 200;
 * });
 * ```
 */
export class NinePanel extends Component {
    private _left = 0;
    get left() {
        return this._left;
    }
    set left(val: number) {
        this._left = val;
        this.toRedraw();
    }

    private _top = 0;
    get top() {
        return this._top;
    }
    set top(val: number) {
        this._top = val;
        this.toRedraw();
    }

    private _right = 0;
    get right() {
        return this._right;
    }
    set right(val: number) {
        this._right = val;
        this.toRedraw();
    }

    private _bottom = 0;
    get bottom() {
        return this._bottom;
    }
    set bottom(val: number) {
        this._bottom = val;
        this.toRedraw();
    }

    texture?: Texture;

    start(): void {
        if (!this.texture) {
            this.texture = (<Sprite>this.node.container).texture;
        }

        this.node.size.emitter.on(Vector2.Event.CHANGE, this.toRedraw, this);
    }

    /**
     * 重新生成
     */
    toRedraw() {
        this.redraw = true;
    }
    redraw = false;
}