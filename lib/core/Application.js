"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Application = void 0;
var _transform = require("./transform");
var _math = require("./math");
var _system = require("./system");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 应用
 * ```ts
 * // 方式一
 * const app = new Applaction({
 *      width: 500,
 *      height: 500
 * });
 * ```
 * ```ts
 * // 方式二
 * const app = Applaction.run({
 *      width: 500,
 *      height: 500
 * });
 * ```
 */
var Application = /*#__PURE__*/function () {
  function Application() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Application);
    _defineProperty(this, "config", {
      width: 400,
      height: 400
    });
    /**
     * 舞台，根节点
     */
    _defineProperty(this, "stage", void 0);
    /**
     * 全局事件处理器
     */
    _defineProperty(this, "eventSystem", void 0);
    this.config = Object.assign({}, this.config, config);
    this.stage = new _transform.Transform();
    this.stage.size = new _math.Vector2(this.config.width, this.config.height);
    this.eventSystem = new _system.EventSystem(this.stage);
  }

  // addMouseEvents() {

  //     const stageWidth = this.config.width;
  //     const canvasRealWidth = this.config.canvas.clientWidth;
  //     const canvasScale = stageWidth / canvasRealWidth;
  //     canvas.addEventListener('click', (evt: MouseEvent) => {
  //         app.eventSystem.emit(TouchEvent.TOUCH_TAP, {
  //             x: evt.offsetX * canvasScale,
  //             y: evt.offsetX * canvasScale,
  //         });
  //         console.log('click', evt);
  //     });
  // }

  /**
   * 插件拓展
   * 可注入到app
   * @param install 插件入口函数
   * @returns 
   */
  _createClass(Application, [{
    key: "use",
    value: function use(install) {
      install(this);
      return this;
    }
  }], [{
    key: "run",
    value: function run() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new this(config);
    }
  }]);
  return Application;
}();
exports.Application = Application;