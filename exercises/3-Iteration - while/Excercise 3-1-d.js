"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);


context.strokeStyle = "white";
for (let i = 0; i < 6; i++) {
    Utils.drawLine(50 + i * 20, 150 + i * 20, 150 + i * 20, 50 + i * 20);
}

/* drawRectRed();
drawLine();

function drawRectRed() {
    context.fillStyle = '#33A2FF';
    context.fillRect(50, 50, 200, 200);
}

function drawLine() {
    let i = 0;

    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    while (i <= 5) {
        utils.drawLine(50 + i * 20, 150 + i * 20, 150 + i * 20, 50 + i * 20);
        i++;
    }
} */