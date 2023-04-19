
export interface TimeMilestone<T> {
    milestone: Partial<T>;
    time: number;
    next?: TimeMilestone<T>;
    prev?: TimeMilestone<T>;
}

/**
 * 时间线
 * 总时长
 * 总布长
 */
export class Timeline<T extends {} = {}> {
    /**
     * 单位总时长
     */
    total = 60;

    list: number[] = [];
    line: Record<number, Partial<T>> = {}

    start: TimeMilestone<T> = {
        milestone: {},
        time: 0
    };
    end: TimeMilestone<T> = this.start;

    line2: TimeMilestone<T> = {
        milestone: {},
        time: 0
    };

    /**
     * 时间指针位置
     */
    time: number = 0;

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
        this.time += step;

        // 如果时间时循环 -1 5 => 4
        if (this.loop) {
            if (this.time < 0 || this.time >= this.total) {
                this.time = this.time % this.total;
            }
        }
    }

    go(time: number) {
        this.time = time;
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
    get(time?: number) {
        return time !== undefined ? this.line[time] : this.line[this.time];
    }

    /**
     * 添加一个里程碑到时间线上
     * @param index 
     * @param milestone 
     */
    set(time: number, milestone: Partial<T>) {
        if (time > this.total) {
            return;
        }

        // let timeMilestone = this.start;

        // while(timeMilestone && timeMilestone != this.start) {
        //     if (timeMilestone.time == time) {
        //         Object.assign(timeMilestone.milestone, milestone);
        //         break;
        //     }

        //     const next = timeMilestone.next;

        //     if (timeMilestone.time > time || !next || next == this.start) {
        //         timeMilestone.prev!.next = {
        //             milestone,
        //             time,
        //             prev: timeMilestone.prev,
        //             next: timeMilestone
        //         }
        //         break;
        //     }

        //     timeMilestone = next;
        // }

        if (!this.line[time]) {
            this.line[time] = milestone;
            this.list.push(time);
            this.list.sort();
        } else {
            Object.assign(this.line[time], milestone);
        }
    }

    /**
     * 获取最接近的里程碑,如果一样默认取后一个
     * @param index 
     * @param next 表示，当时间间距一样时取后一个还是前一个
     */
    // closest(time?: number, next = true) {
    //     time = time === undefined ? this.time : time;
    //     const dir = -1 * Timeline.booleanToDir(this.reversal) * Timeline.booleanToDir(next);

    //     let index = 0;
    //     for (let i = 0; i < this.list.length; i++) {
    //         if (this.list[i] == this.time) {
    //             index = i;
    //             break;
    //         }
    //         if (this.list[i] > this.time) {
    //             index += dir;
    //             break;
    //         }
    //     }
    // }

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

    private getNowIndex(reversal?: boolean) {
        const dir = Timeline.booleanToDir(reversal === undefined ? reversal : this.reversal);
        // 获取当前里程碑
        let index = 0;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == this.time) {
                index = i;
                break;
            }
            if (this.list[i] > this.time) {
                index += dir;
                break;
            }
        }

        if (this.loop) {
            if (index < 0 || index >= this.total) {
                index = index % this.total;
            }
        }
        return index;
    }

    /**
     * 获取当前处在的里程碑
     * @returns 
     */
    now() {
        return this.line[this.list[this.getNowIndex()]];
    }

    /**
     * 返回下一个里程碑，距离多久
     */
    last(reversal = false) {
        // 是否再次反转
        reversal = reversal ? !this.reversal : this.reversal;
        const index = this.getNowIndex(reversal);
        const dir = Timeline.booleanToDir(reversal);
        let index$ = index + dir;//this.list[];

        // 如果时间时循环 -1 5 => 4
        if (this.loop) {
            if (index$ < 0 || index$ >= this.total) {
                index$ = index$ % this.total;
            }
        }

        const time = this.list[index$];
        const next = this.line[time];

        if (!next) {
            return false;
        }

        return {
            milestone: next,
            difftime: Math.abs(this.list[index] - this.list[index$])
        }
    }

    private static booleanToDir(bool: Boolean) {
        return bool ? 1 : -1;
    }
}
