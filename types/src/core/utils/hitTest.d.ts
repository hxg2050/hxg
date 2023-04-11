import { Vector2 } from "../math";
import { Transform } from "../transform";
/**
 * 判断点是否落在某个tansform区域
 * ```ts
 * // 创建节点
 * const node = new Transform();
 * // 设置位置
 * node.position.set(100, 100);
 * // 设置大小
 * node.size.set(100, 100);
 * // 插入到舞台
 * app.stage.addChild(node);
 * // 落点判定
 * const isHit = isHitPoint(node, { x: 150, y: 150 });
 * console.log('isHit', isHit);
 * ```
 * @param transform 节点位置信息
 * @param point 要判断的点
 * @returns
 */
export declare function isHitPoint(point: Vector2, transform: Transform): boolean;
