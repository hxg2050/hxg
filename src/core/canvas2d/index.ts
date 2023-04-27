import { Application } from "../Application";
import { touchEventListener } from "../event";
import { Renderer } from "./render";
import { ticker } from "../ticker";
import { hidpi } from "./hidpi";

/**
 * canvas2d相关工作
 */
export function canvas2d(canvas: HTMLCanvasElement) {
    return function(app: Application) {
        /**
         * 设置canvas大小
         */
        canvas.width = app.config.width;
        canvas.height = app.config.height;

        /**
         * 自定义渲染器
         */
        // const ctx = canvas.getContext('2d')!;
        const ctx = hidpi(canvas.getContext('2d')!);
        const renderer = new Renderer(ctx, app.stage);
        // canvas.getContext('2d')!.scale(1/dpr, 1/dpr);
        /**
         * 创建一个刷新器
         */
        // const ticker = new Ticker();
        ticker.start();
        ticker.on('update', renderer.render, renderer);
        app.use(touchEventListener(canvas));
    }
}