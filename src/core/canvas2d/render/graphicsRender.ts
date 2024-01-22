import { Graphics } from "../../component"
import { Node } from "../../transform"
import { IVector2, Matrix, Vector2 } from "../../math";
import { BaseTexture, Texture } from "../../texture";
import { ICanvasContext, canvasHelper } from "../canvasHelper";
import textureRender from "./textureRender";
import spriteRender from "./spriteRender";

/**
 * 绘制任务
 */
class DrawTask {
    borderWidth = 0;
    borderStyle: string = null;
    borderAlignment = 0;

    fillStyle: string = null;
    constructor(public ctx: CanvasRenderingContext2D) {
        console.log(ctx.canvas);
    }

    drawRect(
        x: number = 0,
        y: number = 0,
        width: number = 0,
        height: number = 0,
        radius: number = 0
    ) {
        const ctx = this.ctx;

        // if (this.fillStyle !== null) {
        //     ctx.fillStyle = this.fillStyle;
        // }

        // 如果没有圆角
        const offset = (0.5 - this.borderAlignment) * this.borderWidth;
        const _x = x + offset;
        const _y = y + offset;
        const _w = width - offset * 2;
        const _h = height - offset * 2;
        if (radius == 0) {
            ctx.rect(_x, _y, _w, _h);
        } else {
            ctx.roundRect(_x, _y, _w, _h, radius);
        }

        // ctx.fill();

        // if (this.borderWidth > 0) {
        //     this.ctx.lineWidth = this.borderWidth;
        //     if (this.borderStyle !== null) {
        //         ctx.strokeStyle = this.borderStyle;
        //     }
        //     ctx.stroke();
        // }
        // return;

        // 圆角手动计算
        // const offset = (0.5 - this.borderAlignment) * this.borderWidth;
        // const _radius = Math.max(0, Math.min(radius, Math.min(width, height) / 2));
        // x += offset;
        // y += offset;
        // width -= 2 * offset;
        // height -= 2 * offset;


        // ctx.arc(x + _radius, y + _radius, _radius, -Math.PI, -Math.PI / 2);
        // ctx.lineTo(x + width - _radius, y);
        // ctx.arc(x + width - _radius, y + _radius, _radius, -Math.PI / 2, 0);
        // ctx.lineTo(x + width, y + height - _radius);
        // ctx.arc(x + width - _radius, y + height - _radius, _radius, 0, Math.PI / 2);
        // ctx.lineTo(x + _radius, y + height);
        // ctx.arc(x + _radius, y + height - _radius, _radius, Math.PI / 2, -Math.PI);
        // ctx.closePath();
        // ctx.fill();

        // if (this.borderWidth > 0) {
        //     this.ctx.lineWidth = this.borderWidth;
        //     if (this.borderStyle !== null) {
        //         ctx.strokeStyle = this.borderStyle;
        //     }
        //     ctx.stroke();
        // }
    }

    // texCtx.arc(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4]);
    drawArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {

        const ctx = this.ctx;

        // if (this.fillStyle !== null) {
        //     ctx.fillStyle = this.fillStyle;
        // }


        const offset = (0.5 - this.borderAlignment) * this.borderWidth;
        const _radius = radius - offset;
        // x += offset;
        // y += offset;

        ctx.arc(x, y, _radius, startAngle, endAngle);
        // ctx.fill();

        // if (this.borderWidth > 0) {
        //     this.ctx.lineWidth = this.borderWidth;
        //     if (this.borderStyle !== null) {
        //         ctx.strokeStyle = this.borderStyle;
        //     }
        //     ctx.stroke();
        // }
    }
    drawEllipse(
        x: number,
        y: number,
        radiusX: number,
        radiusY: number,
        rotation: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean = false
    ) {

        const ctx = this.ctx;

        // if (this.fillStyle !== null) {
        //     ctx.fillStyle = this.fillStyle;
        // }


        const offset = (0.5 - this.borderAlignment) * this.borderWidth;
        x += offset;
        y += offset;
        radiusX -= offset;
        radiusY -= offset;

        ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
        // ctx.fill();

        // if (this.borderWidth > 0) {
        //     this.ctx.lineWidth = this.borderWidth;
        //     if (this.borderStyle !== null) {
        //         ctx.strokeStyle = this.borderStyle;
        //     }
        //     ctx.stroke();
        // }
    }

    moveTo(x: number, y: number) {
        this.ctx.moveTo(x, y);
    }

    lineTo(x: number, y: number) {
        this.ctx.lineTo(x, y);
    }

    closePath() {
        this.ctx.closePath();
    }

    end() {

        if (this.fillStyle !== null) {
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.fill();
        }

        if (this.borderWidth > 0) {
            this.ctx.lineWidth = this.borderWidth;
            if (this.borderStyle !== null) {
                this.ctx.strokeStyle = this.borderStyle;
            }
            this.ctx.stroke();
        }
    }

    reset() {
        this.borderWidth = 0;
        this.borderStyle = null;
        this.borderAlignment = 0;
        this.fillStyle = null;
    }
}

