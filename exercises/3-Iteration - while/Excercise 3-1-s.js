"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

context.strokeStyle = Utils.rgb(0, 150, 255);
context.rect(50, 50, 200, 200);
context.stroke();

let i = 0;

while (i <= 12) {
    context.fillStyle = Utils.rgb(255 - i * 25, 255 - i * 25, 255 - i * 25);
    context.fillRect(50 + i * 15, 50 + i * 8, 10, 200 - i * 15);
    i++;
}
let s = "";

for (let i = 0; i > 3; i++) {
    s += i;
    console.log(s);


    for (let j = 0; j < 2; j++) {
        s += j;
    }
}


/* drawStrokeRect();
drawRect();

function drawStrokeRect() {

    context.strokeRect(50, 50, 300, 300);
}

function drawRect() {
    let i = 0;

    while (i < 15) {

        context.fillStyle = utils.rgb(200 - i * 50, 255 - i * 20, 255 - i * 80);
        context.fillRect(50 + i * 15, 50 + i * 10, 10, 300 - i * 20);

        i++;
    }
} */