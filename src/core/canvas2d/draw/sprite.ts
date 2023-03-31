import { Mask } from "../../component";
import { Transform } from "../../transform";

export function draw(node: Transform) {
    const mask = node.getComponent(Mask);
}