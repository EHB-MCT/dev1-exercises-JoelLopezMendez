"use strict";
import context from "../../Script/Context.js";

drawRectBlue();
drawLine();
drawLine1();

function drawRectBlue() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
}



function drawLine() {
    let i = 0;

    while (i <= 30) {
        context.strokeStyle = "white";
        context.moveTo(50 + i * 10, 50);
        context.lineTo(350 - i * 10, 350);
        context.stroke();

        i++;
    }
}

function drawLine1() {
    let i = 0;

    while (i <= 30) {
        context.strokeStyle = "white";
        context.moveTo(50, 50 + i * 10);
        context.lineTo(350, 350 - i * 10);
        context.stroke();

        i++;
    }
}