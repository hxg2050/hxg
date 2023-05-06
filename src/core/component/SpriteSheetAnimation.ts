import { Timeline } from "../modules";
import { Animation } from "./Animation";
import { Sprite } from "./Sprite";
import { SpriteSheet } from "./SpriteSheet";

/**
 * 适用于texturepacker的动画
 * 
 * ```ts
 * let json = await Resource.load('./example/assets/animations/Samurai/Attack.json');
 * let img = await Resource.load('./example/assets/animations/Samurai/Attack.png');
 * // 如果要控制动画大小可以使用父节点包裹的方式控制scale属性
 * const group = app.stage.addChild(new Transform);
 * group.scale.set(2);
 * const node = group.addChild(new Transform(Sprite));
 * const sprite = node.getComponent(Sprite)!;
 * const spriteSheet = node.addComponent(SpriteSheet);
 * const ssa = node.addComponent(SpriteSheetAnimation);
 * // 设置每秒播放帧数
 * ssa.fps = 8;
 * // 设置为无限循环播放
 * ssa.loop = -1;
 * const func = () => {
 * 	console.log('播放到第', ssa.time, '帧');
 * };
 * ssa.addFrameAction(2, func, this);
 * ssa.emitter.on(Animation.Event.ENDED, () => {
 * 	console.log('单次动画播放完成');
 * 	ssa.removeFrameAction(2, func, this);
 * }, this);
 * spriteSheet.load(json.data, img);
 * // 需要在下一帧才能正常播放
 * ticker.once('update', () => {
 * 	ssa.play('Attack');
 * }, this);
 * ```
 */
export class SpriteSheetAnimation extends Animation {

    /**
     * 播放的帧速率，按照每秒计算，每秒播放的帧数
     */
    fps: number = 60;

    spriteSheet: SpriteSheet;

    start() {
        this.speed = this.fps / 60;
        this.spriteSheet = this.node.getComponent(SpriteSheet)!;
        // 默认动画
        const spriteSheet = this.spriteSheet;
        for (let name in spriteSheet.animations) {
            const animation = spriteSheet.animations[name];
            const timeline = new Timeline(spriteSheet.sprite);
            for (let i = 0; i < animation.length; i ++) {
                const texture = spriteSheet.get(animation[i]);
                timeline.set(i, {
                    texture
                });
            }
            timeline.total = animation.length;
            this.setTimeline([ timeline ], name);
        }
    }

    /**
     * 每次当需要更新帧动画时调用
     * @param val 即将更新的帧动画配置
     */
    protected nextAction(val: Timeline) {
        super.nextAction(val);
        const sprite = this.node.container as Sprite;
        sprite.resize();
    }
}