const createBound = () => {
    const points = [Infinity, Infinity, -Infinity, -Infinity];

    const push = (point: IVector2) => {
        const l = Math.min(points[0], point.x);
        const r = Math.max(points[2], point.x);
        const t = Math.min(points[1], point.y);
        const b = Math.max(points[3], point.y);
        points[0] = l;
        points[1] = t;
        points[2] = r;
        points[3] = b;
    }

    return {
        points,
        push
    }
}


export const graphicsRender = (ctx: ICanvasContext, node: Node<Graphics>) => {
    // const ctx = node.meta.ctx;

    // 记录偏移量

    const display = node.display;
    if (display.dirty) {
        if (!node.meta.offset) {
            node.meta.offset = new Matrix();
        }
        if (!node.meta.size) {
            node.meta.size = new Vector2();
        }
        const tempMatrix = node.meta.offset;

        if (!display.texture) {
            display.texture = new Texture(canvasHelper.createContext().canvas);
        }
        if (!display.texture.source) {
            display.texture.source = canvasHelper.createContext().canvas;
        }
        const texCtx = (display.texture.source as HTMLCanvasElement).getContext('2d', {
            willReadFrequently: true
        }) as ICanvasContext;

        const rectangle = createBound();

        let lineWidth = 0;
        let borderAlignment = 0;

        for (let i = 0; i < display.tasks.length; i++) {
            const { action, args } = display.tasks[i];
            const offset = (0.5 - borderAlignment) * lineWidth;

            switch (action) {
                case 'begin':
                    lineWidth = 0;
                    break;
                case 'moveTo':
                    rectangle.push({
                        x: args[0] - offset,
                        y: args[1] - offset
                    });
                    break;
                case 'closePath':
                    break;
                case 'lineTo':
                    rectangle.push({
                        x: args[0] + offset,
                        y: args[1] + offset
                    });
                    break;
                case 'stroke':
                    // 边框，有几种模式，1、外边框(默认?)，2、居中(纯线条情况)，3、内边狂
                    const width = args[0];
                    const alignment = args[2];
                    lineWidth = args[1];
                    break;
                case 'arc':
                    // 先记录全部
                    rectangle.push({
                        x: args[0] - args[2],
                        y: args[1] - args[2]
                    });

                    rectangle.push({
                        x: args[0] + args[2],
                        y: args[1] + args[2]
                    });
                    break;
                case 'fill':
                    break;
                case 'ellipse':

                    rectangle.push({
                        x: args[0] - args[2],
                        y: args[1] - args[3]
                    });
                    rectangle.push({
                        x: args[0] + args[2],
                        y: args[1] + args[3]
                    });
                    break;
                case 'rect':
                case 'roundedRect':
                    rectangle.push({
                        x: args[0],
                        y: args[1]
                    });

                    rectangle.push({
                        x: args[0] + args[2],
                        y: args[1] + args[3]
                    });
                    break;
            }
        }
        const textureSize = [rectangle.points[2] - rectangle.points[0], rectangle.points[3] - rectangle.points[1]] as const;

        texCtx.canvas.computedWidth = textureSize[0];
        texCtx.canvas.computedHeight = textureSize[1];
        display.texture.width = texCtx.canvas.width;
        display.texture.height = texCtx.canvas.height;
        node.meta.size.set(textureSize[0], textureSize[1]);
        console.log(rectangle, textureSize);

        texCtx.clearRect(0, 0, ...textureSize);

        const drawTask = new DrawTask(texCtx);

        for (let i = 0; i < display.tasks.length; i++) {
            const { action, args } = display.tasks[i];
            switch (action) {
                case 'begin':
                    texCtx.beginPath();
                    drawTask.reset();
                    break;
                case 'end':
                    drawTask.end();
                    break;
                case 'moveTo':
                    drawTask.moveTo(args[0] - rectangle.points[0], args[1] - rectangle.points[1]);
                    break;
                case 'closePath':
                    drawTask.closePath();
                    break;
                case 'lineTo':
                    drawTask.lineTo(args[0] - rectangle.points[0], args[1] - rectangle.points[1]);
                    break;
                case 'stroke':
                    drawTask.borderStyle = args[0];
                    drawTask.borderWidth = args[1];
                    break;
                case 'arc':
                    drawTask.drawArc(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4]);
                    break;
                case 'fill':
                    // texCtx.fillStyle = args[0];
                    // texCtx.fill();
                    drawTask.fillStyle = args[0];
                    break;
                case 'ellipse':
                    drawTask.drawEllipse(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                    break;
                case 'rect':
                    drawTask.drawRect(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4]);
                    break;
                case 'roundedRect':
                    drawTask.drawRect(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4]);
                    break;
            }

        }

        tempMatrix.tx = rectangle.points[0];
        tempMatrix.ty = rectangle.points[1];
        display.dirty = false;
    }
    const tempMatrix = new Matrix();
    tempMatrix.copyFrom(node.meta.offset);
    tempMatrix.prepend(node.getWorldMatrix());

    textureRender(ctx, node.meta.size, tempMatrix, display.texture);
    console.log(1121213);
}