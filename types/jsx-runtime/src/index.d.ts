import type { Constructor } from "hxg";
import { Thing } from 'hxg';
export declare function createNode<T extends Thing = Thing>(node: Constructor<T>, options?: Partial<T>): T;
export declare function jsx(tag: any, props: any, ...children: any[]): any;
export declare const jsxs: typeof jsx;
export declare function Fragment(props: any, ...children: any[]): any[];
export declare const jsxDEV: typeof jsx;
