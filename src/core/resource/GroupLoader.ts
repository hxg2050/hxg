import EE from 'eventemitter3'
import { Resource } from "./Resource";
import { ValueOf } from '../types/ValueOf';
/**
 * 资源列表
 */
export type LoadResListConfig = (string | [string, string])[];


/**
 * 资源组加载
 * ```ts
 * // 创建资源组加载器
 * const loader = new GroupLoader();
 * // 设置最大可同时加载4个
 * loader.workerCount = 4;
 * // 监听单个资源加载完成事件
 * loader.emitter.on(GroupLoader.Event.LOADED, ({ count, loaded }) => {
 *      console.log('资源加载中:', loaded, '/', count);
 * }, this);
 * // 监听所有资源加载完成事件
 * loader.emitter.on(GroupLoader.Event.COMPLATE, () => {
 *      console.log('资源加载完成');
 * }, this);
 * // 设置待加载资源列表
 * const list: LoadResListConfig = [
 *      // 只设置路径
 *      './assets/photo.png',
 *      // 设置路径加别名
 *      ['./assets/bmg.mp3', 'bgm_mp3']
 * ];
 * // 加入待加载列表
 * loader.add(list);
 * // 开始加载资源
 * loader.start();
 * ```
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

    emitter = new EE<ValueOf<typeof GroupLoader.Event>>();

    /**
     * 同时加载最大数量
     */
    workerCount = 1;
    /**
     * 资源总数
     */
    count: number = 0;
    /**
     * 已经加载数量
     */
    loaded: number = 0;
    /**
     * 当前处理的位置
     */
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

    /**
     * 启动加载
     */
    start() {
        for (let i = 0; i < this.workerCount; i ++) {
            this.load();
        }
    }

    /**
     * 添加需要加载的资源
     * ```ts
     * const list: LoadResListConfig = [
     *      // 只设置路径
     *      './assets/photo.png',
     *      // 设置路径加别名
     *      ['./assets/bmg.mp3', 'bgm_mp3']
     * ];
     * ```
     * @param list - 资源列表
     */
    add(list: LoadResListConfig) {
        this.list.push.apply(this.list, list);
        this.count += list.length;
    }
}