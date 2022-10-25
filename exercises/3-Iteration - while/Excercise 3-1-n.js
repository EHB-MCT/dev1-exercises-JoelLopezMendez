"use strict";
import context from "../../Script/Context.js";

drawRect();

function drawRect() {
    let i = 0;

    while (i < 5) {
        context.fillStyle = "black";
        context.fillRect(50 + i * 75, 50, 75, 300);

        i++;
    }
}

let size = 500;

drawRec(50, 50, size);

function drawRec(x, y, size) {
    let i = 0;

    let r = Math.floor(255);
    let g = Math.floor(255);
    let b = Math.floor(1 + i * 20);
    let color = "rgb(" + r + "," + g + "," + b + ")";

    context.fillStyle = color;
    context.fillRect(x, y, size, size);

    i++;
}