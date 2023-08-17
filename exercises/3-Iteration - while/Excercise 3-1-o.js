"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.strokeStyle = Utils.rgb(0, 150, 255);
context.rect(50, 50, 200, 200);
context.stroke();

let i = 0;

while (i < 200) {
    context.strokeStyle = Utils.rgb(0 + i * 1, 0 + i * 1, 0 + i * 1);
    Utils.drawLine(50 + i * 1, 50, 50 + i * 1, 250);
    i++;
}


/* drawStrokeRect();
drawRect();

function drawStrokeRect() {

    context.strokeRect(50, 50, 300, 300);
}

function drawRect() {
    let i = 0;

    while (i <= 300) {

        context.strokeStyle = utils.rgb(250, 0 + i * 1, 0 + i * 1);
        utils.drawLine(i + 50, 50, i + 50, 350);

        i++;
    }
} */