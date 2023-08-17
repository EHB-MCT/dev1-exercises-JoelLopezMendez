"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

// drawRec(50, 300);
// drawRec(75, 250);
// drawRec(100, 200);
// drawRec(125, 150);
// drawRec(150, 100);
// drawRec(175, 50);

drawRec();

function drawRec() {
    let pos = 50;
    let size = 300;

    for (let i = 0; i < 6; i++) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        let color = "rgb(" + r + ", " + g + ", " + b + ")";
        context.fillStyle = color;
        context.fillRect(pos + i * 25, pos + i * 25, size - i * 50, size - i * 50);
    }
}


/* drawRec(50, 50, 500, 500);
drawRec(75, 75, 450, 450);
drawRec(100, 100, 400, 400);
drawRec(125, 125, 350, 350);
drawRec(150, 150, 300, 300);

function drawRec(x, y, width, height) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = "rgb(" + r + ", " + g + ", " + b + ")";

    context.fillStyle = color;
    context.fillRect(x, y, width, height);
} */