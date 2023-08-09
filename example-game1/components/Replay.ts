import { Component, TouchEvent, Transform } from "../../src";
import { Map } from "./Map";

export class Replay extends Component {

    playButton!: Transform;

    start(): void {
    }

    addEvents() {
        this.playButton.touch = true;
        this.playButton.emitter.once(TouchEvent.TOUCH_BEGIN, this.play, this);
    }

    /**
     * 重新开始游戏
     */
    play() {
        Map.ins().init(10, 10, 200);
        this.node.destroy();
    }
}