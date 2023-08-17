"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


for (let i = 0; i < 10000; i++) {
    let x = Utils.randomNumber(0, width);
    let y = Utils.randomNumber(0, height);

    let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
    if (distance < 100) {
        context.fillStyle = "red";
    } else {
        context.fillStyle = "white";
    }
    Utils.fillCircle(x, y, 2);
}

/* drawRec();
drawDots();

function drawRec() {
    context.beginPath();
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";
}

function drawDots() {

    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if (distance < 100) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "white";
        }

        Utils.fillCircle(x, y, 2);
    }
} */