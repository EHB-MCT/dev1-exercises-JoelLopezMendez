"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x1 = width / 2;
let y1 = height - 105;
let xCar = 0;
let speedCar = 5;
let size = 200;
let xCar1 = width - size;
let speedCar1 = 5;



let x = width / 2;
let y = height - 75;

update();


function update() {
    drawRoad();
    moveCars();
    drawCar(xCar, (height / 6) + 8);
    drawCar(xCar1, (height / 6) * 4 + 8);

    // window.onkeydown = player;

    requestAnimationFrame(update);
}


function moveCars() {
    if (xCar > width - size) {
        speedCar *= -1;
    } else if (xCar < 0) {
        speedCar *= -1;
    }

    if (xCar1 < 0) {
        speedCar1 *= -1;
    }
    if (xCar1 > width - size) {
        speedCar1 *= -1;
    }

    xCar1 += speedCar1;
    xCar += speedCar;
    console.log(speedCar);
}





context.fillStyle = "green";
context.fillRect(x, y, 100, 100);

/**
 * 
 * @param {KeyboardEvent} eventData 
 */
function player(eventData) {
    let key = eventData.code;
    console.log(eventData.code);

    if (key == "ArrowUp") {
        y1 -= 10;
    } else if (key == "ArrowDown") {
        y1 += 10;
    }

    drawRoad();
    context.fillStyle = "green";
    context.fillRect(x1, y1, 100, 100);
}

function drawCar(x, y) {
    context.fillStyle = "red";
    context.fillRect(x, y, 200, 100);
    context.fillStyle = "lightblue";
    context.fillRect(x + 10, y + 10, 30, 80);
    context.fillRect(x + 130, y + 10, 60, 80);
}

function drawRoad() {
    context.fillStyle = "#A8FF81";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "#767676";
    context.fillRect(0, height / 6, width, (height / 6) * 4);
    context.fillStyle = "#B7B7B7";
    context.fillRect(0, height / 3, width, height / 3);
}






/* let xCar1 = 0;
let speedCar1 = 5;

let x = width / 2;
let y = height - 75;

main();

function main() {
    moveCars();
    drawCar();
    drawRoad();
    requestAnimationFrame(main);
}


function moveCars() {
    console.log(speedCar1);
    if (xCar1 > width - 200) {
        speedCar1 *= -1;
    } else if (xCar1 < 0) {
        speedCar1 *= -1;
    }
    xCar1 += speedCar1;
}

function drawCar(x, y) {
    context.fillStyle = "red";
    context.fillRect(x, y, 200, 100);
    context.fillStyle = "lightblue";
    context.fillRect(x + 10, y + 10, 30, 80);
    context.fillRect(x + 130, y + 10, 60, 80);
}

function drawRoad() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 3; i++) {
        if (i % 2 == 0) {
            context.fillStyle = "gray";
        } else {
            context.fillStyle = "lightGray";
        }
        context.fillRect(0, 200 + i * 150, width, 150);
    }
} */