"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


context.fillStyle = Utils.rgb(255, 177, 19);
context.fillRect(0, 0, width, height);

context.fillStyle = Utils.rgb(255, 67, 19);
context.fillRect(0, height / 5, width, height);

context.fillStyle = Utils.rgb(180, 15, 19);
context.fillRect(0, height / 2, width, height / 2);


context.fillStyle = Utils.rgb(255, 249, 199);
Utils.fillCircle(width / 2, height / 1.5, width / 6);


context.fillStyle = Utils.rgb(0, 0, 255);
context.fillRect(0, height / 1.3, width, height / 3);


/* sky();
drawSun();
sea();

function sky() {
    context.fillStyle = "#db0c05";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#fb8306";
    context.fillRect(0, height / 5, width, height / 3);

    context.fillStyle = "#fbd506";
    context.fillRect(0, 0, width, height / 5);
}

function sea() {
    context.fillStyle = "#1c05e6";
    context.fillRect(0, height, width, 0 - height / 6);
}

function drawSun() {
    context.fillStyle = "#e9ffc7";
    context.beginPath();
    context.arc(width / 2, height - 50, width / 6, 0, Math.PI * 2);
    context.fill();
}

context.arc(width / 2, height / 3, width / 6, 0, Math.PI, true); */