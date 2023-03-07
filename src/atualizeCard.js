 'use strict';

 import React from 'react';
import ReactDOM from 'react-dom/client';

export default function AtualizeCard() {
    function handleKeyUp(element, elementTarget) {
        return elementTarget.innerHTML = element.value
    }

    const nome = document.getElementById('holder-name');
    const number = document.getElementById('card-number-form');
    const mes = document.getElementById('date-m');
    const ano = document.getElementById('date-y');
    const cvc = document.getElementById('cvc-form')

    const cardName = document.getElementById('card-name')
    const cardNumber = document.getElementById('card-number')
    const cardMes = document.getElementById('card-mm')
    const cardAno = document.getElementById('card-yy')
    const cardCvc = document.getElementById('card-cvc')

    

    
    nome.addEventListener('keyup', function() {
        handleKeyUp(nome, cardName);
        })
    number.addEventListener('keyup', function() {
        handleKeyUp(number, cardNumber);
        })
    mes.addEventListener('keyup', function() {
        handleKeyUp(mes, cardMes);
        })
    ano.addEventListener('keyup', function() {
        handleKeyUp(ano, cardAno);
        })
   cvc.addEventListener('keyup', function() {
        handleKeyUp(cvc, cardCvc);
        })

        return null
}
