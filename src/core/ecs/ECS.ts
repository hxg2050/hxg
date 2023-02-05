type Constructor<T = unknown> = new (...args: any[]) => T;


class Component {
    x: number = 0;
    constructor(x: number) {
        this.x = x;
    }
}

function arrayRemoveItem(arr: any[], item: any) {
    let index = arr.indexOf(item);
    if (index == -1) {
        return false;
    }

    arr.splice(index, 1);
    return true;
}

class Entiy {
    private _word: Word;

    private _map = new WeakMap();

    components: typeof Component[] = []

    constructor(word: Word) {
        this._word = word;
    }

    getComponent<T extends Component>(classConstructor: Constructor<T>): T | undefined {
        if (!this._map.has(classConstructor)) {
            return;
        }
        return this._map.get(classConstructor);
    }

    addComponent<T extends Component>(classConstructor: Constructor<T>): T {
        const component = new classConstructor();
        this._map.set(classConstructor, component);
        this.components.push(classConstructor);
        this.components.sort();
        let index = this.components.indexOf(classConstructor);

        const cacheClass: typeof Component[] = [];
        for (let i = index; i < this.components.length; i++) {
            cacheClass.push(this.components[i]);
            this._word.bindEntiy(this, cacheClass);
        }

        return component;
    }

    removeComponent<T extends Component>(classConstructor: Constructor<T>) {
        if (!this._map.delete(classConstructor)) {
            return false;
        }

        let index = this.components.indexOf(classConstructor);

        const cacheClass: typeof Component[] = [];
        for (let i = index; i < this.components.length; i++) {
            const cc = this.components[i];
            cacheClass.push(cc);
            const entiys = this._word.getEntiys(...cacheClass);
            arrayRemoveItem(entiys, cc);
        }

        return true;
    }
}

abstract class System {
    queries: typeof Component[] = [];
    update(dt: number) {

    }
}

class Word {
    map: Record<string, Entiy[]> = {};
    components: typeof Component[] = [];
    systems: System[] = [];

    /**
     * 获取实体
     * @param components 
     * @returns 
     */
    getEntiys(...components: Constructor<Component>[]): Entiy[] {
        let names: string[] = [];
        components.sort();
        components.forEach(component => names.push(component.name));
        console.log(this.map, names.join(','));
        let entiys = this.map[names.join(',')];
        if (!!entiys) {
            entiys = [];
        }

        return entiys;
    }

    /**
     * 关联实体,不可随便调用
     * @param entiy 
     * @param components 
     */
    bindEntiy(entiy: Entiy, components: typeof Component[]) {
        let cacheName: string[] = [];
        components.forEach(component => cacheName.push(component.name));

        let key = cacheName.join(',');
        let entiys = this.map[cacheName.join(',')];
        if (!!entiys) {
            entiys = this.map[cacheName.join(',')] = [];
        }

        entiys.push(entiy);
    }

    /**
     * 注册组件，需要在世界开启前注册所有用到的组件
     * 为什么要提前注册？提高性能，动态注册将需要额外的判断逻辑去处理
     * @param component 
     * @returns 
     */
    registerComponent(component: typeof Component) {
        if (this.components.includes(component)) {
            return;
        }
        this.components.push(component);
        
        this.components.sort();
        // const index = this.components.indexOf(component);
        // const cacheName: string[] = [];
        // for (let i = index; i < this.components.length; i++) {
        //     cacheName.push(this.components[i].name);
        //     this.map[cacheName.join(',')] = [];
        // }
    }

    /**
     * 注册系统
     * @param system 
     */
    registerSystem(system: System) {
        this.systems.push(system);
    }

    /**
     * 在当前世界下创建一个实体
     * @param entiy 
     * @param components 
     */
    createEntiy(components: typeof Component[] = []) {
        // this.map[Entiy.name] = entiy;
        const entiy = new Entiy(this);
        components.forEach(val => entiy.addComponent(val));
        return entiy;
    }

    /**
     * 开始运行世界
     */
    start() {

    }

    /**
     * 暂停运行世界
     */
    stop() {

    }

    update(dt: number) {
        this.systems.forEach(val => val.update(dt));
    }
}

export {
    Word,
    Component,
    Entiy,
    System
};