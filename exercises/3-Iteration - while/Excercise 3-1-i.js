"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);


context.strokeStyle = "white";
for (let i = 0; i < 10; i++) {
    Utils.strokeCircle(150, 150, 10 + i * 10);
    for (let j = 0; j < 2; j++) {
        Utils.strokeCircle(50, 50 + j * 200, 10 + i * 10);
        Utils.strokeCircle(250, 50 + j * 200, 10 + i * 10);
    }
}

/* drawRectBlue();
drawCicle();

function drawRectBlue() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 200, 200);
    context.fill();
}

function drawCicle() {
    let i = 0;

    context.strokeStyle = "#ffffff";
    while (i < 10) {
        utils.strokeCircle(150, 150, 10 + i * 10);
        utils.strokeCircle(50, 50, 10 + i * 10);
        utils.strokeCircle(50, 250, 10 + i * 10);
        utils.strokeCircle(250, 50, 10 + i * 10);
        utils.strokeCircle(250, 250, 10 + i * 10);
        i++;
    }
} */