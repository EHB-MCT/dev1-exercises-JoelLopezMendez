"use strict";
import context from "../../Script/Context.js";

drawRectBlue();
drawLine();

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
        context.moveTo(50, 50);
        context.lineTo(350, 50 + i * 10);
        context.stroke();

        context.moveTo(50, 50);
        context.lineTo(350 - i * 10, 350);
        context.stroke();

        i++;
    }
}