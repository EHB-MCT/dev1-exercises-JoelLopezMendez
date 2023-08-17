"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


context.fillStyle = Utils.rgb(255, 128, 101);
context.fillRect(50, 50, 250, 300);

context.fillStyle = Utils.rgb(255, 255, 101);
Utils.fillCircle(175, 250, 75);

context.fillStyle = "blue";
context.fillRect(50, 250, 250, 100);


/* drawRect();
drawArct();
drawWater();

function drawRect() {
    context.fillStyle = "orange";
    context.fillRect(25, 25, 300, 300);
}

function drawArct() {

    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(175, 225, 100, 0, Math.PI * 2);
    context.fill();
}

function drawWater() {
    context.fillStyle = "blue";
    context.fillRect(25, 225, 300, 100);
} */