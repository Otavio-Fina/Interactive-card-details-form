"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = atualizeCard;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
'use strict';
function atualizeCard() {
  function handleKeyUp(element, elementTarget) {
    return elementTarget.innerHTML = element.value;
  }
  var nome = document.getElementById('holder-name');
  var number = document.getElementById('card-number-form');
  var mes = document.getElementById('date-m');
  var ano = document.getElementById('date-y');
  var cvc = document.getElementById('cvc-form');
  var cardName = document.getElementById('card-name');
  var cardNumber = document.getElementById('card-number');
  var cardMes = document.getElementById('card-mm');
  var cardAno = document.getElementById('card-yy');
  var cardCvc = document.getElementById('card-cvc');
  nome.addEventListener('keydown', function () {
    handleKeyUp(nome, cardName);
  });
  number.addEventListener('keydown', function () {
    handleKeyUp(number, cardNumber);
  });
  mes.addEventListener('keydown', function () {
    handleKeyUp(mes, cardMes);
  });
  ano.addEventListener('keydown', function () {
    handleKeyUp(ano, cardAno);
  });
  cvc.addEventListener('keydown', function () {
    handleKeyUp(cvc, cardCvc);
  });
  document.getElementsByTagName('main').style.background = 'red';
}