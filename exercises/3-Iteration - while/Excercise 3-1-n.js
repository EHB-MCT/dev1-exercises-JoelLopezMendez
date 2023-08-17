"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.strokeStyle = Utils.rgb(0, 150, 255);
context.rect(50, 50, 200, 200);
context.stroke();


context.strokeStyle = "white";
let i = 0;

while (i < 6) {
    context.fillStyle = Utils.rgb(0 + i * 36, 0 + i * 36, 0 + i * 36),
        context.fillRect(50 + i * 33, 50, 33, 200);
    i++;
}

/* drawStrokeRect();
drawRect();

function drawStrokeRect() {

    context.strokeRect(50, 50, 300, 300);
}

function drawRect() {
    let i = 0;

    while (i <= 5) {
        let colorStyle = utils.rgb(0 + i * 50, 0 + i * 50, 0 + i * 50);
        context.fillStyle = colorStyle;

        context.fillRect(50 + i * 50, 50, 50, 300);

        i++;
    }
} */