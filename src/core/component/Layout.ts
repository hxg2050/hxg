import { Component } from "../Component";
import { Transform } from "../transform";
import { Vector2 } from "../math/Vector2";

/**
 * 控制布局
 * 当添加了控制布局组件后，原本的position、size和scale会被自动管控手动设置将不会生效
 * 当同时设置左右布局时，scale = {x: 1, y: 1}, 动态设置宽高
 */
export class Layout extends Component {
    oldPosition: Vector2 = new Vector2();
    oldSize: Vector2 = new Vector2();
    oldScale: Vector2 = new Vector2();
    oldRotation: number = 0;

    // 居左
    private _left?: number;
    set left(val: number|undefined) {
        this._left = val;
        this.resize();
    }
    get left() {
        return this._left;
    }

    // 居上
    private _top?: number;
    set top(val: number|undefined) {
        this._top = val;
        this.resize();
    }
    get top() {
        return this._top;
    }

    // 居右
    private _right?: number;
    set right(val: number|undefined) {
        this._right = val;
        this.resize();
    }
    get right() {
        return this._right;
    }

    // 居下
    private _bottom?: number;
    set bottom(val: number|undefined) {
        this._bottom = val;
        this.resize();
    }
    get bottom() {
        return this._bottom;
    }

    /**
     * 水平剧中
     * left 和 right 将失效
     */
    private _vertical?: number;
    set vertical(val: number|undefined) {
        this._vertical = val;
        if (val === undefined) {
            return;
        }
        const parent = this.node.parent!;
        const position = this.node.position;
        position.x = parent.size.x / 2 + val;
        this.node.position = position;
    }
    get vertical() {
        return this._vertical;
    }

    /**
     * 垂直居中
     */
    private _horizontal?: number;
    set horizontal(val: number|undefined) {
        this._horizontal = val;
        if (val === undefined) {
            return;
        }
        const parent = this.node.parent!;
        const position = this.node.position;
        position.y = parent.size.y / 2 + val;
        this.node.position = position;
    }
    get horizontal() {
        return this._horizontal;
    }

    start() {
        // this.node.emitter.on(Transform.Event.INIT_SIZE, this.saveNewSize, this);
        // this.node.emitter.on(Transform.Event.RESIZE, () => {
        //     this.node.children.forEach(val => {
        //         const layout = val.getComponent(Layout);
        //         if (layout) {
        //             layout.resize();
        //         }
        //     });
        // }, this);
        this.saveNewSize();
    }

    saveNewSize() {
        console.log(this.node.size);
        this.oldPosition.set(this.node.position);
        this.oldSize.set(this.node.size);
        this.oldScale.set(this.node.scale);
        this.oldRotation = this.node.rotation;
        this.resize();
    }


    update(): void {
        this._markResize && this._resize();
    }

    _markResize = false;

    resize() {
        this._markResize = true;
    }
    /**
     * 矫正布局
     */
    _resize() {
        console.log('resize');
        this._markResize = false;
        const { size, position } = this.node;
        if (this.left != undefined) {
            position.x = this.left;
        }
        if (this.top != undefined) {
            position.y = this.top;
        }

        if (this.right != undefined) {
            const parent = this.node.parent!;
            if (this.left != undefined) {
                size.x = parent.size.x - this.left - this.right;
                // size.x += this.node.getOffset().x;
            } else {
                size.x = this.oldSize.x;
                position.x = parent.size.x - this.right - size.x;
                position.x += this.node.getOffset().x;
            }
        }

        if (this.bottom != undefined) {
            const parent = this.node.parent!;
            if (this.top != undefined) {
                size.y = parent.size.y - this.top - this.bottom;
            } else {
                size.y = this.oldSize.y;
                position.y = parent.size.y - this.bottom - size.y;
                position.y += this.node.getOffset().y;
            }
        }
        if (this.left != undefined) {
            position.x += this.node.getOffset().x;
        }
        if (this.top != undefined) {
            position.y += this.node.getOffset().y;
        }
        this.node.position = position;
        this.node.size = size;
    }
}