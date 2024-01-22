import { Application } from "../Application";
import { touchEventListener } from "../event";
import { hidpi } from "./hidpi";
import { Mask, NinePanel } from "../component";
import { mask } from "./component/mask";
import { ninePanel } from "./component/ninePanel";
import { linkTransform } from "./listener";
import { ticker } from "../ticker";
import { LinkRenderer } from "./LinkRenderer";
import { each } from "./bridge";

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
export function canvas2d(canvas: HTMLCanvasElement, config: {
    dpi?: number
} = {}) {
    config = Object.assign({
        dpi: window.devicePixelRatio
    }, config);
    return function (app: Application) {
        /**
         * 设置canvas大小
         */
        canvas.width = app.config.width;
        canvas.height = app.config.height;

        /**
         * 自定义渲染器
         */
        const ctx = hidpi(canvas.getContext('2d')!, config.dpi);
        ctx.canvas.width *= config.dpi;
        ctx.canvas.height *= config.dpi;

        const renderer = new LinkRenderer();
        renderer.context = ctx;
        renderer.link(app.stage);

        let index = 0;

        for (let p in componentActions) {
            ticker.on(p, () => {
                const actions = componentActions[p];
                actions.forEach(val => each(val[0], val[1]));
            });
        }

        ticker.on('update', () => {
            if (app.stage.meta.renderer) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                app.stage.meta.renderer();
            }
        });
        ticker.start();
        // const renderer = new Renderer(ctx, app.stage);
        // /**
        //  * 创建一个刷新器
        //  */
        // const ticker = new Ticker();
        // ticker.on('update', renderer.render, renderer);
        // ticker.start();
        app.use(touchEventListener(canvas));
    }
}