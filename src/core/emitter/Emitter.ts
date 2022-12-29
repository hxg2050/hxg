type EmitterKeyValue = {
    [props: string]: [Function, any][]
}

// type EventName = '';

/**
 * 状态管理 发布-订阅器
 */
export class Emitter<T extends string = string> {

    protected _on: EmitterKeyValue = {};
    protected _data: {
        [props: string]: any
    } = {};
    protected _once: EmitterKeyValue = {};
    protected _remove = [];

    /**
     * 监听一次
     */
    once(name: string, callback: Function, _this: any) {
        let _self = this;
        let func = function (value: any) {
            callback.call(_this, value);
            _self.remove(name, func, _this);
        }
        this.listen(name, func, _this);
    }

    on(name: T, callback: Function, target?: any) {
        this.listen(name, callback, target);
    }

    /**
     * 监听数据
     */
    listen(name: string, callback: Function, _this: any) {
        if (!this._on[name]) {
            this._on[name] = [];
        }
        this._on[name].push([callback, _this]);
    }

    /**
     * 监听数据变动（第一次有数据）
     */
    change(name: string, callback: Function, _this: any) {
        this.listen(name, callback, _this);
        let data = this.data(name);
        // console.log(this);
        if (data) {
            callback.call(_this, data);
        }
    }

    /**
     * 获取/设置数据
     */
    data<T>(name: string, value?: any): T|undefined {
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

    emit(name: string, value: any = '') {
        this.data(name, value);
    }

    off(name: string, callback: Function, __this: any) {
        this.remove(name, callback, __this);
    }

    /**
     * 移除对象所有事件
     */
    // offAll(name: string, __this: any) {

    // }

    /**
     * 移除监听
     */
    remove(name: string, callback: Function, __this: any) {
        const remove_list = [];

        const eventList = this._on[name];

        if (!eventList || eventList.length == 0) {
            return;
        }

        // 查询所有
        for (let i = 0; i < eventList.length; i ++) {
            const callEvent = eventList[i];
            const [cb, target] = callEvent;
            if (cb === callback && target === __this) {
                remove_list.push(i);
            }
        }

        // 倒叙删除
        for (let i = remove_list.length - 1; i >= 0; i --) {
            eventList.splice(i, 1);
        }
    }

    /**
     * 检查是否定义
     */
    public has(name: string) {
        return typeof this._data[name] != 'undefined';
    }
}