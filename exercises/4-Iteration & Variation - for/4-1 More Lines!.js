"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = 600;
let heigh = 300;

context.fillStyle = "orange";
context.fillRect(0, 0, width, heigh);

context.strokeStyle = "white";

for (let i = 0; i < 60; i++) {
    Utils.drawLine(0 + i * 10, 0, width - i * 10, heigh);

    for (let i = 0; i < 30; i++) {
        Utils.drawLine(0, 5 + i * 10, width, (heigh - 5) - i * 10);
    }
}


/* let width = 600;
let heigh = 300;

drawRect();
drawLine();

function drawRect() {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, heigh);
}

function drawLine() {
    context.strokeStyle = "white";
    context.lineWidth = 2;

    for (let i = 0; i <= 60; i++) {
        Utils.drawLine(0, 0 + i * 5, width, heigh - i * 5);
    }

    for (let j = 0; j < 30; j++) {
        Utils.drawLine(0 + j * 20, 0, width - j * 20, heigh);
    }
} */