import { Emitter, EventValue } from "../emitter";
import { Resource } from "./Resource";

export type LoadResListConfig = (string | [string, string])[];

/**
 * 资源组加载
 */
export class GroupLoader {
    list: LoadResListConfig = [];
    constructor() {
    }

    static Event = {
        // 单个资源加载完成，不一定保证顺序
        LOADED: 'loaded',
        // 所有资源加载完成
        COMPLATE: 'complate'
    } as const;

    emitter = new Emitter<EventValue<typeof GroupLoader.Event>>();

    // 同时加载最大数量
    workerCount = 1;
    // 资源总数
    count: number = 0;
    // 以加载数量
    loaded: number = 0;
    
    index: number = 0;

    /**
     * 顺序加载资源
     * @returns 
     */
    load() {
        const item = this.list[this.index ++];
        if (!item) {
            return;
        }
        let name: string;
        const source = typeof item == 'string' ? item : (name = item[1], item[0]);
        Resource.load(source).then(() => {
            // 判断是否设置别名
            if (!!name) {
                Resource.set(name, source);
            }
            this.loaded ++;
            this.emitter.emit(GroupLoader.Event.LOADED, {
                count: this.count,
                loaded: this.loaded
            });
            if (this.loaded == this.count) {
                this.emitter.emit(GroupLoader.Event.COMPLATE);
            } else {
                this.load();
            }
        });
    }

    start() {
        for (let i = 0; i < this.workerCount; i ++) {
            this.load();
        }
    }

    /**
     * 添加需要加载的资源
     * @param list 
     */
    add(list: LoadResListConfig) {
        this.list.push.apply(this.list, list);
        this.count += list.length;
    }
}