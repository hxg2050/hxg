import { NinePanel, Sprite } from "hxg/core/component";
import { Texture } from "../../../core/texture";
import { canvasHelper } from "../canvasHelper";

function make(component: NinePanel) {
    component.redraw = false;
    const width = component.texture.width;
    const height = component.texture.height;

    const left = component.left;
    const top = component.top;
    const right = width - component.right;
    const bottom = height - component.bottom;

    if (left < 0 || right > width || top < 0 || bottom > height) {
        return;
    }

    if (left >= right || top >= bottom) {
        return;
    }

    let xline = [0, left, right, width];
    let yline = [0, top, bottom, height];
    const rects = [];

    for (let i = 0; i < xline.length - 1; i ++) {
        for (let j = 0; j < yline.length - 1; j ++) {
            const x = xline[i];
            const y = yline[j];
            const width = xline[i + 1] - x;
            const height = yline[j + 1] - y;
            rects.push(x, y, width, height);
        }
    }

    const node = component.node;

    const ctx = canvasHelper.createContext(...component.node.size.toArray());

    const cw = node.width - rects[0 + 2] - rects[6 * 4 + 2];
    const ch = node.height - rects[0 + 3] - rects[2 * 4 + 3]

    const source = component.texture.source;

    for (let i = 0; i < 9; i ++) {
        let x = rects[i * 4];
        let y = rects[i * 4 + 1];
        let w = rects[i * 4 + 2];
        let h = rects[i * 4 + 3];

        if (i == 0) {
            ctx.drawImage(source, x, y, w, h, x, y, w, h);
        }

        if (i == 1) {
            ctx.drawImage(source, x, y, w, h, x, y, w, ch);
        }

        if (i == 2) {
            ctx.drawImage(source, x, y, w, h, x, node.height - h, w, h);
        }

        if (i == 3) {
            ctx.drawImage(source, x, y, w, h, x, y, cw, h);
        }

        if (i == 4) {
            ctx.drawImage(source, x, y, w, h, x, y, cw, ch);
        }
        
        if (i == 5) {
            ctx.drawImage(source, x, y, w, h, x, node.height - h, cw, h);
        }

        if (i == 6) {
            ctx.drawImage(source, x, y, w, h, node.width - w, y, w, h);
        }

        if (i == 7) {
            ctx.drawImage(source, x, y, w, h, node.width - w, y, w, ch);
        }

        if (i == 8) {
            ctx.drawImage(source, x, y, w, h, node.width - w, node.height - h, w, h);
        }

        // if (i == 1 || i == 7) {
        //     // 竖
        //     ctx.drawImage(component.texture.source, x, y, w, h);
        // }

        // if (i == 3 || i == 5) {
        //     // 横
        // }

        // if (i == 4) {
        //     // 横竖
        // }


    }

    // console.log(rects);
    const texture = new Texture(ctx.canvas);
    texture.init = true;
    return texture;
}

/**
 * 处理9宫格，将纹理拆分成9个部分，然后再处理大小
 */
export function ninePanel(component: NinePanel) {
    if (!component.redraw) {
        return;
    }
    (component.node.container as Sprite).texture = make(component);
}