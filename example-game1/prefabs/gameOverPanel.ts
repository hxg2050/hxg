import { Layout } from "../../src";
import { Replay } from "../components/Replay";
import { createSpriteByName } from "../node/createSpriteByName";

/**
 * 游戏结束面板
 */
export function gameOverPanel(isWin = true) {
    const mask = createSpriteByName('mask_black');
    const rep = mask.addComponent(Replay);
    mask.node.anchor.set(0.5, 0.5);
    mask.node.touch = true;
    mask.node.deliver = false;
    const bg = createSpriteByName('over_bg');
    const img_text = createSpriteByName(isWin ? 'win_text' : 'failed_text');
    const replay = createSpriteByName('replay');
    mask.node.addChild(bg.node);
    bg.node.addChild(img_text.node);
    bg.node.addChild(replay.node);
    rep.playButton = replay.node;
    rep.addEvents();
    
    const mask_layuot = mask.addComponent(Layout);
    mask_layuot.left = 0;
    mask_layuot.top = 0;
    mask_layuot.right = 0;
    mask_layuot.bottom = 0;
    bg.node.anchor.set(0.5, 0.5);
    const bg_layout = bg.addComponent(Layout);
    bg_layout.vertical = 0;
    bg_layout.horizontal = -100;
    img_text.node.anchor.set(0.5, 0.5);
    img_text.node.position.y = 130;
    const text_layout = img_text.addComponent(Layout);
    text_layout.vertical = 0;
    mask.node.scale.set(0, 0);

    replay.node.position.y = 230;
    replay.node.anchor.set(0.5, 0);
    const replay_layout = replay.addComponent(Layout);
    replay_layout.vertical = 0;
    return mask.node;
}