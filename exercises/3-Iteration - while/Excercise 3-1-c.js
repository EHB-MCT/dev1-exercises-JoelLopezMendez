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
        context.lineWidth = "2";
        context.beginPath();
        context.moveTo(50, 150 + i * 20);
        context.lineTo(350, 150 + i * 20);
        context.stroke();

        i++;
    }
}

function drawLine1() {
    let i = 0;

    while (i <= 5) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.moveTo(150 + i * 20, 50);
        context.lineTo(150 + i * 20, 350);
        context.stroke();

        i++;
    }
}