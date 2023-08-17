"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);


context.strokeStyle = "white";
for (let i = 0; i < 6; i++) {
    context.rect(75 + i * 20, 75 + i * 20, 50, 50);
    context.stroke();
}

/* drawRectBlue();
drawRect();

function drawRectBlue() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 200, 200);
    context.fill();
}

function drawRect() {
    let i = 0;

    context.strokeStyle = "#ffffff";
    while (i <= 6) {
        context.strokeRect(60 + i * 18, 60 + i * 18, 70, 70);

        i++;
    }
} */