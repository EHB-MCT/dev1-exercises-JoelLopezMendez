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

    while (i <= 5) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.moveTo(50 + i * 20, 200 + i * 30);
        context.lineTo(250 + i * 20, 50 + i * 30);
        context.stroke();

        i++;
    }
}