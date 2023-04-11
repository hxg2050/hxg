type Props<T> = {
    [P in keyof T]?: Props<T[P]>;
};
/**
 * 快速设置
 * @param obj
 * @param props
 */
export declare function setProps<T>(obj: T, props: Props<T>): void;
export {};
