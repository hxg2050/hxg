import { Transform } from "../transform";
import { Component } from "./Component";

interface TimeMilestone<T> {
    milestone: Partial<T>;
    time: number;
    next: TimeMilestone<T>;
    prev: TimeMilestone<T>;
}

/**
 * 时间线
 * 总时长
 * 总布长
 */
class Timeline<T extends {} = {}> {
    /**
     * 单位总时长
     */
    total = 60;

    list: number[] = [];
    line: Record<number, Partial<T>> = {}

    start = 0;
    end = 1;

    line2: TimeMilestone<T>;

    /**
     * 时间指针位置
     */
    index: number = 0;

    target: T;

    constructor(target: T) {
        this.target = target;
    }

    /**
     * 时间推进1
     */
    next(step = 1) {
        this.push(step);
    }

    /**
     * 时间倒退1
     */
    prev(step = 1) {
        this.push(-step);
    }

    /**
     * 时间推进
     * @param step 
     */
    push(step = 1) {
        step *= this.reversal ? 1 : -1;
        this.index += step;

        // 如果时间时循环 -1 5 => 4
        if (this.loop) {
            if (this.index < 0 || this.index >= this.total) {
                this.index = this.index % this.total;
            }
        }

    }

    /**
     * 是否时间倒流
     */
    reversal = false;
    /**
     * 是否时间循环
     */
    loop = false;

    /**
     * 获取时间线上的里程碑
     * @param index 
     * @returns 
     */
    get(index?: number) {
        return index !== undefined ? this.line[index] : this.line[index];
    }

    /**
     * 添加一个里程碑到时间线上
     * @param index 
     * @param milestone 
     */
    set(index: number, milestone: Partial<T>) {
        if (!this.line[index]) {
            this.line[index] = milestone;
            this.list.push(index);
            this.list.sort();
        } else {
            Object.assign(this.line[index], milestone);
        }
    }

    /**
     * 获取最接近的里程碑,如果一样默认取后一个
     * @param index 
     * @param next 表示，当时间间距一样时取后一个还是前一个
     */
    closest(index?: number, next = true) {
        index = index === undefined ? this.index : index;

    }

    /**
     * 移除时间线上的一个里程碑
     * @param index 
     */
    remove(index: number) {
        if (Object.hasOwn(this.line, index)) {
            delete this.line[index];
            this.list.splice(this.list.indexOf(index), 1);
        }
    }

    /**
     * 返回下一个里程碑，距离多久
     */
    last(reversal = false) {
        // 是否再次反转
        reversal = reversal ? !this.reversal : this.reversal;
        // 获取当前里程碑
        const index = this.list.indexOf(this.index);


        let index$ = this.list[index + 1];
        if (index$ > this.total) {
            index$ = 0;
        }
        const next = this.line[index$];
        if (!next) {
            return false;
        }
        return {
            milestone: next,
            difftime: this.list[this.index] - this.list[index$]
        }
    }
}
const node = new Transform();
const timeline = new Timeline(node.position);
timeline.set(1, {
    x: 1
});

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
     * 时间线
     * 每一个对象一个时间线
     * 还有一个总时间线，可以用于记录一些信息
     */
    targets = [{
        target: 1,
        timeline: [
            {
                target: 1,
                attribute: {

                },
                time: 0,
                ease: 'linear'
            },
            {
                step: 2,
                time: 200,
                ease: 'linear'
            },
            {
                step: 3,
                time: 200,
                ease: 'linear'
            },
        ]
    }]

    /**
     * 指针位置
     */
    index: number = 0;

    /**
     * 播放下一帧
     */
    next() {
        if (this.index >= this.timeline.length) {
            this.index = 0;
        }
    }

    /**
     * 播放上一帧
     */
    prev() {
        if (this.index < 0) {
            this.index = this.timeline.length - 1;
        }
    }

    reverse = false;
    /**
    * 循环次数，0：不循环，-1：一直循环
    */
    loop = 0;

    /**
     * 播放速度100%
     */
    speed = 1;

    /**
     * 播放
     */
    play() {

    }

    /**
     * 停止
     */
    stop() {

    }

    /**
     * 暂停
     */
    puase() {

    }

    update(time: number): void {

    }
}