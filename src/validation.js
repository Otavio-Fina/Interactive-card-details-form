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

    const [nomeValido, setNomeValido] = useState(undefined)
    const [numberValido, setNumberValido] = useState(undefined)
    const [mValido, setMValido] = useState(undefined)
    const [yValido, setYValido] = useState(undefined)
    const [cvcValido, setcvcValido] = useState(undefined)

    const [temLetra, setTemLetra] = useState(false)

    function validacaoLetra(value) {
        let abc = 'abcdefghijklmnopqrstuvwxyz!@#$%¨&*()-_=+{[}]ºª§^~<>,.;:?/°\|"+-*'
        let valueLower = value.toLowerCase()
        if (!temLetra) {      //prevents a infinite loop
            for (let x of abc ) {
                if ( valueLower[valueLower.length - 1] == x ) {
                    setTemLetra(() => true);
                    var letraLocalizada = valueLower[valueLower.length - 1]
                break;}
            }
        } else {
            for (let y of value) {if ( y == letraLocalizada) {
                setTemLetra(() => true)
                break
            } else {
                setTemLetra(() => false)
            }}
        }  
    return {temLetra}

    }

    function validacaoNome(element, stateChanger) {
        if (element.value == '') {stateChanger(false)
            nome.style.border= '2px solid red'} else {stateChanger(true)
                nome.style.border= ''}
        return null
    }

    function validacaoNumber(element, stateChanger) {
        let valorInvalido = validacaoLetra(element.value)
        if (element.value == '' || element.value.length < 16 || valorInvalido == true) {stateChanger(false)
            number.style.border= '2px solid red'} else {stateChanger(true)
                number.style.border= ''}
        return null
    }

    function validacaoM(element, stateChanger) {
        let valorInvalido = validacaoLetra(element.value)
        if (element.value == '' || element.value.length < 2 || valorInvalido == true) {stateChanger(false)
            mes.style.border= '2px solid red'} else {stateChanger(true)
                mes.style.border= ''}
        return null
    }

    function validacaoY(element, stateChanger) {
        let valorInvalido = validacaoLetra(element.value)
        if (element.value == '' || element.value.length < 2 || valorInvalido == true) {stateChanger(false)
            ano.style.border= '2px solid red'} else {stateChanger(true)
                ano.style.border= ''}
        return null
    }

    function validacaoCvc(element, stateChanger) {
        let valorInvalido = validacaoLetra(element.value)
        if (element.value == '' || element.value.length < 3 || valorInvalido == true) {stateChanger(false)
            cvc.style.border= '2px solid red'} else {stateChanger(true)
                cvc.style.border= ''}
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
    console.log('nome valido ==' + nomeValido + 'number valido ==' + numberValido + 'm valido ==' + mValido + 'y valido ==' + yValido + 'cvc valido ==' + cvcValido)

    if (nomeValido == undefined || numberValido == undefined || mValido == undefined || yValido == undefined || cvcValido == undefined) {
        submitBtn.className += ' disabled'
    } else if (nomeValido == false || numberValido == false || mValido == false || yValido == false || cvcValido == false) {
        submitBtn.className += ' disabled'
    } else { submitBtn.className = 'btn' 
    console.log('btn abled')
}


    return null
}