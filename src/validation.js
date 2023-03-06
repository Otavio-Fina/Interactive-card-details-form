import { invert, set, values } from "lodash";
import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Validacao() {
    
    const nome = document.getElementById('holder-name');
    const number = document.getElementById('card-number-form');
    const mes = document.getElementById('date-m');
    const ano = document.getElementById('date-y');
    const cvc = document.getElementById('cvc-form');
    const submitBtn = document.getElementById("submit-btn");

    const [nomeValido, setNomeValido] = useState(null)
    const [numberValido, setNumberValido] = useState(null)
    const [mValido, setMValido] = useState(null)
    const [yValido, setYValido] = useState(null)
    const [cvcValido, setcvcValido] = useState(null)


    function validacaoLetra(value) {
        const[temLetra, setTemLetra] = useState(false)
        let abc = 'abcdefghijklmnopqrstuvwxyz'
        if (temLetra == false) {      //prevents a infinite loop
        for ( x of abc ) {
            for ( y of value ) { if ( y == x ) {setTemLetra(current => !current)
                 break}}
        }
    }   
    return {temLetra}

    }

    function validacaoNome(element, stateChanger) {
        if (element.value == '') {stateChanger(false)} else {stateChanger(true)}
        return null
    }

    function validacaoNumber(element, stateChanger) {
        let valorInvalido = validacaoLetra(element.value)
        if (element.value == '' || element.value.lenght < 16 || valorInvalido != false) {stateChanger(false)} else {stateChanger(true)}
        return null
    }

    function validacaoM(element, stateChanger) {
        let valorInvalido = validacaoLetra(element.value)
        if (element.value == '' || element.value.lenght < 2 || valorInvalido != false) {stateChanger(false)} else {stateChanger(true)}
        return null
    }

    function validacaoY(element, stateChanger) {
        let valorInvalido = validacaoLetra(element.value)
        if (element.value == '' || element.value.lenght < 2 || valorInvalido != false) {stateChanger(false)} else {stateChanger(true)}
        return null
    }

    function validacaoCvc(element, stateChanger) {
        let valorInvalido = validacaoLetra(element.value)
        if (element.value == '' || element.value.lenght < 3 || valorInvalido != false) {stateChanger(false)} else {stateChanger(true)}
        return null
    }

    nome.addEventListener('keyup', function() {
        validacaoNome(nome, setNomeValido);
        })
    number.addEventListener('keyup', function() {
        validacaoNumber(number, setNumberValido);
        })
    mes.addEventListener('keyup', function() {
        validacaoM(mes, setMValido);
        })
    ano.addEventListener('keyup', function() {
        validacaoY(ano, setYValido);
        })
   cvc.addEventListener('keyup', function() {
        validacaoCvc(cvc, setcvcValido);
        })

    if (nomeValido == null || numberValido == null || mValido == null || yValido == null || cvcValido == null) {
        submitBtn.disable == true
    } else if (nomeValido == false || numberValido == false || mValido == false || yValido == false || cvcValido == false) {
        submitBtn.disable == true
    } else { submitBtn.disable == false }

    return null
}