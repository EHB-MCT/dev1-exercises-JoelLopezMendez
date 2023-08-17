"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);


context.strokeStyle = "white";

let i = 0;
while (i < 20) {
    Utils.drawLine(50 + i * 10, 50, 250 - i * 10, 250);
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

    context.strokeStyle = "#00ff5f";
    while (i <= 20) {
        utils.drawLine(50 + i * 10, 50, 250 - i * 10, 250);

        i++;
    }
} */