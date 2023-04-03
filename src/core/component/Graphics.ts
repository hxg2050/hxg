import { Texture } from "../texture";
import { BaseContainer } from "./BaseContainer";

/**
 * 图形绘制
 * 1、边框/线条
 * 2、闭合情况/填充
 */
export class Graphics extends BaseContainer { // extends Component

    /**
     * 图片纹理，储存图片的相关信息
     */
    public texture?: Texture;
    /**
     * 记录要执行的操作记录
     */
    tasks: any[] = [];

    /**
     * 是否需要重绘
     */
    redraw = true;

    start() {
        this.node.size.emitter.on('change', this.toRedraw, this);
    }

    toRedraw() {
        this.redraw = true;
    }

    pushTask(name: string, ...args: (string | number)[]) {
        this.tasks.push({
            action: name,
            args
        });
        this.redraw = true;
    }

    /**
     * 清空画布
     */
    clear() { //x: number, y: number, width: number, height: number
        // this.pushTask('clear', ...arguments);
        this.tasks.length = 0;
    }
    /**
     * 填充颜色
     */
    begin() {
        this.pushTask('begin');
    }

    /**
     * 闭合形状
     */
    closePath() {
        this.pushTask('closePath');
    }

    /**
     * 结束本次绘制
     */
    fill(color: string) {
        this.pushTask('fill', ...arguments);
    }
    /**
     * 画线
     * @param color 
     */
    stroke(color: string, width: number = 1) {
        this.pushTask('stroke', ...arguments);
    }

    /**
     * 
     * @param point 移动到
     */
    moveTo(x: number, y: number) {
        this.pushTask('moveTo', ...arguments);
    }

    /**
     * 直线到
     */
    lineTo(x: number, y: number) {
        this.pushTask('lineTo', ...arguments);
    }

    /**
     * 绘制一个矩形
     * 可带圆角
     */
    drawRect(x: number, y: number, width: number, height: number, radius: number = 0) {
        /**
         * 未设置圆角，直接使用多边形绘制
         */
        if (radius <= 0) {
            this.drawPolygon([x, y, x + width, y, x + width, y + height, x, y + height]);
            return;
        }

        /**
         * 矫正圆角范围
         */
        radius = Math.max(0, Math.min(radius, Math.min(width, height) / 2));
        this.arc(x + radius, y + radius, radius, -Math.PI, -Math.PI / 2);
        this.lineTo(x + width - radius, y);
        this.arc(x + width - radius, y + radius, radius, -Math.PI / 2, 0);
        this.lineTo(x + width, y + height - radius);
        this.arc(x + width - radius, y + height - radius, radius, 0, Math.PI / 2);
        this.lineTo(x + radius, y + height);
        this.arc(x + radius, y + height - radius, radius, Math.PI / 2, -Math.PI);
        this.closePath();
    }

    /**
     * 画圆弧
     */
    arc(x: number, y: number, radians: number, startAngle: number, endAngle: number) {
        this.pushTask('arc', ...arguments);
    }

    /**
     * 绘制一个圆
     */
    drawCircle(x: number, y: number, radians: number) {
        this.arc(x , y, radians, 0, 2 * Math.PI);
    }

    /**
     * 绘制一个椭圆
     */
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean = false) {
        this.pushTask('ellipse', ...arguments);
    }

    /**
     * 绘制一个椭圆
     */
    drawEllipse(x: number, y: number, radiusX: number, radiusY: number) {
        this.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
    }

    /**
     * 绘制一个多边形
     */
    drawPolygon(points: number[]) {
        if (points.length < 6) {
            console.warn('至少3个点才能绘制一个多边形');
            return;
        }

        if (points.length % 2 !== 0) {
            points.length -= 1;
        }

        for (let i = 0; i < points.length; i +=2) {
            const x = points[i];
            const y = points[i + 1];
            // console.log(x, y);
            if (i === 0) {
                this.moveTo(x, y);
                continue;
            }
            this.lineTo(x, y);
        }
        this.closePath();
    }

    onDestroy(): void {
        this.node.size.emitter.off('change', this.toRedraw, this);
    }
}