"use strict";
import context from "../../Scripts/Context.js";

drawRectBlue();
drawCicle();

function drawRectBlue() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
}

function drawCicle() {
    let i = 0;

    while (i < 15) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.arc(200, 200, 10 + i * 15, 0, Math.PI * 2);
        context.stroke();

        i++;
    }
}