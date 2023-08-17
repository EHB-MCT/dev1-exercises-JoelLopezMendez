"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);


context.strokeStyle = "white";
for (let i = 0; i <= 6; i++) {
    Utils.drawLine(75, 75 + i * 25, 225, 75 + i * 25);
    Utils.drawLine(75 + i * 25, 75, 75 + i * 25, 225);
}

/* let i = 0;
let j = 0;

drawRectBlue();
drawLine();
drawLine1();

function drawRectBlue() {
    context.fillStyle = "#0f7bff";
    context.fillRect(50, 50, 200, 200);
}

function drawLine() {
    context.strokeStyle = "white";
    context.lineWidth = 2;
    while (i < 6) {
        utils.drawLine(60, 60 + i * 35, 240, 60 + i * 35);
        i++;
    }
}

function drawLine1() {
    context.lineWidth = 2;

    while (j < 12) {
        utils.drawLine(60 + j * 36, 60, 60 + j * 36, 235);
        j++;
    }
} */