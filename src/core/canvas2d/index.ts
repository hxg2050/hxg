import { Application } from "../Application";
import { touchEventListener } from "../event";
import { Renderer } from "./render";
import { ticker } from "../ticker";
import { hidpi } from "./hidpi";
import { Mask, NinePanel } from "../component";
import { mask } from "./component/mask";
import { each } from "./bridge";
import { ninePanel } from "./component/ninePanel";

const componentActions = {
    beforeUpdate: [
        [Mask, mask],
        [NinePanel, ninePanel],
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
                const actions = componentActions[p];
                actions.forEach(val => each(val[0], val[1]));
            });
        }
        ticker.on('update', renderer.render, renderer);
        ticker.start();
        app.use(touchEventListener(canvas));
    }
}