"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidpi = hidpi;
/**
 * 解决canvas模糊问题
 * 重写部分用到的api
 */
function hidpi(context) {
  var dpi = window.devicePixelRatio;
  if (dpi == 1) {
    return context;
  }
  context.canvas.width *= dpi;
  context.canvas.height *= dpi;
  // context.scale(dpi, dpi);

  var clearRect = context.clearRect,
    fillText = context.fillText,
    strokeText = context.strokeText,
    stroke = context.stroke,
    drawImage = context.drawImage,
    transform = context.transform,
    getImageData = context.getImageData;
  //    clearRect(x: number, y: number, w: number, h: number): void;
  context.clearRect = function (x, y, w, h) {
    x *= dpi;
    y *= dpi;
    w *= dpi;
    h *= dpi;
    clearRect.bind(context)(x, y, w, h);
  };
  context.stroke = function () {
    context.lineWidth *= dpi;
    stroke.bind(context)();
    context.lineWidth /= dpi;
  };
  context.fillText = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    args[1] *= dpi;
    args[2] *= dpi;
    var font = context.font;
    context.font = font.replace(/(\d+)(px|em|rem|pt)/g, function (w, m, u) {
      w;
      return m * dpi + u;
    });
    fillText.bind(context).apply(void 0, args);
    context.font = font;
  };
  context.strokeText = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args[1] *= dpi;
    args[2] *= dpi;
    var font = context.font;
    context.font = font.replace(/(\d+)(px|em|rem|pt)/g, function (w, m, u) {
      w;
      return m * dpi + u;
    });
    strokeText.bind(context).apply(void 0, args);
    context.font = font;
  };

  // drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
  context.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (sw != undefined && sh != undefined) {
      if (dx != undefined && dy != undefined && dw != undefined && dh != undefined) {
        dw *= dpi;
        dh *= dpi;
        drawImage.bind(context)(image, sx, sy, sw, sh, dx, dy, dw, dh);
      } else {
        drawImage.bind(context)(image, sx, sy, sw, sh);
      }
    } else {
      drawImage.bind(context)(image, sx, sy);
    }
  };

  // transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  context.transform = function (a, b, c, d, e, f) {
    e *= dpi;
    f *= dpi;
    transform.bind(context)(a, b, c, d, e, f);
  };
  context.getImageData = function (sx, sy, sw, sh, settings) {
    sx *= dpi;
    sy *= dpi;
    sw *= dpi;
    sh *= dpi;
    return getImageData.bind(context)(sx, sy, sw, sh, settings);
  };
  return context;
}