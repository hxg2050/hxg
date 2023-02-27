import { Application } from "../Application";
import { TouchEvent } from "./TouchEvent";


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

export function touchEventListener(canvas: HTMLCanvasElement) {
    return function(app: Application) {
        addMouseEvents(app, canvas);
    }
}