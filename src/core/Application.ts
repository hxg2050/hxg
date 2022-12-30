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

    static run(config: Partial<Options> = {}) {
        return new this(config);
    }
}