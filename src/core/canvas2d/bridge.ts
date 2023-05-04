import { Component } from "../component";
import { Constructor } from "../transform";
import { getComponents } from "../transform/componentBridge";

export function each<T extends Component>(component: Constructor<T>, cb: (component: T) => void) {
    (getComponents(component) as T[]).forEach(cb);
}