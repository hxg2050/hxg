import { Application } from "../Application";
import { touchEventListener } from "../event";
import { Renderer } from "./render";
import { ticker } from "../ticker";
import { hidpi } from "./hidpi";
import { Mask } from "../component";
import { mask } from "./component/Mask";
import { each } from "./bridge";

const componentActions = {
    beforeUpdate: [
        [Mask, mask]
    ],
    update: [],
    afterUpdate: []
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
        const ctx = hidpi(canvas.getContext('2d')!);
        const renderer = new Renderer(ctx, app.stage);
        /**
         * 创建一个刷新器
         */
        // const ticker = new Ticker();
        for (let p in componentActions) {
            ticker.on(p, () => {
                const action = componentActions[p];
                each(action[0], action[1]);
            });
        }
        ticker.on('update', renderer.render, renderer);
        ticker.start();
        app.use(touchEventListener(canvas));
    }
}