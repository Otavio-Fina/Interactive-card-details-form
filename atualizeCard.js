import React from 'react';
 

export default function atualizeCard() {
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

    

    
    nome.addEventListener('keydown', function() {
        handleKeyUp(nome, cardName);
        })
    number.addEventListener('keydown', function() {
        handleKeyUp(number, cardNumber);
        })
    mes.addEventListener('keydown', function() {
        handleKeyUp(mes, cardMes);
        })
    ano.addEventListener('keydown', function() {
        handleKeyUp(ano, cardAno);
        })
   cvc.addEventListener('keydown', function() {
        handleKeyUp(cvc, cardCvc);
        })
    document.getElementsByTagName('main').style.background = 'red'
}
