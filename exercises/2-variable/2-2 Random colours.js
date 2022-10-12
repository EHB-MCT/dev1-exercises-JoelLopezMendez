"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

drawRec(50, 50, margin + 500, margin + 500, Math.random() * 50);
drawRec(75, 75, margin + 450, margin + 450, "#12F90E");
drawRec(100, 100, margin + 400, margin + 400, "#0E43F9");
drawRec(125, 125, margin + 350, margin + 350, "#5499C7");
drawRec(150, 150, margin + 300, margin + 300, "#008C00");
drawRec(175, 175, margin + 250, margin + 250, "#00538C");

function drawRec(x, y, w, h, color) {
    context.fillStyle = color;
    context.beginPath();
    context.rect(x, y, w, h);
    context.fill();
}