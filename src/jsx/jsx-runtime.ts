import { Constructor, Thing, Transform } from "../core";

export function createNode<T extends Thing = Thing>(node: Constructor<T>, options: Partial<T>) {
    const transform = new node();
    for (let key in options) {
        if (Reflect.has(transform, key)) {
            Reflect.set(transform, key, options[key]);
        }
    }
    if (transform.render) {
        const children = transform.render();

        if (Array.isArray(children)) {
            children.forEach(val => {
                transform.addChild(val);
            });
        } else {
            transform.addChild(children);
        }
    }
    return transform;
}

export function jsx(tag: any, props: any, ...children: any[]) {
    if (tag === Fragment && !(tag.prototype instanceof Thing)) {
        return tag(props, ...children);
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