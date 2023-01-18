import { Component } from "./Component"

/**
 * 音频播放
 * 目前已支持mp3格式，理论上也支持其它html支持的格式
 * 声音播放一般是统一控制，包括背景，音效，声音大小，应该播放的声音(可能会多个声音同时播放)
 * 浏览器中用户首次打开页面可能会出现声音无法正常播放，这是浏览器出于用户体验考虑在没有任何交互的情况下禁止了。
 * 此组件提供音频播放能力
 * ```ts
 * // 创建节点
 * const node = new Transform();
 * // 添加音频组件
 * const audio = node.addComponent(Audio);
 * // 设置播放音量
 * audio.volume = 0.5;
 * // 设置播放速度为2倍
 * audio.playbackRate = 2.0;
 * // 加载素材
 * Resource.load('horse.mp3').then((res: IRes) => {
 *      // 设置音频素材
 *      audio.source = res.data;
 *      // 播放音频
 *      audio.play();
 * });
 * ```
 */
export class Audio extends Component {

    /**
     * 事件
     */
    static Event = {
        /**
         * 音频播放完成
         */
        ENDED: 'ended'
    } as const;

    private _volume: number = 1.0;

    /**
     * 表示音频的音量。值从 0.0（静音）到 1.0（最大音量）。
     */
    get volume(): number {
        return this._volume;
    }
    set volume(val: number) {
        this._volume = val;
        if (this.source) {
            this.source.volume = val;
        }
    }

    /**
     * 获取获取音频总时长
     */
    get duration(): number|undefined {
        return this.source && this.source.duration;
    }
    
    private _currentTime: number = 0;
    /**
     * 音频当前播放的时间
     */
    get currentTime(): number {
        return this._currentTime;
    }
    set currentTime(val: number) {
        this._currentTime = val;
        if (this.source) {
            this.source.currentTime = val;
        }
    }

    private _playbackRate: number = 1.0;
    /**
     * 音频播放速度0.25-5.0，不在此范围将被静音，默认值 1.0
     */
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
    /**
     * 音频资源
     */
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
    
    /**
     * 循环次数，0：不循环，-1：一直循环
     */
    loop: number = 0;
    /**
     * 已经播放了的次数
     * 如果要播放指定次数，需要将此参数重置
     * ```ts
     * 
     * // 创建节点
     * const node = new Transform();
     * // 添加音频组件
     * const audio = node.addComponent(Audio);
     * // 设置循环播放两次
     * audio.loop = 2;
     * // 监听播放完成事件
     * audio.emitter.on(Audio.Event.ENDED, () => {
     *      // 重置已播放次数
     *      audio.playCount = 0;
     *      // 再次播放
     *      audio.play();
     * }, audio);
     * // 加载素材
     * Resource.load('horse.mp3').then((res: IRes) => {
     *      // 设置音频素材
     *      audio.source = res.data;
     *      // 播放音频
     *      audio.play();
     * });
     * ```
     */
    playCount: number = 0;

    /**
     * 指示媒体元素是否被暂停
     */
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
    private onEnded() {
        this.emitter.emit(Audio.Event.ENDED);
        this.playCount ++;
        if (this.loop == -1 || this.playCount <= this.loop) {
            this.play();
        }
    }
}