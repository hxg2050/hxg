import { Vector2 } from "../math";
import { IRes, Resource } from "../resource";
import { Texture, TextureResource } from "../texture";
import { Component } from "./Component";
import { Sprite } from "./Sprite";


export type AtlasFrame = {
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

    pivot: {
        x: number;
        y: number;
    }

    rotated: boolean
}

export type SheetFrames = {
    frames: Record<string, AtlasFrame>;
    animations: {
        Attack: string[];
    };
    meta: {
        app: string;
        version: string;
        image: string;
        format: string;
        size: {
            w: number;
            h: number;
        };
        scale: number;
    }
}

/**
 * 图集处理，可用于逐帧动画
 * 配合Sprite可显示图片
 * 配合动画组件可以处理动画
 * ```ts
 * let json = await Resource.load('./example/assets/animations/Samurai/Attack.json');
 * let img = await Resource.load('./example/assets/animations/Samurai/Attack.png');
 * // 如果要控制动画大小可以使用父节点包裹的方式控制scale属性
 * const group = app.stage.addChild(new Transform);
 * group.scale.set(2);
 * const node = group.addChild(new Transform(Sprite));
 * const sprite = node.getComponent(Sprite)!;
 * const spriteSheet = node.addComponent(SpriteSheet);
 * spriteSheet.load(json.data, img);
 * // 需要在下一帧才能正常切换
 * ticker.once('update', () => {
 *     spriteSheet.show('0.png');
 *     sprite.resize();
 * }, this);
 * ```
 */
export class SpriteSheet extends Component {
    /**
     * 纹理集
     */
    frames: Record<string, Texture> = {};
    /**
     * 动画配置
     */
    animations: Record<string, string[]> = {};
    /**
     * 展示的节点
     */
    sprite: Sprite;

    start(): void {
        this.sprite = this.node.getComponent(Sprite);
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
     * @param res 资源
     * @param data 配置
     * @param name 内部别名
     */
    add(res: TextureResource, data: AtlasFrame, name: string) {
        const texture = new Texture(res);
        texture.x = data.frame.x;
        texture.y = data.frame.y;
        texture.width = data.frame.w;
        texture.height = data.frame.h;
        if (data.rotated) {
            texture.rotation = -90;
        }
        texture.left = data.spriteSourceSize.x;
        texture.top = data.spriteSourceSize.y;
        texture.anchor.set(data.pivot.x, data.pivot.y);
        texture.sourceSize = new Vector2(data.sourceSize.w, data.sourceSize.h);
        this.set(name, texture);
    }

    /**
     * 设置要现实的素材
     * @param name 内部别名
     */
    show(name: string) {
        this.sprite.texture = this.get(name);
    }

    /**
     * 加载图集
     * 如果没有传入资源,则使用配置里面的资源路径进行加载，但是还是要提前保证路径资源已经被提前加载
     * @param config 配置
     * @param res 资源
     */
    load(config: SheetFrames, res?: IRes) {
        if (!res) {
            // 使用配置里面的资源路径进行加载
            res = Resource.get(config.meta.image);
        }

        for (let name in config.frames) {
            // 添加并解析每个资源
            this.add(res.data, config.frames[name], name);
        }

        if (config.animations) {
            // 配置动画
            this.animations = config.animations;
        }
    }
}