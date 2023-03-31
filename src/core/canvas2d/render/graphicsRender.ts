import { Graphics } from "../../component"
import { Matrix } from "../../math";
import { Texture } from "../../texture";
import textureRender from "./textureRender";

export default function graphicsRender<T extends Graphics = Graphics>(ctx: CanvasRenderingContext2D, matrix: Matrix, sprite: T) {
    if (!sprite.texture) {
        const g = sprite;
        const canvas = document.createElement('canvas') as HTMLCanvasElement;
        canvas.width = sprite.node.size.x;
        canvas.height = sprite.node.size.y;
        const _ctx = canvas.getContext('2d');
        for (let i = 0; i < g.tasks.length; i++) {
            const { action, args } = g.tasks[i];
            switch (action) {
                case 'begin':
                    _ctx.beginPath();
                    break;
                case 'moveTo':
                    _ctx.moveTo(args[0], args[1]);
                    break;
                case 'closePath':
                    _ctx.closePath();
                    break;
                case 'lineTo':
                    _ctx.lineTo(args[0], args[1]);
                    break;
                case 'stroke':
                    _ctx.strokeStyle = args[0];
                    _ctx.lineWidth = args[1];
                    _ctx.stroke();
                    break;
                case 'arc':
                    _ctx.arc(args[0], args[1], args[2], args[3], args[4]);
                    break;
                case 'fill':
                    _ctx.fillStyle = args[0];
                    _ctx.fill();
                    break;
                case 'ellipse':
                    _ctx.ellipse(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                    break;
            }
            const image = new Image();
            image.src = canvas.toDataURL();
            sprite.texture = new Texture(image);
            // document.body.append(image);
        }
    }
    if (sprite.texture) {
        textureRender(ctx, sprite.node, matrix, sprite.texture);
    }
}