"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


drawCircle();

function drawCircle() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let space = 10;

        let distance = Utils.calculateDistance(x, y, width / 2, height / 2);
        if (distance < 150) {


            context.fillStyle = "white";

            if (y < height / 2 - space && x < width / 2 - space) {
                context.fillStyle = "red";
            } else if (x > width / 2 + space && y > height / 2 + space) {
                context.fillStyle = "red";
            } else if (x < width / 2 - space && y > height / 2 + space) {
                context.fillStyle = "blue";
            } else if (x > width / 2 + space && y < height / 2 - space) {
                context.fillStyle = "blue";
            }
        } else {
            context.fillStyle = "black";
        }
        context.fillRect(x, y, 20, 10);
    }
}