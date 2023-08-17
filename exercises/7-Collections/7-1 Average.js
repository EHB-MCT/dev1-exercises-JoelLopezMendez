"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

/* let numbers = [];

setup();
calculateAverage();

function setup() {
    for (let i = 0; i < 200; i++) {
        numbers[i] = Utils.randomNumber(0, 100);
        console.log(i + " G " + numbers[i]);

        calculateAverage(numbers[i]);
    }
}

function calculateAverage(getal) {
    for (let j = 0; j < numbers.length; j++) {
        // console.log(numbers.length);
        console.log(getal / numbers.length);
    }
} */

let cijfers = [];

cijfer();
calculateAverage();

function cijfer() {
    for (let i = 0; i < 200; i++) {
        let r = Utils.randomNumber(0, 100);
        // console.log(r);
        cijfers[i] = r;
        // console.log(cijfers[i]);

        calculateAverage(cijfers[i]);
    }
}

function calculateAverage(lista) {
    console.log(lista);
    for (let i = 0; i < lista; i++) {
        console.log("lista " + i / 50);
    }
}


// Setup();

// function Setup() {
//     let numbers = [];

//     for (let i = 0; i < 1000; i++) {
//         numbers[i] = Utils.randomNumber(0, 100);
//         //console.log(numbers[i]);
//     }
//     console.log(calculateAverage(numbers));
// }

// function calculateAverage(listOfNumbers) {
//     let sum = 0;

//     for (let i = 0; i < listOfNumbers.length; i++) {
//         sum += listOfNumbers[i];
//     }
//     console.log(sum);
//     return sum / listOfNumbers.length;
// }