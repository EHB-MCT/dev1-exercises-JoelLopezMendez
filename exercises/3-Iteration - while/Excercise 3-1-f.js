"use strict";
import context from "../../Script/Context.js";

drawRectBlue();
drawRect();

function drawRectBlue() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
}

function drawRect() {
    let i = 0;

    while (i <= 7) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.rect(75 + i * 25, 75 + i * 25, 75, 75);
        context.stroke();

        i++;
    }
}