import { Application, canvas2d, Resource, Sprite, webgl } from '../src';
import { LoadResListConfig } from '../src/core/resource/GroupLoader';
import { Texture } from '../src/core/texture';
import { FPS } from './components/FPS';
import { createText } from './node/createText';
import { game } from './prefabs/game';
import { load } from './prefabs/load';
import './style.scss';

/**
 * 创建应用
 */
const app = new Application({
	width: 720,
	height: 1280
});

/**
 * 获取canvas
 */
const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
// 此处自定义和视图渲染相关的，默认实现了canvas2d相关的逻辑，理论上支持任何渲染模式，包括使用webgl和html以及其它的，例如pixi
// app.use(canvas2d(canvas));
app.use(webgl(canvas));

const loadText = load();
app.stage.addChild(loadText.node);

const image_path = './assets/image/';
const res_list: LoadResListConfig = [
    ['icon1.png', 'icon1'],
    ['icon2.png', 'icon2'],
    ['icon3.png', 'icon3'],
    ['icon4.png', 'icon4'],
    ['icon5.png', 'icon5'],
    ['icon6.png', 'icon6'],
    ['icon7.png', 'icon7'],
    ['icon8.png', 'icon8'],
    ['icon9.png', 'icon9'],
    ['icon10.png', 'icon10'],
    ['icon11.png', 'icon11'],
    ['icon12.png', 'icon12'],
    ['icon13.png', 'icon13'],
    ['icon14.png', 'icon14'],
    ['icon15.png', 'icon15'],
    ['icon16.png', 'icon16'],
    ['input.png', 'input'],
    ['bg.jpg', 'bg'],
    ['mask.png', 'mask'],
    ['replay.png', 'replay'],
    ['mask_black.png', 'mask_black'],
    ['over_bg.png', 'over_bg'],
    ['failed_text.png', 'failed_text'],
    ['win_text.png', 'win_text'],
]
const audio_path = './assets/audio/';
const res_audio_list: LoadResListConfig = [
    ['bgm.mp3', 'bgm_mp3'],
    ['click.mp3', 'click_mp3'],
    ['clear.mp3', 'clear_mp3'],
]

const resList = (list: LoadResListConfig, root: string) => {
    for (let i = 0; i < list.length; i ++) {
        let item = list[i];
        if (typeof item == 'string') {
            list[i] = root + item;
        } else {
            item[0] = root + item[0];
        }
    }
    return list;
}
let loadedCount = 0;
const resCount = res_list.length + res_audio_list.length;

function resLoader(list: LoadResListConfig) {
    const loader = Resource.loadGroup(list);
    loader.on('loaded', () => {
        loadedCount ++;
        loadText.value = `${loadedCount}/${resCount}`
        if (loadedCount == resCount) {
            loadText.node.destroy();
            const bg = app.stage.addComponent(Sprite);
            const res = Resource.get('bg')!;
            bg.texture = new Texture(res.data);
            game(app.stage);

            const fps = createText('');
            fps.node.size.set(100, 100);
            app.stage.addChild(fps.node);
            fps.node.addComponent(FPS);

        }
    });
}
resLoader(resList(res_list, image_path));
resLoader(resList(res_audio_list, audio_path));