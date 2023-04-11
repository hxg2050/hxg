type Constructor<T = unknown> = new (...args: any[]) => T;
declare class Component {
    x: number;
    constructor(x: number);
}
declare class Entiy {
    private _word;
    private _map;
    components: typeof Component[];
    constructor(word: Word);
    getComponent<T extends Component>(classConstructor: Constructor<T>): T | undefined;
    addComponent<T extends Component>(classConstructor: Constructor<T>): T;
    removeComponent<T extends Component>(classConstructor: Constructor<T>): boolean;
}
declare abstract class System {
    queries: typeof Component[];
    update(dt: number): void;
}
declare class Word {
    map: Record<string, Entiy[]>;
    components: typeof Component[];
    systems: System[];
    /**
     * 获取实体
     * @param components
     * @returns
     */
    getEntiys(...components: Constructor<Component>[]): Entiy[];
    /**
     * 关联实体,不可随便调用
     * @param entiy
     * @param components
     */
    bindEntiy(entiy: Entiy, components: typeof Component[]): void;
    /**
     * 注册组件，需要在世界开启前注册所有用到的组件
     * 为什么要提前注册？提高性能，动态注册将需要额外的判断逻辑去处理
     * @param component
     * @returns
     */
    registerComponent(component: typeof Component): void;
    /**
     * 注册系统
     * @param system
     */
    registerSystem(system: System): void;
    /**
     * 在当前世界下创建一个实体
     * @param entiy
     * @param components
     */
    createEntiy(components?: typeof Component[]): Entiy;
    /**
     * 开始运行世界
     */
    start(): void;
    /**
     * 暂停运行世界
     */
    stop(): void;
    update(dt: number): void;
}
export { Word, Component, Entiy, System };
