"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBubble();

function drawBubble() {


    for (let i = 0; i < 2000; i++) {
        context.fillStyle = Utils.rgb(51 + i, 94, 51);

        let x = i / 10;
        let y = 150 + Utils.randomGaussian() * 200;

        Utils.fillCircle(x, y, 2);
    }
}