import { Texture, TextureResource } from "../texture";
import { Component } from "./Component";
import { Sprite } from "./Sprite";


type AtlasFrame = {
    name: string;
    /**
     * 原图裁剪参数
     */
    frame: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    /**
     * 即将渲染的画布尺寸(不确定)
     */
    sourceSize: {
        w: number;
        h: number;
    };
    /**
     * 裁剪后的修正尺寸(放到即将渲染的画布的实际位置和尺寸)（不确定）
     */
    spriteSourceSize: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}
/**
 * 图集处理，可用于逐帧动画
 * 配合Sprite可显示图片
 * 配合动画组件可以处理动画
 */
export class SpriteSheet extends Component {
    frames: Record<string, Texture> = {};
    animations: {} = {};
    /**
     * 展示的节点
     */
    sprite: Sprite;

    start(): void {
        this.sprite = this.getComponent(Sprite);
    }

    /**
     * 获取素材
     * @param name 
     */
    get(name: string) {
        const data = this.frames[name];
        return data;
    }
    /**
     * 设置要显示的素材
     * @param name 
     */
    set(name: string, texture: Texture) {
        this.frames[name] = texture;
    }

    /**
     * 添加一个素材
     */
    add(res: TextureResource, data: AtlasFrame) {
        const texture = new Texture(res);
        texture.x = data.frame.x;
        texture.y = data.frame.y;
        texture.width = data.frame.w;
        texture.height = data.frame.h;
        this.set(data.name, texture);
    }

    /**
     * 设置要现实的素材
     * @param name 
     */
    show(name: string) {
        this.sprite.texture = this.get(name);
    }
}