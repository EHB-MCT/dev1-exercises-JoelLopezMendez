"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


let color = 0;
window.onmousemove = cruz;

/**
 * 
 * @param {MouseEvent} e 
 */
function cruz(e) {
    let x = e.pageX;
    let y = e.pageY;

    context.fillRect(0, 0, width, height);
    context.lineWidth = Utils.randomNumber(-10, 10);
    context.strokeStyle = Utils.hsl(color, 100, 50);
    Utils.drawLine(x + 10, y, width, y);
    Utils.drawLine(x - 10, y, 0, y);

    Utils.drawLine(x, y + 10, x, height);
    Utils.drawLine(x, y - 10, x, 0);

    color++;
}

// window.onmousemove = crosshairs;

// let color = 0;

// crosshairs();

// /**
//  * 
//  * @param {MouseEvent} evenData 
//  */
// function crosshairs(evenData) {
//     context.fillStyle = "white";
//     context.fillRect(0, 0, width, height);
//     let x = evenData.pageX;
//     let y = evenData.pageY;

//     context.strokeStyle = Utils.rgb(color, 155, 12);
//     context.lineWidth = 5;
//     Utils.drawLine(x + 10, y, width, y);
//     Utils.drawLine(x - 10, y, 0, y);

//     Utils.drawLine(x, y - 10, x, 0);
//     Utils.drawLine(x, y + 10, x, height);

//     color += 5;
// }