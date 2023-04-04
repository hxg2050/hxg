"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = void 0;
var _ticker = require("../../ticker");
var _component = require("../../component");
var _Text = require("../../component/Text");
var _Matrix = require("../../math/Matrix");
var _transform = require("../../transform");
var _spriteRender = _interopRequireDefault(require("./spriteRender"));
var _textRender = _interopRequireDefault(require("./textRender"));
var _graphicsRender = _interopRequireDefault(require("./graphicsRender"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 渲染器
 */
var Renderer = /*#__PURE__*/function () {
  function Renderer(public context, public app) {
    _classCallCheck(this, Renderer);
    _defineProperty(this, "renderActions", [[_component.Sprite, _spriteRender["default"]], [_Text.Text, _textRender["default"]], [_component.Graphics, _graphicsRender["default"]]]);
  }
  _createClass(Renderer, [{
    key: "render",
    value: function render() {
      this.context.clearRect(0, 0, this.app.config.width, this.app.config.height);
      this._render(this.app.stage);
    }
  }, {
    key: "_render",
    value: function _render(transform, parentMatrix) {
      // 当前节点帧开始
      if (!transform.active) {
        return;
      }
      transform.emitter.emit(_transform.Transform.Event.TICKER_BEFORE);
      transform.update(_ticker.ticker.deltaTime);
      var matrix = new _Matrix.Matrix();
      matrix.setTransform(transform);
      if (parentMatrix) {
        matrix.prepend(parentMatrix);
      }
      for (var j = 0; j < this.renderActions.length; j++) {
        if (this._renderElement(transform, this.renderActions[j][0], matrix, this.renderActions[j][1])) {
          break;
        }
      }
      // 当前节点帧结束
      transform.emitter.emit(_transform.Transform.Event.TICKER_AFTER);
      if (transform.children.length == 0) {
        return;
      }
      for (var i = 0; i < transform.children.length; i++) {
        var child = transform.children[i];
        this._render(child, matrix);
      }
    }

    /**
     * 判断是否需要渲染，并执行渲染返回结果
     * @param transform 
     * @param constructor 
     * @param callback 
     * @returns 
     */
  }, {
    key: "_renderElement",
    value: function _renderElement(transform, constructor, matrix, callback) {
      var element = transform.getComponent(constructor);
      if (!element) {
        return false;
      }
      this.context.globalAlpha = transform.alpha;
      callback(this.context, matrix, element);
      return true;
    }
  }]);
  return Renderer;
}();
exports.Renderer = Renderer;