import { Constructor } from "../transform";

/**
 * 管理所有事件
 */
export class Event<T = string, U = any, V = any> {

    type: T;
    /**
     * 发送者
     */
    target: U;
    data: V;


    // constructor(target: T, data: U) {
    //     this.target = target;
    //     this.data = data;
    // }
}

/**
 * 创建一个事件
 * @param type 事件名称
 * @param target 触发元素
 * @param data 发射数据
 * @returns 
 */
export const createEventHelper = <T extends Event>(eventClass: Constructor<T>) => {
    return (type: T['type'], target: T['target'], data?: T['data']) => {
        const transformNodeEvent = new eventClass();
        transformNodeEvent.type = type;
        transformNodeEvent.target = target;
        transformNodeEvent.data = data;
        return transformNodeEvent;
    }
}
