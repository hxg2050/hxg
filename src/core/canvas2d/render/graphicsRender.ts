import { Graphics } from "../../component"
import { Node } from "../../transform"
import { IVector2, Matrix } from "../../math";
import { BaseTexture, Texture } from "../../texture";
import { ICanvasContext, canvasHelper } from "../canvasHelper";
import textureRender from "./textureRender";
import spriteRender from "./spriteRender";

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


export const gr = (ctx: ICanvasContext, node: Node<Graphics>) => {
    // const ctx = node.meta.ctx;

    // 记录偏移量



    const display = node.display;
    if (display.dirty) {
        if (!node.meta.offset) {
            node.meta.offset = new Matrix();
        }
        const tempMatrix = node.meta.offset;
        console.log('gr');

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


        for (let i = 0; i < display.tasks.length; i++) {
            const { action, args } = display.tasks[i];
            switch (action) {
                case 'begin':
                    break;
                case 'moveTo':
                    rectangle.push({
                        x: args[0],
                        y: args[1]
                    });
                    break;
                case 'closePath':
                    break;
                case 'lineTo':
                    rectangle.push({
                        x: args[0],
                        y: args[1]
                    });
                    break;
                case 'stroke':
                    // 边框，有几种模式，1、外边框，2、居中，3、内边狂
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
            }
        }
        const textureSize = [rectangle.points[2] - rectangle.points[0], rectangle.points[3] - rectangle.points[1]] as const;

        texCtx.canvas.computedWidth = textureSize[0];
        texCtx.canvas.computedHeight = textureSize[1];
        display.texture.width = textureSize[0];
        display.texture.height = textureSize[1];
        console.log(rectangle);

        texCtx.clearRect(0, 0, ...textureSize);

        for (let i = 0; i < display.tasks.length; i++) {
            const { action, args } = display.tasks[i];
            switch (action) {
                case 'begin':
                    texCtx.beginPath();
                    break;
                case 'moveTo':
                    texCtx.moveTo(args[0] - rectangle.points[0], args[1] - rectangle.points[1]);
                    break;
                case 'closePath':
                    texCtx.closePath();
                    break;
                case 'lineTo':
                    texCtx.lineTo(args[0] - rectangle.points[0], args[1] - rectangle.points[1]);
                    break;
                case 'stroke':
                    texCtx.strokeStyle = args[0];
                    texCtx.lineWidth = args[1];
                    texCtx.stroke();
                    break;
                case 'arc':
                    texCtx.arc(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4]);
                    break;
                case 'fill':
                    texCtx.fillStyle = args[0];
                    texCtx.fill();
                    break;
                case 'ellipse':
                    texCtx.ellipse(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4], args[5], args[6], args[7]);
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

    textureRender(ctx, display.texture, tempMatrix, display.texture);
}


export default async function graphicsRender<T extends Graphics = Graphics>(ctx: CanvasRenderingContext2D, matrix: Matrix, sprite: T) {

    const component = sprite;
    component.meta.link = true;

    const tempMatrix = new Matrix();
    if (!sprite.texture || sprite.redraw) {
        const g = sprite;
        // 记录一个矩形范围
        const rectangle = createBound();

        const point = {
            x: 0,
            y: 0
        }

        for (let i = 0; i < g.tasks.length; i++) {
            const { action, args } = g.tasks[i];
            switch (action) {
                case 'begin':
                    break;
                case 'moveTo':
                    point.x = args[0];
                    point.y = args[1];
                    rectangle.push(point);
                    break;
                case 'closePath':
                    break;
                case 'lineTo':
                    point.x = args[0];
                    point.y = args[1];
                    rectangle.push(point);
                    break;
                case 'stroke':
                    // 边框，有几种模式，1、外边框，2、居中，3、内边狂
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
                    // rectangle.x = Math.min(args[0] - args[2], rectangle.x);
                    // rectangle.y = Math.min(args[1] - args[3], rectangle.y);
                    // rectangle.width = Math.max(args[2], rectangle.width);
                    // rectangle.height = Math.max(args[3], rectangle.height);
                    break;
            }
        }
        const textureSize = [rectangle.points[2] - rectangle.points[0], rectangle.points[3] - rectangle.points[1]] as const;

        // if (!sprite.texture) {
        // console.log(rectangle.points, textureSize);
        const canvas = canvasHelper.createContext(...textureSize).canvas;
        sprite.texture = new Texture(canvas);
        // sprite.texture.width = textureSize[0];
        // sprite.texture.height = textureSize[1];
        sprite.texture.init = true;
        // }


        const texture = sprite.texture;
        // texture.source.width = textureSize[0];
        // texture.source.height = textureSize[1];
        const _ctx = (texture.source as HTMLCanvasElement).getContext('2d')!;
        _ctx.clearRect(0, 0, ...textureSize);

        // console.log(sprite.texture.source.width, sprite.texture.source.height);

        for (let i = 0; i < g.tasks.length; i++) {
            const { action, args } = g.tasks[i];
            switch (action) {
                case 'begin':
                    _ctx.beginPath();
                    break;
                case 'moveTo':
                    _ctx.moveTo(args[0] - rectangle.points[0], args[1] - rectangle.points[1]);
                    break;
                case 'closePath':
                    _ctx.closePath();
                    break;
                case 'lineTo':
                    _ctx.lineTo(args[0] - rectangle.points[0], args[1] - rectangle.points[1]);
                    break;
                case 'stroke':
                    _ctx.strokeStyle = args[0];
                    _ctx.lineWidth = args[1];
                    _ctx.stroke();
                    break;
                case 'arc':
                    _ctx.arc(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4]);
                    break;
                case 'fill':
                    _ctx.fillStyle = args[0];
                    _ctx.fill();
                    break;
                case 'ellipse':
                    _ctx.ellipse(args[0] - rectangle.points[0], args[1] - rectangle.points[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                    break;
            }

        }

        tempMatrix.value[6] = rectangle.points[0];
        tempMatrix.value[7] = rectangle.points[1]
        sprite.redraw = false;

        // console.log(texture.width, texture.height);
    }
    if (sprite.texture) {
        matrix.prepend(tempMatrix);
        textureRender(ctx, sprite.node, matrix, sprite.texture);
        tempMatrix.value[6] *= -1;
        tempMatrix.value[7] *= -1;
        matrix.prepend(tempMatrix);
    }
}