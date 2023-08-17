"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


context.fillStyle = Utils.rgb(255, 128, 101);
context.fillRect(50, 50, 250, 300);

context.fillStyle = Utils.rgb(255, 255, 101);
Utils.fillEllipse(175, 250, 100, 50);


context.fillStyle = Utils.rgb(0, 255, 255);
context.fillRect(50, 250, 250, 100);

/* drawRect();
drawEllipse();
drawWater();

function drawRect() {
    context.fillStyle = "orange";
    context.fillRect(25, 25, 300, 300);
}

function drawEllipse() {
    context.fillStyle = "yellow";
    context.beginPath();
    context.ellipse(175, 225, 100, 50, 0, 0, Math.PI * 2);
    context.fill();
}

function drawWater() {
    context.fillStyle = "blue";
    context.fillRect(25, 225, 300, 100);
} */