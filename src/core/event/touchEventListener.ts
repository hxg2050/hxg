import { Application } from "../Application";
import { TouchEvent as CoreTouchEvent } from "./TouchEvent";

let eventNames:Partial<Record<keyof HTMLElementEventMap, CoreTouchEvent>> = {
    'click': CoreTouchEvent.TOUCH_TAP,
    'touchstart': CoreTouchEvent.TOUCH_BEGIN,
    'touchend': CoreTouchEvent.TOUCH_END,
    'touchmove': CoreTouchEvent.TOUCH_MOVE
};


const addMouseEvents = (app: Application, canvas: HTMLCanvasElement) => {
    // 计算canvas缩放之后的鼠标或点击的缩放
    // 这个和屏幕适配有关系
    const stageWidth = app.config.width;
    const canvasRealWidth = canvas.clientWidth;
    const canvasScale = stageWidth / canvasRealWidth;
    // 注册事件
    for (let name in eventNames) {
        canvas.addEventListener(name, (evt: TouchEvent) => {
            // console.log(evt);
            if (!(evt instanceof TouchEvent)) {
                return;
            }

            const point = {
                x: 0,
                y: 0
            };
            point.x = evt.changedTouches[0].clientX;
            point.y = evt.changedTouches[0].clientY;
            point.x *= canvasScale;
            point.y *= canvasScale;
            app.eventSystem.emit(eventNames[name], point);
        });
    }
}

export function touchEventListener(canvas: HTMLCanvasElement) {
    return function(app: Application) {
        addMouseEvents(app, canvas);
    }
}