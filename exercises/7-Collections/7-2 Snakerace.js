"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let racers = 9;
let x = [];
let y = [];
let num = [];
let game = true;

drawSnails();
update();

function drawSnails() {
    for (let i = 0; i < racers; i++) {
        x[i] = 20;
        y[i] = 20 + i * 35;
        num[i] = i + 1;
    }
}

function update() {
    for (let i = 0; i < racers; i++) {
        if (x[i] >= width / 5 * 4) {
            game = false;
            console.log(x[i]);

            context.fillStyle = "darkred";
            context.font = "bold " + 20 + "pt Arial";
            context.fillText("Snail " + num[i] + " has won!!", width / 7, y[i] + 5);
            context.fillText(x[i] + "Won the race");
        }
    }

    if (game == true) {
        drawRoad();
        for (let i = 0; i < racers; i++) {
            // console.log(x[i]);
            drawSnail(x[i], y[i], 40, num[i]);
            x[i] += Utils.randomNumber(1, 3);
        }
        requestAnimationFrame(update);
    }

    context.strokeStyle = "red";
    context.lineWidth = 3;
    Utils.drawLine(width / 5 * 4, 0, width / 5 * 4, height);
}

function drawRoad() {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < racers; i++) {
        context.fillStyle = "#A3A3A3";
        context.fillRect(0, 0 + i * 70, width, height / 9);
    }
}




/* let xPos = [];
let total = 10;
let space = height / total;
let activeRace = true;

setup();
draw();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
    for (let i = 0; i < total; i++) {
        xPos[i] = 0;
    }
}

function draw() {
    if (activeRace) {
        for (let i = 0; i < xPos.length; i++) {
            if (xPos[i] >= width - space * 2 / 3) {
                activeRace = false;
                context.fillStyle = "darkred";
                context.font = "bold " + 50 + "pt Arial";
                context.fillText("Snail " + (i + 1) + " has won!!", width / 2, height / 2);
                break;
            }
            if (i % 2 == 0) {
                context.fillStyle = "gray";
            } else {
                context.fillStyle = "lightgray";
            }
            context.fillRect(0, i * space, width, space);
            drawSnail(xPos[i], space / 2 + i * space, space, i + 1);
            xPos[i] += Utils.randomNumber(0, 5);
        }
        requestAnimationFrame(draw);
    }
    // drawRace();
} */

// function drawRace() {
//     context.fillStyle = "#A3A3A3";
//     context.fillRect(0, 0, width, height);

//     for (let i = 0; i < 5; i++) {
//         context.fillStyle = "#ffffff";
//         context.fillRect(0, 0 + i * 70, width, height / 9);
//     }
// }

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