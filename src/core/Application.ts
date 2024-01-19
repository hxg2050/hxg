import { Node } from './transform';
import { Vector2 } from './math';
import { EventSystem } from './system';
import { Container } from './component';

export type Options = Partial<{
    width: number;
    height: number;
}>
/**
 * 应用
 * ```ts
 * // 方式一
 * const app = new Applaction({
 *      width: 500,
 *      height: 500
 * });
 * ```
 * ```ts
 * // 方式二
 * const app = Applaction.run({
 *      width: 500,
 *      height: 500
 * });
 * ```
 */
export class Application {

    config: Options = {
        width: 400,
        height: 400
    };

    /**
     * 舞台，根节点
     */
    stage: Node;

    /**
     * 全局事件处理器
     */
    eventSystem: EventSystem;

    constructor(config: Options = {}) {
        this.config = Object.assign({}, this.config, config);
        this.stage = new Node(Container);
        this.stage.size = new Vector2(this.config.width, this.config.height);
        this.eventSystem = new EventSystem(this.stage);
    }

    // addMouseEvents() {

    //     const stageWidth = this.config.width;
    //     const canvasRealWidth = this.config.canvas.clientWidth;
    //     const canvasScale = stageWidth / canvasRealWidth;
    //     canvas.addEventListener('click', (evt: MouseEvent) => {
    //         app.eventSystem.emit(TouchEvent.TOUCH_TAP, {
    //             x: evt.offsetX * canvasScale,
    //             y: evt.offsetX * canvasScale,
    //         });
    //         console.log('click', evt);
    //     });
    // }

    /**
     * 插件拓展
     * 可注入到app
     * @param install 插件入口函数
     * @returns 
     */
    use(install: (app: Application) => void) {
        install(this);
        return this;
    }

    static run(config: Partial<Options> = {}) {
        return new this(config);
    }
}