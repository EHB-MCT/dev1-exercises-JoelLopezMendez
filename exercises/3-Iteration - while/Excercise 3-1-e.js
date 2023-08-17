"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);


context.strokeStyle = "white";
for (let i = 0; i < 6; i++) {
    Utils.drawLine(50 + i * 20, 150 + i * 20, 150 + i * 20, 50 + i * 20);
    Utils.drawLine(50 + i * 20, 150 - i * 20, 150 + i * 20, 250 - i * 20);
}

/* drawRectRed();
drawLine();

function drawRectRed() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 200, 200);
    context.fill();
}

function drawLine() {
    let i = 0;

    while (i <= 5) {
        utils.drawLine(50 + i * 20, 150 + i * 20, 150 + i * 20, 50 + i * 20);
        utils.drawLine(50 + i * 20, 150 - i * 20, 150 + i * 20, 250 - i * 20);
        i++;
    }
} */