import { Transform } from './transform';
import { Vector2 } from './math';
import { EventSystem } from './system';

export type Options = {
    width: number;
    height: number;
}

export class Application {

    config: Options = {
        width: 400,
        height: 400
    };

    stage: Transform;

    eventSystem: EventSystem;

    constructor(config: any = {}) {
        this.config = Object.assign({}, this.config, config);
        this.stage = new Transform();
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