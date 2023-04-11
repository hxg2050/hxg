import { Transform } from './transform';
import { EventSystem } from './system';
export type Options = {
    width: number;
    height: number;
};
/**
 * 应用
 * ```ts
 * // 方式一
 * const app = new Applaction({
 *      width: 500,
 *      height: 500
 * });
 * ```
 * ```ts
 * // 方式二
 * const app = Applaction.run({
 *      width: 500,
 *      height: 500
 * });
 * ```
 */
export declare class Application {
    config: Options;
    /**
     * 舞台，根节点
     */
    stage: Transform;
    /**
     * 全局事件处理器
     */
    eventSystem: EventSystem;
    constructor(config?: any);
    /**
     * 插件拓展
     * 可注入到app
     * @param install 插件入口函数
     * @returns
     */
    use(install: (app: Application) => void): this;
    static run(config?: Partial<Options>): Application;
}
