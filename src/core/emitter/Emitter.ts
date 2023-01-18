type EmitterKeyValue = {
    [props: string]: [Function, any][]
}

// type EventName = '';
export type EventValue<T> = T extends { [p: string]: infer V } ? V extends string ? V : never : never;

/**
 * 状态管理 发布-订阅器
 * 一个基于订阅/发布模式的状态管理器，可用于状态管理，或者事件管理
 * 当作`事件管理`使用时
 * ```ts
 * // 创建一个管理器
 * const emitter = new Emitter();
 * // 监听jump事件
 * emitter.on('jump', ({ source }) => {
 *      console.log('触发jump事件', '传入了一个参数source:', source);
 * }, this);
 * // 发射事件，并传入参数
 * emitter.emit('jump', { source: 100 });
 * ```
 * 当作`状态管理`使用时
 * ```ts
 * // 创建状态管理器
 * const store = new Emitter();
 * // 设置数据
 * store.data('source', 100);
 * // 获取数据
 * console.log(store.data('source'));
 * // 监听数据变动，第一次就有数据
 * store.change('source', (data) => {
 *      cnosole.log('第一次会有数据', data);
 * }, this);
 * // 监听数据变动，第一次不会有数据
 * store.listen('source', (data) => {
 *      console.log('第一次不会有数据', data);
 * }, this);
 * // 改变数据
 * store.data('source', (data) => {
 *      return data ++;
 * });
 * ```
 */
export class Emitter<U extends string = string> {

    protected _on: EmitterKeyValue = {};
    protected _data: {
        [props: string]: any
    } = {};
    protected _once: EmitterKeyValue = {};
    protected _remove = [];

    /**
     * 监听一次
     * ```ts
     * const emitter = new Emitter();
     * emitter.once('eventName', () => {
     *      console.log('只会触发一次');
     * }, this);
     * ```
     * @param name - 事件名
     * @param callback - 触发函数
     * @param _this - 触发函数的作用域
     */
    once(name: U, callback: Function, target: any) {
        let _self = this;
        let func = function (value: any) {
            callback.call(target, value);
            _self.remove(name, func, target);
        }
        this.listen(name, func, target);
    }

    /**
     * 
     * @param name - 事件名
     * @param callback - 触发函数
     * @param target - 触发函数作用域
     */
    on(name: U, callback: Function, target?: any) {
        this.listen(name, callback, target);
    }

    /**
     * 监听数据变动
     * @param name - 数据名
     * @param callback - 触发函数
     * @param target - 触发函数作用域
     */
    listen(name: U, callback: Function, target: any) {
        if (!this._on[name]) {
            this._on[name] = [];
        }
        this._on[name].push([callback, target]);
    }

    /**
     * 监听数据变动（第一次有数据）
     * @param name - 数据名
     * @param callback - 触发函数
     * @param target - 触发函数作用域
     */
    change(name: U, callback: Function, target: any) {
        this.listen(name, callback, target);
        let data = this.data(name);
        if (data) {
            callback.call(target, data);
        }
    }

    /**
     * 获取数据
     * @param name - 数据名
     */
    data(name: U);
    /**
     * 设置数据
     * @param name 数据名
     * @param value 数据
     */
    data(name: U, value: any);
    /**
     * 设置数据，当数据结构比较复杂，而只是单独改变其中一小部分时可以使用传入一个数据处理函数进行数据设置
     * ```ts
     * // 创建状态管理器
     * const store = new Emitter();
     * // 监听 userinfo 数据变动
     * store.listen('userinfo', ({ name, source }) => {
     *      console.log(name, '的积分变为为：', source);
     * }, this)
     * // 设置数据
     * store.data('userinfo', {
     *      name: 'youxia',
     *      source: 100,
     *      photo: 'abc.png'
     * });
     * // 修改数据
     * store.data('userinfo', (data: any) => {
     *      // 只修改 source
     *      data.source ++;
     *      // 返回最新的数据
     *      return data;
     * });
     * ```
     * @param name 数据名
     * @param callback 设置函数
     */
    data(name: U, callback: (data: any) => any);
    data(name: U, value?: any): any {
        if (typeof value === 'undefined') {
            return this._data[name];
        }
        if (typeof value === 'function') {
            return this.data(name, value(this._data[name]))
        }
        this._data[name] = value;
        // console.log(this._on[name], name, value);
        if (this._on[name]) {
            for (let item of this._on[name]) {
                // console.log(item);
                item[0].call(item[1], this._data[name]);
            }
        }

        return undefined;
    }

    /**
     * 发射事件
     * @param name - 事件名
     * @param value - 数据
     */
    emit(name: U, value: any = '') {
        this.data(name, value);
    }

    /**
     * 移除事件/数据监听
     * @param name - 事件名
     * @param callback - 触发函数
     * @param target - 作用域
     */
    off(name: U, callback: Function, target: any) {
        this.remove(name, callback, target);
    }

    /**
     * 移除对象所有事件
     */
    // offAll(name: string, __this: any) {

    // }

    /**
     * 移除事件/数据监听
     * @param name - 事件名
     * @param callback - 触发函数
     * @param target - 作用域
     */
    remove(name: U, callback: Function, target: any) {
        const remove_list = [];

        const eventList = this._on[name];

        if (!eventList || eventList.length == 0) {
            return;
        }

        // 查询所有
        for (let i = 0; i < eventList.length; i++) {
            const callEvent = eventList[i];
            const [cb, target] = callEvent;
            if (cb === callback && target === target) {
                remove_list.push(i);
            }
        }

        // 倒序删除
        for (let i = remove_list.length - 1; i >= 0; i--) {
            eventList.splice(i, 1);
        }
    }

    /**
     * 检查数据是否定义
     * @param name - 数据名
     * @returns 
     */
    public has(name: U) {
        return typeof this._data[name] != 'undefined';
    }
}