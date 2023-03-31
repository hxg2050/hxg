import './style.scss';
import { Application, canvas2d, ImageTexture, LoadResListConfig, Resource, Sprite, Transform } from '../src';
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
];

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
const resCount = res_list.length;

function resLoader(list: LoadResListConfig) {
    const loader = Resource.loadGroup(list);
    loader.on('loaded', () => {
        loadedCount ++;
        if (loadedCount == resCount) {
            const bg = app.stage.addComponent(Sprite);
            const res = Resource.get('bg')!;
            bg.texture = new ImageTexture(res.data);
            console.log(bg);
            run();
        }
    });
}
resLoader(resList(res_list, image_path));

function run() {
    const img1 = createSpriteByName('icon1')!;
    app.stage.addChild(img1.node);
    const img2 = createSpriteByName('icon10')!;
    app.stage.addChild(img2.node);
    img2.node.alpha = 0.6;
    img2.node.position.set(40, 40);


    const img3 = createSpriteByName('icon10')!;

    const mask = img3.addComponent(Mask);
    const maskImg = createSpriteByName('icon2');
    maskImg.node.position.x = 72 / 2;
    maskImg.node.position.y = 72 / 2;
    // maskImg.node.scale.set(0.5, 0.5);
    mask.value = maskImg.node;
    maskImg.node.anchor.set(0.5, 0.5);
    maskImg.node.rotation = 45;

    img3.node.addChild(maskImg.node);
    app.stage.addChild(img3.node);
    // img3.node.alpha = 0.5;
    img3.node.position.set(60, 60);
    // console.log(img3.node.getRectangle());


    // const img4 = createSpriteByName('icon1')!;
    // app.stage.addChild(img4.node);
}