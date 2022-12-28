import Transform from "../src/Transform";

/**
 * 场景
 * 主要用于储存节点层级关系
 */
export default class Stage {
    children: Transform[] = [];
}