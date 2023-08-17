"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "darkblue";
context.fillRect(0, 0, width, height);

context.fillStyle = "lightblue";
context.fillRect(0, height / 2.5 * 2, width, height / 4);

context.fillStyle = "gray";
context.fillRect(width / 5, 0, width / 2, height);

context.fillStyle = "red";
context.fillRect(0, height / 8, width, height / 2);


/* drawRectCeleste();
drawRectBlue();
drawRectGrijs();
drawRectRed();

function drawRectGrijs() {
    context.fillStyle = "#eadfdc";
    context.fillRect(width / 4, 0, width / 2, height);
}

function drawRectRed() {
    context.fillStyle = "#d33715";
    context.fillRect(0, height / 9, width, height / 2);
}

function drawRectCeleste() {
    context.fillStyle = "#00fff9";
    context.fillRect(0, 0, width, height);
}

function drawRectBlue() {

    context.fillStyle = "#0527d3";
    context.fillRect(0, 0 - height / 5, width, height);
} */