import { Timeline } from "../modules";
import { Component } from "./Component";
/**
 * 动画组件
 * 插值，可插值属性才能进行插值
 */
export class Animation extends Component {

    /**
     * 用于记录回调的时间线,在target时间线后执行
     */
    timeline = [
        {
            time: 0,
            callback: () => { }
        }
    ];

    /**
     * 动画总长
     */
    timeMax = 0;
    total = 0;
    time = 0;

    /**
     * 时间线
     * 每一个对象一个时间线
     * 还有一个总时间线，可以用于记录一些信息
     */
    targets?: Timeline[];

    animations: Record<string, Timeline[]> = {};
    
    private cacheTime = 0;

    /**
     * 播放下一帧
     */
    next() {
        this.targets.forEach(val => {
            const k = val.get(this.time);
            if (k) {
                Object.assign(val.target, k);
            }
        });

        this.cacheTime += this.speed;
        if (this.cacheTime >= this.total) {
            this.cacheTime = 0;
        }
        this.time = Math.floor(this.cacheTime);
    }

    addTimeline(timeline: Timeline) {
        this.targets.push(timeline);
        this.total = Math.max(timeline.total, this.total);
    }

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

    /**
    * 循环次数，0：不循环，-1：一直循环
    */
    loop = 0;

    /**
     * 播放速度100%
     */
    speed = 1;
    
    /**
     * 指示是否被暂停
     */
    paused: boolean = true;

    play(name: string): void;
    play(loop: number): void;
    play(name:string, loop: number): void;
    /**
     * 播放
     * @param name 要播放的动画
     * @param loop 要循环的次数
     */
    play(name?: string|number, loop?: number) {
        let l = 0;
        let n = 'default';

        if (typeof name == 'undefined') {
            name = -1;
        } else if(typeof name === 'string') {
            n = name;
            if (loop !== undefined) {
                l = loop;
            }
        } else if(typeof name === 'number') {
            l = name;
        } else {
            return;
        }
        this.paused = false;
        this.loop = l;
        this.targets = this.animations[n];
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
}