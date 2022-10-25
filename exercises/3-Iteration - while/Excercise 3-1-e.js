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
        context.moveTo(50 + i * 25, 200 + i * 30);
        context.lineTo(225 + i * 25, 50 + i * 30);
        context.stroke();

        i++;
    }
}

function drawLine1() {
    let i = 0;

    while (i <= 5) {
        context.lineWidth = "2";
        context.beginPath();
        context.moveTo(225 - i * 35, 50 + i * 30);
        context.lineTo(350 - i * 35, 200 + i * 30);
        context.stroke();

        i++;
    }
}