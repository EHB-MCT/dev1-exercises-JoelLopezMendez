"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.strokeStyle = Utils.rgb(0, 150, 255);
context.rect(50, 50, 200, 200);
context.stroke();

let i = 0;

while (i < 10) {
    Utils.fillAndStrokeCircle(150, 150, 100 - i * 10);
    context.stroke();
    i++;
}

/* drawStrokeRect();
drawCircle();

function drawStrokeRect() {

    context.strokeRect(50, 50, 300, 300);
}

function drawCircle() {
    let i = 0;

    while (i < 10) {
        context.fillStyle = "red";
        utils.fillAndStrokeCircle(200, 200, 150 - i * 20);
        i++;

    }
} */