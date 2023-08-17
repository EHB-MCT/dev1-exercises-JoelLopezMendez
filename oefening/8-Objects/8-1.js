"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let wdth = window.innerWidth;
let height = window.innerHeight;


// let names = ["Peters","rAYAB","jole","gshs","Robert"];

/*let names = [];

names[0] = "Peters";
names[1] = "rAYAB";
names[2] = "jole";
names[3] = "gshs";

 for (let i = 0; i < names.length; i++) {
    console.log("Persons " + names[i]);
}

let r = Utils.randomNumber(0, names.length - 1);

console.log(names[r] + " won the prise");

 */

let numbers = [];

numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);
numbers.push(5);
numbers.push(6);

numbers.shift();
numbers.pop();
numbers.shift();


// Tengo que poner numbers.length si no no se borra el dibujo
for (let i = 0; i < numbers.length; i++) {
    drawSnail(100 + i * 100, 100, 50, numbers[i]);
}


let s = '';
let list = [];
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));

console.log(s += list.shift());
console.log(s += list[0]);
console.log(s += list.pop());
console.log(s += list.pop());



let Arraysnails = [];
setup();
update();

function setup() {
    for (let i = 0; i < 100; i++) {
        let ObjectSnail = {
            x: Utils.randomNumber(0, wdth),
            y: Utils.randomNumber(0, height),
            size: Utils.randomNumber(5, 50),
            numero: Utils.randomNumber(0, Arraysnails.length - 1),
            move: function () {
                drawSnail(ObjectSnail.x, ObjectSnail.y, ObjectSnail.size, ObjectSnail.numero);
                this.x += Utils.randomNumber(-2, 2);
                this.y += Utils.randomNumber(-2, 2);
            }
        };
        Arraysnails.push(ObjectSnail);
    }
}

function update() {
    context.fillStyle = "red";
    context.fillRect(0, 0, wdth, height);
    for (let i = 0; i < Arraysnails.length; i++) {
        Arraysnails[i].move();
    }
    requestAnimationFrame(update);
}

function drawSnail(x, y, sizeY, number) {
    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}