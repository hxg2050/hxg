import { ILoader } from "./ILoader";

/**
 * 音频资源加载
 */
export class AudioLoader implements ILoader {
    load(source: string): Promise<HTMLAudioElement> {
        const loader = new Audio();
        loader.src = source;
        return new Promise((resolve) => {
            loader.addEventListener('loadedmetadata', () => {
                resolve(loader);
            });
        });
    }
}