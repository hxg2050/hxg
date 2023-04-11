import { ILoader } from "./ILoader";
/**
 * 音频资源加载
 */
export declare class AudioLoader implements ILoader {
    load(source: string): Promise<HTMLAudioElement>;
}
