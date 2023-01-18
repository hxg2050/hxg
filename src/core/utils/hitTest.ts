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
export function isHitPoint(transform: Transform, point: Vector2) {

    const size = transform.size.clone().mul(transform.getWordScale());
    // 计算偏移后的右上角位置
    const position = transform.getWordPoisition().add(transform.getOffset().mul(-1));
    // 计算旋转
    const angle = - transform.rotation * Math.PI / 180;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    // 计算旋转修正后的位置
    const x = (point.x - position.x) * cos - (point.y - position.y) * sin + position.x;
    const y = (point.x - position.x) * sin + (point.y - position.y) * cos + position.y;

    if (x >= position.x && x <= position.x + size.x && y >= position.y && y <= position.y + size.y) {
        return true;
    }

    return false;
}