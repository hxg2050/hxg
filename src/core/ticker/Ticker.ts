import { Emitter } from "../emitter";

/**
 * 刷新器
 */
export class Ticker extends Emitter {

    /**
     * 每秒帧数
     * 最大帧数不会超过浏览器刷新率
     * 默认每秒60帧
     */
    private _FPS = 60;
    get FPS() {
        return this._FPS;
    }
    set FPS(val: number) {
        this._FPS = val;
        this._stepTime = 1000 / this._FPS;
    }

    /**
     * 记录上一帧的时间
     */
    lastTime = 0;

    _stepTime = 1000 / this.FPS;

    /**
     * 开始
     */
    start() {
        this.runFrame();
    }

    runFrame() {
        requestAnimationFrame((time) => {
            this.update(time);
            this.runFrame();
        });
    }

    /**
     * 每次刷新要执行的内容
     */
    update(time: number) {
        /**
         * 判断是否要执行当前帧
         */
        if (time - this.lastTime < this._stepTime) {
            return;
        }
        /**
         * time: 上一帧和当前帧时间间隔
         */
        this.emit('update', time - this.lastTime);
        this.lastTime = time;
    }

    /**
     * 暂停
     */
    stop() {

    }

    /**
     * 销毁
     */
    destroy() {
        
    }
}