"use strict";
import context from "../../Script/Context.js";

drawRectRed();
drawLine();


function drawRectRed() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
}



function drawLine() {
    let i = 0;

    while (i <= 10) {
        context.strokeStyle = "white";
        context.moveTo(75, 75 + i * 25);
        context.lineTo(325, 75 + i * 25);
        context.stroke();

        i++;
    }
}