import { GroupLoader, LoadResListConfig } from "./GroupLoader";
import { AudioLoader } from "./loader/AudioLoader";
import { ILoader } from "./loader/ILoader";
import { ImageLoader } from "./loader/ImageLoader";
import { JsonLoader } from "./loader/JsonLoader";

interface IRes {
    data: any; // 资源
    type: string; // 类型
    url: string; // 网络路径
}

type LoaderType = {
    [props: string]: { loader: ILoader }
}
/**
 * 资源加载参数
 */
export type LoadOptions = {
    /**
     * 类型
     */
    type: string,
    /**
     * 当前资源的独特加载器
     */
    loader?: ILoader
}

/**
 * 资源管理和加载
 * 默认提供了几个常用的加载器
 * ```ts
 * Resource.load('photo.png');
 * ```
 */
export class Resource {

    /**
     * 所有加载器
     */
    static loader: LoaderType = {}

    /**
     * 所有缓存资源
     */
    static cache: { [props: string]: IRes } = {};

    /**
     * 资源别名缓存
     */
    static nameCache: { [props: string]: string } = {};

    /**
     * 添加/修改一个loader加载器
     * @param type - 类型
     * @param loader - 加载器
     */
    static setLoader(type: string, loader: ILoader) {
        this.loader[type] = { loader }
    }

    /**
     * 加载资源
     * @param source - 资源路径
     * @param options - 配置
     * @returns 
     */
    static async load(source: string, options?: LoadOptions): Promise<IRes> {
        if (!!this.cache[source]) {
            return Promise.resolve(this.cache[source]);
        }

        if (!options) {
            // 获取拓展名
            const type = source.split('.').pop()!;
            return this.load(source, {
                type
            });
        }
        
        const loader = options.loader || this.getLoader(options.type);
        
        if (!loader) {
            return Promise.reject(`类型[${options.type}]：未定义该资源类型的加载器，请调用“Resource.setLoader”配置一个此类型的加载器`);
        }
        // 加载资源
        const res = await loader.load(source);
        // 缓存资源
        this.cache[source] = {
            data: res,
            type: options.type,
            url: source
        }
        return this.load(source);
    }

    /**
     * 根据配置的名称获取资源
     * @param name 
     */
    static get(name: string) {
        const url = this.nameCache[name];
        if (!url) {
            return undefined;
        }
        return this.cache[url];
    }

    /**
     * 配置资源别名
     * @param name 别名
     * @param url 资源url
     */
    static set(name: string, url: string) {
        const res = this.cache[url];
        if (!res) {
            return false;
        }
        this.nameCache[name] = url;
        return true;
    }

    listGroup: string[]|[string, string] = [];

    /**
     * 加载一组资源
     * @param list - 要加载的资源列表
     * @param worker - 最大同时加载数量，最小为1
     */
    static loadGroup(list: LoadResListConfig, worker: number = 1) {
        const loader = new GroupLoader();
        loader.add(list);
        loader.workerCount = worker;
        loader.start();
        return loader.emitter;
    }

    /**
     * 获取加载器
     * @param type - 根据类型获取加载器
     */
    static getLoader(type: string) {
        const loader = this.loader[type];
        return loader && loader.loader;
    }
}

const defaultLoader: LoaderType = {
    'png|jpg': {
        loader: new ImageLoader()
    },
    // 'canvas': {
    //     loader: new ImageLoader()
    // },
    'json': {
        loader: new JsonLoader()
    },
    'mp3': {
        loader: new AudioLoader()
    }
}

// 定义默认提供的加载器
for (let key in defaultLoader) {
    let types = key.split('|');
    types.forEach(type => Resource.setLoader(type, defaultLoader[key].loader));
}