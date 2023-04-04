"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = void 0;
exports["default"] = _default;
exports.sc = void 0;
var _core = require("../core");
var _component = require("../core/component");
var _transform = require("../core/transform");
var _jsxRuntime = require("/Users/youxia/work/github/hxg/src/jsx/jsx-runtime");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // import Container from "../core/src/components/Container";
// import IContainer from "../core/src/components/IContainer";
// import Layout from "../core/src/components/Layout";
// import Sprite from "../core/src/components/Sprite";
// import Vector2 from "../core/src/Vector2";
// type test<T> =  T extends {[P in keyof T]: infer U} ? (U extends Vector2 ? Partial<T> : never) : never;// (infer P) in key T ? P : never;
// {
//     [props in keyof T, T[props] extends string]?: T[props]
// };
// let a: test<Layout>;
// a.
// let data: ISceneConfig = {
//     name: 'header',
//     node: Container,
//     init: (node: Transform) => {
//         const size = node.size;
//         size.y = 400;
//         node.size = size;

//         const layout = node.addComponent(Layout);
//         layout.left = 0;
//         layout.right = 0;
//         console.log(node.size);
//     },
//     children: [
//         {
//             name: 'right',
//             node: Sprite,
//             components: [
//                 [Layout, {

//                 }]
//             ],
//             init: (node: Transform) => {
//                 const sprite = node.getComponent(Sprite)!;
//                 sprite.source = '../../assets/images/hero_1_2.png';
//             },
//             children: [
//                 {
//                     name: 'photo',
//                     node: Sprite,
//                     init: (node: Transform) => {
//                         // node.position = new Vector2(100, 100);
//                         const sprite = node.getComponent(Sprite)!;
//                         sprite.source = '../../assets/images/hero_2_1.png';
//                     }
//                 }
//             ]
//         }
//     ]
// }

// const createTransform = (config: ISceneConfig) => {
// }
function node(container, name, options) {}
function component(comp, name, options) {}
var sc = node(_component.Container, 'root', {
  type: '',
  position: {
    x: 1,
    y: 2
  },
  children: [{
    type: '',
    components: [component(_component.Sprite, 'sprite', {
      body: node('root'),
      action: component('sprite')
    })]
  }]
});
exports.sc = sc;
var scene = function scene(config) {
  var node = new _transform.Transform(config.node);
  config.name && (node.name = config.name);
  if (config.children) {
    for (var i = 0; i < config.children.length; i++) {
      node.addChild(scene(config.children[i]));
    }
  }
  if (config.init) {
    setTimeout(function () {
      config.init(node);
    }, 0);
  }
  return node;
};
function _default() {
  // return scene(data);
}
var Scene = /*#__PURE__*/function (_Thing) {
  _inherits(Scene, _Thing);
  var _super = _createSuper(Scene);
  function Scene() {
    var _this;
    _classCallCheck(this, Scene);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "slot", ['core', 'core1']);
    return _this;
  }
  _createClass(Scene, [{
    key: "start",
    value: function start() {
      this.addComponent(_component.Sprite);
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: (0, _jsxRuntime.jsxs)(Scene, {
          children: [(0, _jsxRuntime.jsx)("slot", {
            name: "core"
          }), (0, _jsxRuntime.jsx)("slot", {
            name: "core1"
          })]
        })
      });
    }
  }]);
  return Scene;
}(_core.Thing);
exports.Scene = Scene;