import { StoreEmitter as Emitter } from 'store-event';
/**
 * 刷新器
 */
export declare class Ticker extends Emitter {
    private _FPS;
    /**
     * 每秒帧数
     * 最大帧数不会超过浏览器刷新率
     * 默认每秒60帧
     */
    get FPS(): number;
    set FPS(val: number);
    /**
     * 记录上一帧的时间
     */
    lastTime: number;
    _stepTime: number;
    /**
     * 开始
     */
    start(): void;
    private runFrame;
    /**
     * 上一帧和当前帧间隔时间 ms
     */
    deltaTime: number;
    /**
     * 每次刷新要执行的内容
     */
    update(time: number): void;
    /**
     * 暂停
     */
    stop(): void;
    /**
     * 销毁
     */
    destroy(): void;
}
export declare const ticker: Ticker;
