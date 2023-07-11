import EE from "eventemitter3";
import { Timeline } from "../modules";
import { Component } from "./Component";

/**
 * 动画组件
 * 插值，可插值属性才能进行插值[todo]
 */
export class Animation extends Component {
    static Event = {
        /**
         * 动画播放完成
         */
        ENDED: 'ended'
    } as const;
    /**
     * 用于记录回调的时间线,在target时间线后执行
     */
    timeline = new EE();

    /**
     * 动画总长
     */
    timeMax = 0;
    /**
     * 最大帧数
     */
    total = 0;
    /**
     * 当前时间线
     */
    time = 0;

    /**
     * 时间线
     * 每一个对象一个时间线
     * 还有一个总时间线，可以用于记录一些信息
     */
    get targets() {
        return this.animations[this.animation] || [];
    }

    /**
     * 动画配置
     */
    animations: Record<string, Timeline[]> = {};

    private cacheTime = 0;

    /**
     * 播放下一帧
     */
    next() {
        this.cacheTime += this.speed;
        if (this.cacheTime >= this.total) {
            this.cacheTime = 0;
            this.onEnded();
            return;
        }

        if (Math.floor(this.cacheTime) !== this.time) {
            this.targets.forEach(this.nextAction.bind(this));
            this.timeline.emit(this.time.toString(), this);
        }

        this.time = Math.floor(this.cacheTime);
    }

    /**
     * 当有新的属性需要更新时调用
     * @param val 
     */
    protected nextAction(val: Timeline) {
        const k = val.get(this.time);
        if (k) {
            Object.assign(val.target, k);
        }
    }

    /**
     * 添加一个熟悉变更时间线
     * @param timeline 
     */
    addTimeline(timeline: Timeline) {
        this.targets.push(timeline);
        this.total = Math.max(timeline.total, this.total);
    }

    /**
     * 设置一个属性变更时间线
     * @param timeline 
     */
    setTimeline(timelines: Timeline[], name?: string) {
        this.animations[name] = timelines;
        timelines.forEach(val => {
            this.total = Math.max(val.total, this.total);
        })
    }

    /**
     * 播放上一帧
     */
    prev() {
        this.targets.forEach(val => val.prev());
    }

    animation: string = 'default';

    /**
    * 循环次数，0：不循环，-1：一直循环
    */
    loop = 0;
    /**
     * 已经播放次数
     */
    playCount: number = 0;
    /**
     * 播放速度100%
     */
    speed = 1;

    /**
     * 指示是否被暂停
     */
    paused: boolean = true;

    play(): void;
    play(name: string): void;
    play(loop: number): void;
    play(name: string, loop: number): void;
    /**
     * 播放
     * @param name 要播放的动画
     * @param loop 要循环的次数
     */
    play(name?: string | number, loop?: number) {
        let l = this.loop;
        let n = this.animation;

        if (typeof name == 'undefined') {
            name = -1;
        } else if (typeof name === 'string') {
            n = name;
            if (loop !== undefined) {
                l = loop;
            }
        } else if (typeof name === 'number') {
            l = name;
        } else {
            return;
        }
        this.paused = false;
        this.loop = l;
        this.animation = n;
    }

    /**
     * 停止
     */
    stop() {
        this.time = 0;
        this.puase();
    }

    /**
     * 暂停
     */
    puase() {
        this.paused = true;
    }

    update(time: number): void {
        if (this.paused) {
            return;
        }
        // 时间推进次数
        // const timeStep = Math.floor(this.total * time / this.timeMax);
        // for (let i = 0; i < timeStep; i++) {
        this.next();
        // }
    }

    /**
     * 单次播放结束时调用
     */
    private onEnded() {
        this.emitter.emit(Animation.Event.ENDED);
        this.playCount++;
        this.paused = true;
        if (this.loop == -1 || this.playCount <= this.loop) {
            this.play();
        }
    }

    /**
     * 添加事件
     */
    addFrameAction(time: number, callback: () => void, target: any) {
        this.timeline.on(time.toString(), callback, target);
    }

    /**
     * 移除事件
     */
    removeFrameAction(time: number, callback: () => void, target: any) {
        this.timeline.off(time.toString(), callback, target);
    }
}