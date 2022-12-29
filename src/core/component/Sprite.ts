import { Transform } from "../transform";
import { BaseContainer } from "./BaseContainer";
import { Vector2 } from "../math/Vector2";

export class Sprite extends BaseContainer {

    constructor(transform: Transform) {
        super(transform);
    }

    /**
     * 图片源
     */
    private _source?: HTMLImageElement;

    get source() {
        return this._source;
    }

    set source(val: HTMLImageElement | undefined) {
        this._source = val;
        if (val) {
            this.node.size = new Vector2(val.width, val.height);
        }
    }


    start(): void {
        super.start();
    }

    update(): void {
        // console.log(this.value.width, this.value.height);
    }
}