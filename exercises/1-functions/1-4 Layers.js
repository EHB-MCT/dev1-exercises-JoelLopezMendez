"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


context.lineWidth = 2;
context.strokeStyle = "black";
context.fillStyle = "lightblue";
context.beginPath();
context.rect(50, 50, 300, 300);

context.rect(50, 50, 250, 250);

context.rect(100, 50, 200, 200);

context.rect(150, 100, 150, 150);

context.rect(150, 150, 100, 100);
context.fill();
context.stroke();


// Utils.drawLine(50, 50, 350, 350);

/* drawRect();
drawLine();

function drawRect() {
    context.fillStyle = "#33DDFF";
    context.strokeStyle = "black";
    context.lineWidth = 2;

    context.beginPath();
    context.rect(25, 25, 300, 300);
    context.fill();
    context.stroke();
}

function drawLine() {
    context.beginPath();
    context.rect(25, 25, 225, 225);
    context.stroke();

    context.beginPath();
    context.moveTo(75, 25);
    context.lineTo(75, 200);
    context.lineTo(250, 200);
    context.stroke();

    context.beginPath();
    context.rect(125, 125, 75, 75);
    context.stroke();

    context.beginPath();
    context.moveTo(250, 100);
    context.lineTo(125, 100);
    context.lineTo(125, 200);
    context.stroke();
} */