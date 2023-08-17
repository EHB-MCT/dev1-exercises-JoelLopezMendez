"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 25;
let space = 25;
let x = 50;
let y = 50;

context.beginPath();
context.moveTo(margin, y);
context.lineTo(width - margin, y);
context.lineTo(margin, y + space);
context.lineTo(width - margin, y + space);
context.lineTo(margin, y + space * 2);
context.lineTo(width - margin, y + space * 2);
context.lineTo(margin, y + space * 3);
context.lineTo(width - margin, y + space * 3);
context.lineTo(margin, y + space * 4);
context.lineTo(width - margin, y + space * 4);
context.lineTo(margin, y + space * 5);
context.lineTo(width - margin, y + space * 5);
context.lineTo(margin, y + space * 6);
context.lineTo(width - margin, y + space * 6);
context.lineTo(margin, y);
context.stroke();

/* let y = 100; //Spatie
let margin = 300;

drawLine();

function drawLine() {
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(margin, y);
    context.lineTo(width - margin, y);
    context.lineTo(margin, y * 2);
    context.lineTo(width - margin, y * 2);
    context.lineTo(margin, y * 3);
    context.lineTo(width - margin, y * 3);
    context.lineTo(margin, y * 4);
    context.lineTo(width - margin, y * 4);
    context.lineTo(margin, y);

    context.stroke();
} */