import { Timeline } from "../modules";
import { Animation } from "./Animation";
import { Sprite } from "./Sprite";
import { SpriteSheet } from "./SpriteSheet";

export class SpriteSheetAnimation extends Animation {

    /**
     * 播放的帧速率，按照每秒计算
     */
    fps: number = 60;

    spriteSheet: SpriteSheet;

    start() {
        this.speed = this.fps / 60;
        this.spriteSheet = this.getComponent(SpriteSheet)!;
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