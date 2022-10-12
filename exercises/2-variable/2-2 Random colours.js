"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;



/* drawRec(50, 50, size + 50, size + 50);
drawRec(75, 75, size, size);
drawRec(100, 100, size - 50, size - 50);
drawRec(125, 125, size - 100, size - 100);
drawRec(150, 150, size - 150, size - 150);
drawRec(175, 175, size - 200, size - 200); */

let size = 500;

function drawRec(x, y, size) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";

    context.fillStyle = color;
    context.fillRect(x, y, size, size);
}

drawRec(50, 50, size);
drawRec(75, 75, size - 50);
drawRec(100, 100, size - 100);
drawRec(125, 125, size - 150);
drawRec(150, 150, size - 200);
drawRec(175, 175, size - 250);
drawRec(200, 200, size - 300);
drawRec(225, 225, size - 350);