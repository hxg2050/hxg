import { LoadResListConfig } from "./GroupLoader";
import { ILoader } from "./loader/ILoader";
interface IRes {
    data: any;
    type: string;
    url: string;
}
type LoaderType = {
    [props: string]: {
        loader: ILoader;
    };
};
/**
 * 资源加载参数
 */
export type LoadOptions = {
    /**
     * 类型
     */
    type: string;
    /**
     * 当前资源的独特加载器
     */
    loader?: ILoader;
};
/**
 * 资源管理和加载
 * 默认提供了几个常用的加载器
 * ```ts
 * Resource.load('photo.png');
 * ```
 */
export declare class Resource {
    /**
     * 所有加载器
     */
    static loader: LoaderType;
    /**
     * 所有缓存资源
     */
    static cache: {
        [props: string]: IRes;
    };
    /**
     * 资源别名缓存
     */
    static nameCache: {
        [props: string]: string;
    };
    /**
     * 添加/修改一个loader加载器
     * @param type - 类型
     * @param loader - 加载器
     */
    static setLoader(type: string, loader: ILoader): void;
    /**
     * 加载资源
     * @param source - 资源路径
     * @param options - 配置
     * @returns
     */
    static load(source: string, options?: LoadOptions): Promise<IRes>;
    /**
     * 根据配置的名称获取资源
     * @param name
     */
    static get(name: string): IRes;
    /**
     * 配置资源别名
     * @param name 别名
     * @param url 资源url
     */
    static set(name: string, url: string): boolean;
    listGroup: string[] | [string, string];
    /**
     * 加载一组资源
     * @param list - 要加载的资源列表
     * @param worker - 最大同时加载数量，最小为1
     */
    static loadGroup(list: LoadResListConfig, worker?: number): import("store-event").StoreEmitter<"loaded" | "complate">;
    /**
     * 获取加载器
     * @param type - 根据类型获取加载器
     */
    static getLoader(type: string): ILoader;
}
export {};
