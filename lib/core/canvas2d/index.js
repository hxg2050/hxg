"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvas2d = canvas2d;
var _event = require("../event");
var _render = require("./render");
var _ticker = require("../ticker");
var _hidpi = require("./hidpi");
/**
 * canvas2d相关工作
 */
function canvas2d(canvas) {
  return function (app) {
    /**
     * 设置canvas大小
     */
    canvas.width = app.config.width;
    canvas.height = app.config.height;

    /**
     * 自定义渲染器
     */
    // const ctx = canvas.getContext('2d')!;
    var ctx = (0, _hidpi.hidpi)(canvas.getContext('2d'));
    var renderer = new _render.Renderer(ctx, app);
    // canvas.getContext('2d')!.scale(1/dpr, 1/dpr);
    /**
     * 创建一个刷新器
     */
    // const ticker = new Ticker();
    _ticker.ticker.start();
    _ticker.ticker.on('update', renderer.render, renderer);
    app.use((0, _event.touchEventListener)(canvas));
  };
}