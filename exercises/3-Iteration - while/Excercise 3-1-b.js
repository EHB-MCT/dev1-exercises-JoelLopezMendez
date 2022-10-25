"use strict";
import context from "../../Script/Context.js";

drawRectRed();
drawLine();
drawLine1();


function drawRectRed() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
}



function drawLine() {
    let i = 0;

    while (i <= 5) {
        context.strokeStyle = "white";
        context.moveTo(75, 75 + i * 50);
        context.lineTo(325, 75 + i * 50);
        context.stroke();

        i++;
    }
}

function drawLine1() {
    let i = 0;

    while (i <= 5) {
        context.strokeStyle = "white";
        context.moveTo(75 + i * 50, 75);
        context.lineTo(75 + i * 50, 325);
        context.stroke();

        i++;
    }
}