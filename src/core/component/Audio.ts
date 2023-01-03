import { Component } from "./Component"

/**
 * 音频播放
 * mp3
 * 声音播放一般是统一控制，包括背景，音效，声音大小，应该播放的声音(可能会多个声音同时播放)
 * 此组件提供音频播放能力
 */
export class Audio extends Component {
    // 表示音频的音量。值从 0.0（静音）到 1.0（最大音量）。
    // volume: number = 1.0;
    private _volume: number = 1.0;
    get volume(): number {
        return this._volume;
    }
    set volume(val: number) {
        this._volume = val;
        if (this.source) {
            this.source.volume = val;
        }
    }

    // 获取音频总时长
    // duration: number = 0;
    get duration(): number|undefined {
        return this.source && this.source.duration;
    }
    
    // 音频当前播放的时间
    private _currentTime: number = 0;
    get currentTime(): number {
        return this._currentTime;
    }
    set currentTime(val: number) {
        this._currentTime = val;
        if (this.source) {
            this.source.currentTime = val;
        }
    }

    // 音频播放速度0.25-5.0，不在此范围将被静音，默认值 1.0
    private _playbackRate: number = 1.0;
    get playbackRate(): number {
        return this._playbackRate;
    }
    set playbackRate(val: number) {
        this._playbackRate = val;
        if (this.source) {
            this.source.playbackRate = val;
        }
    }

    private _onEnded?: () => void;
    // 音频资源
    private _source?: HTMLAudioElement;
    set source(val: HTMLAudioElement | undefined) {
        if (this._source) {
            this._source.removeEventListener('ended', this._onEnded!);
        }
        if (!val) {
            return;
        }
        this._source = val;
        // 初始化音频
        this._source.volume = this.volume;
        this._source.currentTime = this.currentTime;
        this._source.playbackRate = this.playbackRate;

        this._onEnded = this.onEnded.bind(this);
        this._source.addEventListener('ended', this._onEnded);
    }
    get source() {
        return this._source;
    }
    
    // 循环次数，0：不循环，-1：一直循环
    loop: number = 0;
    // 已经播放了的次数
    playCount: number = 0;

    // 指示媒体元素是否被暂停
    paused: boolean = true;

    /**
     * 播放音频
     */
    play() {
        this.source!.play();
        this.paused = true;
    }

    /**
     * 暂停音频
     */
    pause() {
        this.source!.pause();
        this.paused = false;
    }

    /**
     * 停止播放
     * 会将播放时间重置到0
     */
    stop() {
        this.currentTime = 0;
        this.pause();
    }

    /**
     * 单次播放结束时调用
     */
    onEnded() {
        this.playCount ++;
        if (this.loop == -1 || this.playCount <= this.loop) {
            this.play();
        }
    }
}