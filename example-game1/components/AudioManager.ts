import { Audio, Component, Resource } from "../../src";

export class AudioManager extends Component {

    static _ins: AudioManager;

    bgm!: Audio;

    start() {
        if (!AudioManager._ins) {
            AudioManager._ins = this;
        }

        this.bgm = this.node.addComponent(Audio)!;
        const bgmRes = Resource.get('bgm_mp3')!;
        this.bgm.source = bgmRes.data;
        this.bgm.loop = -1;
        this.bgm.play();
    }

    static ins() {
        return AudioManager._ins;
    }

    playBgm() {
        this.bgm.play();
    }

    play(name: string) {
        const res = Resource.get(name)!;
        const audio = this.node.addComponent(Audio)!;
        audio.source = res.data;
        audio.play();
        audio.emitter.once('ended', () => {
            audio.destroy();
        }, audio);
    }
}