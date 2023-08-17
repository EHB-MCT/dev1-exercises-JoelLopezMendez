"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

let colorHue = 0;

bubble();
move();

/**
 * 
 * @param {MouseEvent} e 
 */

function move(e) {
    colorHue = e.pageX;
    console.log(colorHue);
}

function bubble() {
    let x = Utils.randomNumber(0, width);
    let y = Math.round(Math.random() * height);
    let size = Utils.randomNumber(20, 35);

    context.fillStyle = Utils.hsl(125 + colorHue, 80, 60);
    Utils.fillCircle(x, y, size);
    context.fillStyle = Utils.hsl(colorHue++, 80, 60);
    Utils.fillCircle(x, y - 8, size - 12);

    requestAnimationFrame(bubble);
}