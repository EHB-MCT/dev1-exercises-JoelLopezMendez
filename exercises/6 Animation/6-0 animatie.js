"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);

// let frameCount = 0;
// let lastTime = 0;

// let x = width / 2;
// let y = height / 2;


// update();

// function update(currentTime) {
//     // let diference = (currentTime - lastTime) / 1000;
//     // let FPS = 1 / diference;
//     // // console.log("FPS " + FPS);

//     // lastTime = currentTime;

//     frameCount++;

//     // if (frameCount > width) {
//     //     frameCount = 0;
//     // }


//     context.fillStyle = Utils.hsl(frameCount, 200, 50);
//     Utils.fillCircle(x, y, 5);

//     x += Utils.randomNumber(-2, 2);
//     y += Utils.randomNumber(-2, 2);

//     // requestAnimationFrame(update);
// }


// window.onmousemove = MouseCircle;

// let color = 0;

// /**
//  * 
//  * @param {MouseEvent} e 
//  */

// function MouseCircle(eventData) {
//     let x = eventData.pageX;
//     let y = eventData.pageY;

//     context.fillStyle = Utils.hsl(color, 100, 50);
//     Utils.fillCircle(x, y, 20);
//     color++;
// }


let x = width / 2;
let y = height / 2;
let color = 0;

context.fillStyle = Utils.hsl(color, 100, 50);
Utils.fillCircle(x, y, 20);


window.onkeydown = keyCircle;

/**
 * 
 * @param {KeyboardEvent} eventData 
 */
function keyCircle(eventData) {
    console.log(eventData.code);

    if (eventData.code == "ArrowDown") {
        y += 5;
    } else if (eventData.code == "ArrowUp") {
        y -= 5;
    }
    if (eventData.code == "ArrowLeft") {
        x -= 5;
    } else if (eventData.code == "ArrowRight") {
        x += 5;
    }

    context.fillStyle = Utils.hsl(color, 100, 50);
    Utils.fillCircle(x, y, 20);
    color++;
}