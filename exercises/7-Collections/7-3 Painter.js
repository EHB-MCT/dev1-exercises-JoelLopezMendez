"use strict";

import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = [];
let y = [];

setup();
window.onmousemove = drawCircle;

function setup() {
    for (let i = 0; i < 100; i++) {
        x[i] = i;
        y[i] = i;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
}


/**
 * 
 * @param {MouseEvent} e 
 */
function drawCircle(e) {
    for (let i = 0; i < x.length; i++) {
        x[i] = e.pageX;
        y[i] = e.pageY;
        context.fillStyle = Utils.hsla(200, 100, 20, 50);
        Utils.fillCircle(x[i], y[i], 20 - i * 10);
    }
    // x.push();
    x.shift();

}