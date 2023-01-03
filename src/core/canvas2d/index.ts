import { Application } from "../Application";
import { TouchEvent } from "../event";
import { Renderer } from "../render";
import { Ticker } from "../ticker";
import { hidpi } from "./hidpi";

let dpr = window.devicePixelRatio;

const addMouseEvents = (app: Application, canvas: HTMLCanvasElement) => {
    // 计算canvas缩放之后的鼠标或点击的缩放
    // 这个和屏幕适配有关系
    const stageWidth = app.config.width;
    const canvasRealWidth = canvas.clientWidth;
    const canvasScale = stageWidth / canvasRealWidth;
    canvas.addEventListener('click', (evt: MouseEvent) => {
        app.eventSystem.emit(TouchEvent.TOUCH_TAP, {
            x: evt.offsetX * canvasScale,
            y: evt.offsetY * canvasScale,
        });
    });
}

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
        const renderer = new Renderer(ctx, app);
        // canvas.getContext('2d')!.scale(1/dpr, 1/dpr);
        /**
         * 创建一个刷新器
         */
        const ticker = new Ticker();
        ticker.start();
        ticker.on('update', renderer.render, renderer);

        addMouseEvents(app, canvas);
    }
}