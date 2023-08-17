"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);


context.strokeStyle = "white";

let i = 0;
while (i < 20) {
    Utils.drawLine(50 + i * 10, 50, 250 - i * 10, 250);
    Utils.drawLine(50, 60 + i * 10, 250, 240 - i * 10),
        i++;
}

/* drawRectBlue();
drawLine();

function drawRectBlue() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 200, 200);
    context.fill();
}

function drawLine() {
    let i = 0;

    context.strokeStyle = "red";
    while (i <= 40) {
        utils.drawLine(50 + i * 5, 50, 250 - i * 5, 250);

        utils.drawLine(250, 250 - i * 5, 50, 50 + i * 5);
        i++;
    }
} */