"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvasHelper = void 0;
var _hidpi = require("./hidpi");
var canvas = document.createElement('canvas');
var context = (0, _hidpi.hidpi)(canvas.getContext('2d', {
  willReadFrequently: true
}));
var canvasHelper = {
  context: context
};
exports.canvasHelper = canvasHelper;