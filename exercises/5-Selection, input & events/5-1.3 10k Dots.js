"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

for (let i = 0; i < 10000; i++) {
    let x = Utils.randomNumber(0, width);
    let y = Utils.randomNumber(0, height);

    if (y < height / 4) {
        context.fillStyle = "red";
    } else if (y > height / 2 * 1.5) {
        context.fillStyle = "blue";
    } else {
        context.fillStyle = "yellow";
    }

    Utils.fillCircle(x, y, 2);
}

/* drawDots();

function drawDots() {
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (y < height / 3) {
            context.fillStyle = "blue";
        } else if (y > (height / 4) * 3)
            context.fillStyle = "red";
        else {
            context.fillStyle = "black";
        }
        Utils.fillCircle(x, y, 2);
    }
} */