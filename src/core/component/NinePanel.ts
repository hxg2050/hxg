import { Texture } from "../texture";
import { Transform } from "../transform";
import { Component } from "./Component";
import { Sprite } from "./Sprite";

/**
 * 九宫格绘制
 * 将原图拆分9部分
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

        this.node.emitter.on(Transform.Event.RESIZE, this.toRedraw, this);
    }

    /**
     * 重新生成
     */
    toRedraw() {
        this.redraw = true;
    }
    redraw = false;
}