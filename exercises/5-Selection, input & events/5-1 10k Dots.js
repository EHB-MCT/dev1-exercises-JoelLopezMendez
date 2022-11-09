"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x > width / 2) {
            context.fillStyle = "green";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 2);
    }

}

/* function drawDots() {

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if (distance < 50 || distance > 100) {
            context.fillStyle = "blue";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 5);
    }

} */