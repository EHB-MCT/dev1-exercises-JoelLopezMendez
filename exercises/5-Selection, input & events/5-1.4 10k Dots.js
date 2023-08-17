"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


draw();

function draw() {
    for (let i = 0; i < 10000; i++) {
        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);

        if (x < width / 2 && y < height / 2) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "black";
        }

        Utils.fillCircle(x, y, 2);
    }
}

/* drawDots();

function drawDots() {
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (y > height / 3) {
            context.fillStyle = "green";
        } else if (x < height / 2)
            context.fillStyle = "red";
        else {
            context.fillStyle = "green";
        }


        Utils.fillCircle(x, y, 2);
    }
} */