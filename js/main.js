"use strict";

//variable button-->para funcion listener
const button = document.querySelector('.js-button');

//variable para el inputNumber
const inputNumber = document.querySelector('.js-input-number');

//variables para añadir o quitar frases
const inputNumberStop = document.querySelector('.js-result-stop');
const inputNumberStopHigh = document.querySelector('.js-result-stop-high');
const inputNumberStopLow = document.querySelector('.js-result-stop-low');
const inputNumberGo = document.querySelector('.js-result-go');

//variable para el contador
const counter = document.querySelector('.js-counter');



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
    const inputNumberValue = parseInt(inputNumber.value);

    if (inputNumberValue < 1 || inputNumberValue > 100) {
        inputNumberStop.classList.remove('hidden');
        inputNumberStopHigh.classList.add('hidden');
        inputNumberStopLow.classList.add('hidden');
        inputNumberGo.classList.add('hidden');

    } else if (inputNumberValue === randomNumber) {
        inputNumberGo.classList.remove('hidden');
        inputNumberStop.classList.add('hidden');
        inputNumberStopHigh.classList.add('hidden');
        inputNumberStopLow.classList.add('hidden');

    } else if (inputNumberValue > randomNumber) {
        inputNumberStopHigh.classList.remove('hidden');
        inputNumberStopLow.classList.add('hidden');
        inputNumberGo.classList.add('hidden');
        inputNumberStop.classList.add('hidden');

    } else if (inputNumberValue < randomNumber) {
        inputNumberStopLow.classList.remove('hidden');
        inputNumberGo.classList.add('hidden');
        inputNumberStopHigh.classList.add('hidden');
        inputNumberStop.classList.add('hidden');

    }
};

/*lo declaro fuera porque dentro siempre lo igualaría a 0, y no se sumaría con las veces 
que repetimos el evento*/
let count = 0;

//funcion counter work
function inCounter() {
    console.log('incremeto' + count);
    count++;
    counter.innerHTML = count;
}




////funcion handle
function handleButton(event) {
    event.preventDefault();
    /*lo coloco para que pare el submit que envia por defecto a través de action*/
    comparateRandomNumber();
    inCounter();
};


////funcion listener
button.addEventListener('click', handleButton);


/*esto era para comparar como funciona
el submit y el click con el preventDefault

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('He ejecutado click');
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('He ejecutado submit')
});*/