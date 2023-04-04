import { Constructor, Thing, Transform } from "../core";

let lastTarget = undefined;

export function createNode<T extends Thing = Thing>(node: Constructor<T>, options: Partial<T>) {
    // if (node === Fragment) {
    //     return;
    // }
    const newNode = new node();
    for (let key in options) {
        if (Reflect.has(newNode, key)) {
            Reflect.set(newNode, key, options[key]);
        }
    }
    if (lastTarget) {
        lastTarget.addChild(newNode);
    }
    lastTarget = newNode;
    newNode.render();
    return newNode;
}

export function jsx(node: any, options: any) {
    if (node === Fragment) {
        return;
    }
    return createNode(node, options);
}
export const jsxs = jsx;

export function Fragment(...args: any) {
    console.log('Fragment', args);
}

export const jsxDEV = jsx;