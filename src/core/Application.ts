import { Transform } from './transform';
import { Vector2 } from './math/Vector2';

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

    constructor(config: any = {}) {
        this.config = Object.assign({}, this.config, config);
        this.stage = new Transform();
        this.stage.size = new Vector2(this.config.width, this.config.height);
    }

    static run(config: Partial<Options> = {}) {
        return new this(config);
    }
}