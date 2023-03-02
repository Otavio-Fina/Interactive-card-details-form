"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
'use strict';
function App() {
  return dom("atualizeCarde", null);
}
function Ali() {
  document.getElementsByClassName('btn').style.color = 'red';
}
var initialRootNode = document.getElementById('initial-root');
var root = _reactDom["default"].createRoot(initialRootNode);
root.render( /*#__PURE__*/_react["default"].createElement(App));
root.render( /*#__PURE__*/_react["default"].createElement(Ali));