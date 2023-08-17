"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

for (let i = 0; i < 10000; i++) {
    let x = Utils.randomNumber(0, width);
    let y = Utils.randomNumber(0, height);

    if (x < width / 5 || x > (width / 3) * 2) {
        context.fillStyle = "red";
    } else if (y < height / 5 || y > (height / 5) * 3) {
        context.fillStyle = "red";
    } else {
        context.fillStyle = "green";
    }


    Utils.fillCircle(x, y, 2);
}

/* drawDots();

function drawDots() {
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < height / 4 || x > (height / 4) * 3) {
            context.fillStyle = "green";
        } else if (y < height / 4 || y > height / 4 * 3) {
            context.fillStyle = "green";
        } else {
            context.fillStyle = "blue";
        }

        Utils.fillCircle(x, y, 2);
    }
} */