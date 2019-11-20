"use strict";

//variable button-->para funcion listener
const button = document.querySelector('.js-button');

//variable para el inputNumber
const inputNumber = document.querySelector('.js-input-number');

//variables para añadir o quitar frases
const inputNumberStopHigh = document.querySelector('.js-result-stop-high');
const inputNumberStopLow = document.querySelector('.js-result-stop-low');
const inputNumberGo = document.querySelector('.js-result-go');

//funcion para generar el numero aleatorio
function getRandomNumber(max) {
    const result = Math.ceil(Math.random() * max);
    return result;
};

const randomNumber = getRandomNumber(100);
console.log(`Me genera un numero aleatorio ${randomNumber}`);



//funcion para comprobar si el numero es igual al que ponemos
//en el input
function comparateRandomNumber() {
    const inputNumberValue = inputNumber.value;


};





////funcion handle
function handleButton() {

};



////funcion listener
button.addEventListener('click', handleButton);