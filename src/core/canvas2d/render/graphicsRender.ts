import { Graphics } from "../../component"
import { Matrix } from "../../math";
import { Texture } from "../../texture";
import { canvasHelper } from "../canvasHelper";
import textureRender from "./textureRender";

export default async function graphicsRender<T extends Graphics = Graphics>(ctx: CanvasRenderingContext2D, matrix: Matrix, sprite: T) {
    if (!sprite.texture || sprite.redraw) {
        const g = sprite;
        const texture = sprite.texture;
            
        if (!texture.source) {
            canvasHelper.createContext(...sprite.node.size.toArray());
        }
        texture.source.width = sprite.node.size.x;
        texture.source.height = sprite.node.size.y;
        texture.source = texture.source;

        const _ctx = (texture.source as HTMLCanvasElement).getContext('2d');
        _ctx.clearRect(0, 0, ...sprite.node.size.toArray());
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

            sprite.redraw = false;
        }
    }
    if (sprite.texture) {
        textureRender(ctx, sprite.node, matrix, sprite.texture);
    }
}