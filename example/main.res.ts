import './style.scss';
import { Application, canvas2d, LoadResListConfig, NinePanel, Resource, Sprite, Texture, Transform } from '../src';
import { createSpriteByName } from '../example-game1/node/createSpriteByName';
import { Mask } from '../src/core/component/Mask';
/**
 * 创建应用
 */
const app = new Application({
    width: 1280,
    height: 720
});

const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
app.use(canvas2d(canvas));

const image_path = '../example-game1/assets/image/';
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
];

const resList = (list: LoadResListConfig, root: string) => {
    for (let i = 0; i < list.length; i++) {
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
const resCount = res_list.length;

function resLoader(list: LoadResListConfig) {
    const loader = Resource.loadGroup(list);
    loader.on('loaded', () => {
        loadedCount++;
        if (loadedCount == resCount) {
            const bg = app.stage.addComponent(Sprite);
            const res = Resource.get('bg')!;
            bg.texture = new Texture(res.data);
            console.log(bg);
            run();
        }
    });
}
resLoader(resList(res_list, image_path));

function run() {
    const img1 = createSpriteByName('input')!;
    app.stage.addChild(img1.node);
    const ninePanel = img1.node.addComponent(NinePanel);
    ninePanel.left = 7;
    ninePanel.right = 7;
    ninePanel.top = 7;
    ninePanel.bottom = 7;
    img1.node.width = 400;
    img1.node.height = 200;
}