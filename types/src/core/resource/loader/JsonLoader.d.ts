import { ILoader } from "./ILoader";
/**
 * 音频资源加载
 */
export declare class JsonLoader implements ILoader {
    load(source: string): Promise<XMLHttpRequest>;
}
