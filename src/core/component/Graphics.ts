import { Texture } from "../texture";
import { DisplayObjects } from "./display/DisplayObject";

/**
 * 图形绘制
 * ```ts
 * const node = app.stage.addChild(new Transform(Graphics));
 * node.size.set(1280, 720);
 * const g = node.getComponent(Graphics)!;
 * // 绘制多边形
 * g.begin();
 * g.drawPolygon([0, 0,  100, 0,  100, 100, 50, 50, 0, 100]);
 * g.fill('#00ffff');
 * g.stroke('#00ff00');
 * // 绘制线条
 * g.begin();
 * g.moveTo(120, 20)
 * g.lineTo(220, 20);
 * g.lineTo(220, 100);
 * // 闭合路径
 * g.closePath();
 * g.stroke('#00ff00', 5);
 * // 绘制线条
 * g.begin();
 * g.moveTo(120, 20)
 * g.lineTo(220, 20);
 * g.stroke('#00ff00', 5);
 * // 绘制圆弧
 * g.begin();
 * g.arc(340, 60, 50, 0, Math.PI);
 * g.stroke('#0000FF', 5);
 * // 绘制圆
 * g.begin();
 * g.drawCircle(460, 60, 50);
 * g.stroke('#0000FF', 5);
 * // 绘制圆角矩形
 * g.begin();
 * g.drawRect(560, 10, 100, 100, 8);
 * g.fill('#FF00FF');
 * g.stroke('#0000FF', 5);
 * // 绘制椭圆路径
 * g.begin();
 * g.ellipse(120, 200, 100, 80, 0, 0, Math.PI);
 * g.fill('#FF0000');
 * g.stroke('#00FF00', 5);
 * 
 * g.begin();
 * g.drawCircle(50, 210, 5);
 * g.fill('#000000');
 * 
 * g.begin();
 * g.drawCircle(80, 210, 5);
 * g.fill('#000000');
 * 
 * g.begin();
 * g.drawCircle(110, 210, 5);
 * g.fill('#000000');
 * // 绘制椭圆
 * g.begin();
 * g.drawEllipse(140, 210, 10, 5);
 * g.fill('#000000');
 * ```
 */
export class Graphics extends DisplayObjects { // extends Component

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
        // console.log(this);
    }

    private toRedraw() {
        this.redraw = true;
    }

    /**
     * 新增一条绘制指令
     * @param name 指令名
     * @param args 指令参数
     */
    pushTask(name: string, ...args: (string | number)[]) {
        this.tasks.push({
            action: name,
            args
        });
        this.redraw = true;
    }

    /**
     * 清空画布（清空操作指令历史）
     */
    clear() {
        this.tasks.length = 0;
    }
    /**
     * 开启新的绘制
     */
    begin() {
        this.pushTask('begin');
    }

    /**
     * 闭合路径，会将起始点与结束点用直线连接
     */
    closePath() {
        this.pushTask('closePath');
    }

    /**
     * 填充颜色
     * @param color 颜色
     */
    fill(color: string) {
        this.pushTask('fill', ...arguments);
    }
    /**
     * 设置边框或线条
     * @param color 颜色
     */
    stroke(color: string, width: number = 1) {
        this.pushTask('stroke', ...arguments);
    }

    /**
     * 移动起始点
     * @param point 移动到
     */
    moveTo(x: number, y: number) {
        this.pushTask('moveTo', ...arguments);
    }

    /**
     * 绘制一条直线到某点
     * @param x x坐标
     * @param y y坐标
     */
    lineTo(x: number, y: number) {
        this.pushTask('lineTo', ...arguments);
    }

    /**
     * 绘制一个矩形，可带圆角
     * @param x 起始位置x坐标
     * @param y 起始位置y坐标
     * @param width 宽
     * @param height 高
     * @param radius 圆角大小
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
     * 绘制圆弧
     * @param x 圆心位置x坐标
     * @param y 圆心位置y坐标
     * @param radians 半径
     * @param startAngle 圆弧起始位置
     * @param endAngle 圆弧结束位置
     */
    arc(x: number, y: number, radians: number, startAngle: number, endAngle: number) {
        this.pushTask('arc', ...arguments);
    }

    /**
     * 绘制一个圆
     * @param x 圆心位置x坐标
     * @param y 圆心位置y坐标
     * @param radians 半径
     */
    drawCircle(x: number, y: number, radians: number) {
        this.arc(x , y, radians, 0, 2 * Math.PI);
    }

    /**
     * 绘制一个椭圆
     * @param x 椭圆圆心的 x 轴坐标。
     * @param x 椭圆圆心的 y 轴坐标。
     * @param radiusX 椭圆长轴的半径。
     * @param radiusY 椭圆短轴的半径。
     * @param rotation 椭圆的旋转角度，以弧度表示 (非角度度数)。
     * @param startAngle 将要绘制的起始点角度，从 x 轴测量，以弧度表示 (非角度度数)。
     * @param endAngle 椭圆将要绘制的结束点角度，以弧度表示 (非角度度数)。
     * @param anticlockwise Boolean 选项，如果为 true，逆时针方向绘制椭圆（逆时针），反之顺时针方向绘制。
     */
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean = false) {
        this.pushTask('ellipse', ...arguments);
    }

    /**
     * 绘制一个椭圆
     * @param x 椭圆圆心的 x 轴坐标。
     * @param x 椭圆圆心的 y 轴坐标。
     * @param radiusX 椭圆长轴的半径。
     * @param radiusY 椭圆短轴的半径。
     */
    drawEllipse(x: number, y: number, radiusX: number, radiusY: number) {
        this.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
    }

    /**
     * 绘制一个多边形
     * @param points 多边形每个点的坐标([x1, y2, x2, y2, x3, y3, ...])
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