import './style.scss';
import { Layout, Renderer, Resource, Sprite, Ticker, TouchEvent, Transform, Vector2 } from '../src';
import { Application } from '../src';
import { Text } from '../src/core/component/Text';
import { ScaleAnimation } from './component/ScaleAnimation';
import { scaleSprite } from './prefab/scaleSprite';
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
/**
 * 设置canvas大小
 */
canvas.width = app.config.width;
canvas.height = app.config.height;

/**
 * 自定义渲染器
 */
const renderer = new Renderer(canvas.getContext('2d')!, app);
/**
 * 创建一个刷新器
 */
const ticker = new Ticker();
ticker.start();
ticker.on('update', renderer.render, renderer);

app.stage.addChild(scaleSprite());
const ss = scaleSprite();
