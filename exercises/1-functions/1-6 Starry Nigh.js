"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


context.lineWidth = 4;
context.strokeStyle = "white";

// context.fillStyle = "white";
context.fillStyle = "orange";
context.beginPath();
context.rect(25, 25, 300, 300);
context.fill();


// context.fillStyle = "orange";
// context.beginPath();
// context.ellipse(275, 265, 80, 80, 40, 0, Math.PI);
// context.ellipse(265, 75, 80, 80, 95, 0, Math.PI);
// context.ellipse(80, 80, 80, 80, -Math.PI / 4, 0, Math.PI);
// context.ellipse(75, 265, 80, 80, -40, 0, Math.PI);
// context.fill();

for (let i = 0; i < 3; i++) {
    Utils.drawLine(75 - i * 25, 25, 325, 275 + i * 25);
}

for (let i = 0; i < 2; i++) {
    Utils.drawLine(25, 50 + i * 25, 300 - i * 25, 325)
}

for (let i = 0; i < 3; i++) {
    Utils.drawLine(325 - i * 25, 25, 25, 325 - i * 25);
}

for (let i = 0; i < 2; i++) {
    Utils.drawLine(325, 50 + i * 25, 50 + i * 25, 325);
}



for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 2; i++) {
        context.fillStyle = "white";

        context.beginPath();
        context.arc(25 + i * 300, 25 + j * 300, 150, 0, Math.PI * 2);
        context.fill();
    }
}

context.strokeStyle = "orange";
context.beginPath();
context.rect(25, 25, 300, 300);
context.stroke();


context.fillStyle = "orange";
context.beginPath();
context.moveTo(175, 150);
context.lineTo(200, 175);
context.lineTo(175, 200);
context.lineTo(150, 175);
context.lineTo(175, 150);
context.fill();

context.textAlign = "center";
context.font = "normal 30pt Arial";
context.fillText("STARRY NIGHT", 175, 370);


// context.beginPath();
// context.arc(350, 25, 175, 0, Math.PI * 2);
// context.stroke();


/* drawRec();
drawLine();
drawLine1();
drawEllipse();
drawRec1();

function drawRec() {
    context.strokeStyle = "#ff5500";
    context.lineWidth = "6";
    context.beginPath();
    context.rect(50, 50, 400, 400);
    context.stroke();
}

function drawRec1() {
    context.fillStyle = "#ff5500";
    context.lineWidth = "6";
    context.beginPath();
    context.moveTo(250, 200);
    context.lineTo(200, 250);
    context.lineTo(250, 300);
    context.lineTo(300, 250);
    context.lineTo(250, 200);
    context.fill();
}

function drawLine() {
    context.fillStyle = "#FFFEFD";
    context.lineWidth = "5";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(450, 450);
    context.stroke();

    context.moveTo(100, 50);
    context.lineTo(450, 400);
    context.stroke();

    context.moveTo(150, 50);
    context.lineTo(450, 350);
    context.stroke();

    context.moveTo(50, 100);
    context.lineTo(400, 450);
    context.stroke();

    context.moveTo(50, 150);
    context.lineTo(350, 450);
    context.stroke();
}

function drawLine1() {
    context.lineWidth = "5";
    context.beginPath();
    context.moveTo(450, 50);
    context.lineTo(50, 450);
    context.stroke();

    context.moveTo(400, 50);
    context.lineTo(50, 400);
    context.stroke();

    context.moveTo(350, 50);
    context.lineTo(50, 350);
    context.stroke();

    context.moveTo(450, 100);
    context.lineTo(100, 450);
    context.stroke();

    context.moveTo(450, 150);
    context.lineTo(150, 450);
    context.stroke();
}

function drawEllipse() {

} */