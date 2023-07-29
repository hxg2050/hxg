import EE from 'eventemitter3'

/**
 * 刷新器
 */
export class Ticker extends EE {

    private _FPS = 60;
    /**
     * 每秒帧数
     * 最大帧数不会超过浏览器刷新率
     * 默认每秒60帧
     */
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
        this.paused = false;
        this.lastFrameTime = performance.now();
        this.runFrame();
    }

    animationFrame: number;

    private runFrame() {
        this.animationFrame = requestAnimationFrame((time) => {
            this.update(time);
            this.runFrame();
            this.lastFrameTime = time;
        });
    }

    /**
     * 上一帧和当前帧间隔时间 ms
     */
    deltaTime: number = 1;
    /**
     * 上一次屏幕刷新的时间
     */
    lastFrameTime = 0;

    /**
     * 需要填补的时间
     */
    fillTime = 0;

    /**
     * 每次刷新要执行的内容
     */
    update(time: number) {
        /**
         * 计算两帧间隔时间
         */
        this.deltaTime = (time - this.lastTime);

        this.fillTime += time - this.lastFrameTime;

        if (this.fillTime > this._stepTime * 2) {
            this.fillTime = this._stepTime * 2;
        }

        if (this.deltaTime < this._stepTime && this.fillTime < this._stepTime) {
            // this.fillTime += time - this.lastFrameTime;
            return;
        }
        this.fillTime -= this._stepTime;

        this.emit('beforeUpdate', this.deltaTime);
        /**
         * time: 上一帧和当前帧时间间隔
         */
        this.emit('update', this.deltaTime);
        this.emit('afterUpdate', this.deltaTime);
        this.lastTime = time;
    }

    paused = false;

    /**
     * 暂停
     */
    stop() {
        this.paused = true;
        cancelAnimationFrame(this.animationFrame);
    }

    /**
     * 销毁
     */
    destroy() {
        
    }
}

export const ticker = new Ticker();