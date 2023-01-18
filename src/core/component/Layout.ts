import { Component } from "../Component";
import { Vector2 } from "../math/Vector2";

/**
 * 控制布局
 * 当添加了控制布局组件后，原本的position、size和scale可能会被自动管控手动设置将不会生效
 * ```ts
 * // 创建节点
 * const node = new Transform();
 * // 添加布局组件
 * const layout = node.addComponent(Layout);
 * // 设置铺满整个父节点
 * layout.left = 0;
 * layout.right = 0;
 * layout.top = 0;
 * layout.right = 0;
 * // 放入父节点
 * parent.addChild(node);
 * ```
 */
export class Layout extends Component {
    private oldPosition: Vector2 = new Vector2();
    private oldSize: Vector2 = new Vector2();
    private oldScale: Vector2 = new Vector2();
    private oldRotation: number = 0;

    private _left?: number;
    /**
     * 相对左边的距离
     */
    get left() {
        return this._left;
    }
    set left(val: number | undefined) {
        this._left = val;
        this.resize();
    }

    private _top?: number;
    /**
     * 相对顶部的距离
     */
    get top() {
        return this._top;
    }
    set top(val: number | undefined) {
        this._top = val;
        this.resize();
    }

    private _right?: number;
    /**
     * 相对右边的距离
     */
    get right() {
        return this._right;
    }
    set right(val: number | undefined) {
        this._right = val;
        this.resize();
    }

    private _bottom?: number;
    /**
     * 相对底部的距离
     */
    get bottom() {
        return this._bottom;
    }
    set bottom(val: number | undefined) {
        this._bottom = val;
        this.resize();
    }

    private _vertical?: number;

    /**
     * 水平剧中
     * left 和 right 将失效
     * 注意：如果要让节点真正实现水平居中需要设置节点的`anchor`
     * ```ts
     * const node = new Transform();
     * node.anchor.x = 0.5;
     * node.addComponent(Layout);
     * ```
     */
    get vertical() {
        return this._vertical;
    }
    set vertical(val: number | undefined) {
        this._vertical = val;
        if (val === undefined) {
            return;
        }
        this.resize();
    }

    private _horizontal?: number;
    /**
     * 垂直居中
     * top 和 bottom 将失效
     * 注意：如果要让节点真正实现垂直居中需要设置节点的`anchor`
     * ```ts
     * const node = new Transform();
     * node.anchor.y = 0.5;
     * node.addComponent(Layout);
     * ```
     */
    get horizontal() {
        return this._horizontal;
    }
    set horizontal(val: number | undefined) {
        this._horizontal = val;
        if (val === undefined) {
            return;
        }
        this.resize();

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

    /**
     * 当挂载节点尺寸发生变化，且需要重新动态计算时调用
     * 将保存当前组件的位置和大小状态
     */
    saveNewSize() {
        this.oldPosition.set(this.node.position);
        this.oldSize.set(this.node.size);
        this.oldScale.set(this.node.scale);
        this.oldRotation = this.node.rotation;
        this.resize();
    }

    /**
     * 获取本地偏移
     */
    getOffsetLocation() {
        return this.node.size.clone().mul(this.node.anchor);
    }

    update(): void {
        this._markResize && this._resize();
    }

    _markResize = false;

    /**
     * 重新计算布局/矫正布局
     * ```ts
     * const node = new Transform();
     * const layout = node.addComponent(Layout);
     * node.anchor.set(0.5, 0.5);
     * layout.resize();
     * ```
     */
    resize() {
        this._markResize = true;
    }
    /**
     * 矫正布局
     */
    private _resize() {
        if (!this.node.parent) {
            return;
        }
        // console.log('resize');
        this._markResize = false;
        const { size, position } = this.node;
        if (this.vertical != undefined) {
            const parent = this.node.parent!;
            const position = this.node.position;
            position.x = parent.size.x / 2 + this.vertical;
            this.node.position = position;
        } else {

            if (this.left != undefined) {
                position.x = this.left;
            }

            if (this.right != undefined) {
                const parent = this.node.parent!;
                if (this.left != undefined) {
                    size.x = parent.size.x - this.left - this.right;
                    // size.x += this.node.getOffset().x;
                } else {
                    size.x = this.oldSize.x;
                    position.x = parent.size.x - this.right - size.x;
                    position.x += this.getOffsetLocation().x;
                }
            }

        }

        if (this.horizontal != undefined) {
            const parent = this.node.parent!;
            const position = this.node.position;
            position.y = parent.size.y / 2 + this.horizontal;
            this.node.position = position;
        } else {
            if (this.top != undefined) {
                position.y = this.top;
            }

            if (this.bottom != undefined) {
                const parent = this.node.parent!;
                if (this.top != undefined) {
                    size.y = parent.size.y - this.top - this.bottom;
                } else {
                    size.y = this.oldSize.y;
                    position.y = parent.size.y - this.bottom - size.y;
                    position.y += this.getOffsetLocation().y;
                }
            }
        }

        if (this.left != undefined) {
            position.x += this.getOffsetLocation().x;
        }
        if (this.top != undefined) {
            position.y += this.getOffsetLocation().y;
        }
        this.node.position = position;
        this.node.size = size;
    }
}