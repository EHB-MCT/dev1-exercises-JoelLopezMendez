"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


context.lineWidth = 4;

context.strokeStyle = "red";
Utils.drawLine(50, 50, 200, 200);
Utils.drawLine(200, 50, 50, 200);

context.lineWidth = 2;
context.strokeStyle = "black";
context.beginPath();
context.rect(50, 50, 150, 150);
context.stroke();




/* drawCross();
drawRect();

function drawRect() {
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(50, 50, 100, 100);
    context.stroke();
}

function drawCross() {
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 150);
    context.stroke();

    context.beginPath();
    context.moveTo(150, 50);
    context.lineTo(50, 150);
    context.stroke();
} */