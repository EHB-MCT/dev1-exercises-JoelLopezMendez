"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


context.strokeStyle = "red";
context.strokeRect(50, 50, 150, 150);

context.strokeRect(200, 200, 150, 150);

context.beginPath();
context.rect(125, 125, 150, 150);
context.stroke();
context.fill();

context.strokeRect(275, 75, 50, 50);

context.fillRect(325, 50, 25, 25);

context.strokeRect(75, 275, 50, 50);

context.fillRect(50, 325, 25, 25);


// Utils.drawLine(50, 50, 350, 350);


/* drawStrokrRect();
drawBigRect();

function drawBigRect() {
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(150, 150, 150, 150);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(360, 60, 30, 30);
    context.rect(60, 360, 30, 30);
    context.fill();
}

function drawStrokrRect() {
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(75, 75, 150, 150);
    context.rect(225, 225, 150, 150);

    context.rect(300, 90, 60, 60);
    context.rect(90, 300, 60, 60);
    context.stroke();
} */