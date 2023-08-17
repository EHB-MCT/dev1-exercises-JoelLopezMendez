"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.strokeStyle = Utils.rgb(0, 150, 255);
context.rect(50, 50, 200, 200);
context.stroke();

let i = 0;

while (i < 10) {
    context.fillStyle = Utils.rgb(255 - i * 30, 255 - i * 30, 255 - i * 30);
    Utils.fillEllipse(150, 150, 10 + i * 10, 100 - i * 10);
    Utils.strokeEllipse(150, 150, 10 + i * 10, 100 - i * 10);

    i++;
}


/* drawStrokeRect();
drawEllipse();

function drawStrokeRect() {
    context.strokeRect(50, 50, 300, 300);
}

function drawEllipse() {
    let i = 0;

    while (i <= 5) {
        context.fillStyle = utils.rgb(255 - i * 50, 255 - i * 50, 255 - i * 50);
        // utils.fillAndStrokeEllipse(200, 200, 10 + i * 28, 150 - i * 28);

        context.beginPath();
        context.ellipse(200, 200, 10 + i * 28, 150 - i * 28, 0, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        i++;
    }
} */