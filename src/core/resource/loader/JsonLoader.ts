import { request } from "../../utils/request";
import { ILoader } from "./ILoader";

/**
 * 音频资源加载
 */
export class JsonLoader implements ILoader {
    load(source: string): Promise<XMLHttpRequest> {
        return new Promise((resolve) => {
            request(source).then((res) => {
                resolve(res.response);
            });
        });
    }
}