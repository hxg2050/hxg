import { Node } from "../transform";

/**
 * transform矩阵计算
 * a c tx
 * b d ty
 * 0 0 1
 */
export class Matrix {
    // x 缩放 水平
    a: number = 1;
    // y 斜切 垂直
    b: number = 0;
    // x 斜切 水平
    c: number = 0;
    // y 缩放 垂直
    d: number = 1;
    // 位置
    tx: number = 0;
    // 位置
    ty: number = 0;

    // constructor(public transform: Transform) {

    // }

    // x = 0;
    // y = 0;

    // scaleX = 0;
    // scaleY = 0;

    // pivotX = 0;
    // pivotY = 0;

    // angle = 0;

    // translate(x: number, y: number) {
    //     this.x += x;
    //     this.y += y;
    // }

    // scale(x: number, y: number) {
    //     this.scaleX *= x;
    //     this.scaleY *= x;
    // }

    // rotate(angle: number) {
    //     this.angle += angle;
    // }

    append(matrix: Matrix) {
        const ma = this;
        const mb = matrix;
        this.a = ma.a * mb.a + ma.c * mb.b;
        this.b = ma.b * mb.a + ma.d * mb.b;
        this.c = ma.a * mb.c + ma.c * mb.d;
        this.d = ma.b * mb.c + ma.d * mb.d;
        this.tx = ma.a * mb.tx + ma.c * mb.ty + ma.tx;
        this.ty = ma.b * mb.tx + ma.d * mb.ty + ma.ty;
        return this;
    }

    prepend(matrix: Matrix) {
        const ma = matrix;
        const tx1 = this.tx;

        if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
            const a1 = this.a;
            const c1 = this.c;

            this.a = (a1 * matrix.a) + (this.b * matrix.c);
            this.b = (a1 * matrix.b) + (this.b * matrix.d);
            this.c = (c1 * matrix.a) + (this.d * matrix.c);
            this.d = (c1 * matrix.b) + (this.d * matrix.d);
        }

        this.tx = (tx1 * matrix.a) + (this.ty * matrix.c) + matrix.tx;
        this.ty = (tx1 * matrix.b) + (this.ty * matrix.d) + matrix.ty;

        return this;
    }

    set(a: number, b: number, c: number, d: number, tx: number, ty: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    }

    setNode(node: Node) {
        const sin = Math.sin(node.angle * Math.PI / 180);
        const cos = Math.cos(node.angle * Math.PI / 180);

        const a = node.scaleX * cos;
        const b = node.scaleX * sin;
        const c = -node.scaleY * sin;
        const d = node.scaleY * cos;
        const tx = node.x - node.pivotX * a - node.pivotY * c;
        const ty = node.y - node.pivotX * b - node.pivotY * d;
        this.set(a, b, c, d, tx, ty);
        return this;
    }

    reset() {
        return this.set(1, 0, 0, 1, 0, 0);
    }

    copyFrom(matrix: Matrix) {
        return this.set(...matrix.toArray());
    }

    toArray() {
        return [this.a, this.b, this.c, this.d, this.tx, this.ty] as const;
    }
}