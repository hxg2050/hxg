import { Constructor, Thing, Transform } from "../core";
// 数组扁平化
function flatDeep(arr) {
	return arr.reduce((pre, next) => {
		return pre.concat(Array.isArray(next) ?  flatDeep(next) : next)
	},[])
}

export function createNode<T extends Thing = Thing>(node: Constructor<T>, options: Partial<T> = {}) {
    const transform = new node();
    for (let key in options) {
        if (Reflect.has(transform, key)) {
            Reflect.set(transform, key, options[key]);
        }
    }
    if (transform.render) {
        const children = transform.render();
        flatDeep([children]).forEach(val => {
            transform.addChild(val);
        });
    }
    return transform;
}

export function jsx(tag: any, props: any, ...children: any[]) {
    if (typeof tag === 'function' && !(tag.prototype instanceof Thing)) {
        return tag(props === null ? undefined : props, ...children);
    }
    const node = createNode(tag, props || {});
    children.forEach(val => {
        node.addChild(val)
    });
    return node;
}
export const jsxs = jsx;

export function Fragment(props: any, ...children: any[]) {
    return children;
}

export const jsxDEV = jsx;