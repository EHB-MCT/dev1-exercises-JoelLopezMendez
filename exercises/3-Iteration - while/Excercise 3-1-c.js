"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.fillStyle = Utils.rgb(0, 150, 255);
context.fillRect(50, 50, 200, 200);

context.strokeStyle = "white";
for (let i = 0; i < 6; i++) {
    Utils.drawLine(115 + i * 15, 50, 115 + i * 15, 250);
    Utils.drawLine(50, 115 + i * 15, 250, 115 + i * 15);
}


/* drawRectBlue();
drawLine();


function drawRectBlue() {
    context.fillStyle = '#33A2FF';
    context.fillRect(50, 50, 200, 200);
}

function drawLine() {
    let i = 0;

    context.strokeStyle = "#ffffff";
    while (i < 5) {
        utils.drawLine(50, 120 + i * 15, 250, 120 + i * 15);
        utils.drawLine(120 + i * 15, 50, 120 + i * 15, 250);
        i++;
    }
} */