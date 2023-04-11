import { StoreEmitter as Emitter } from 'store-event';
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
export declare class GroupLoader {
    list: LoadResListConfig;
    constructor();
    static Event: {
        readonly LOADED: "loaded";
        readonly COMPLATE: "complate";
    };
    emitter: Emitter<"loaded" | "complate">;
    /**
     * 同时加载最大数量
     */
    workerCount: number;
    /**
     * 资源总数
     */
    count: number;
    /**
     * 已经加载数量
     */
    loaded: number;
    /**
     * 当前处理的位置
     */
    index: number;
    /**
     * 顺序加载资源
     * @returns
     */
    load(): void;
    /**
     * 启动加载
     */
    start(): void;
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
    add(list: LoadResListConfig): void;
}
