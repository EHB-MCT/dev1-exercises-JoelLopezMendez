"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);


context.strokeStyle = "white";
for (let i = 0; i < 6; i++) {
    Utils.drawLine(75, 75 + i * 30, 225, 75 + i * 30);
}

/* let i = 0;

drawRectBlue();
drawLine();

function drawRectBlue() {
    context.fillStyle = "#0f7bff";
    context.fillRect(50, 50, 200, 200);
}

function drawLine() {
    while (i < 10) {
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(60, 60 + i * 20);
        context.lineTo(245, 60 + i * 20);
        context.stroke();
        i++;
    }
} */