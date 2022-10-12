"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

drawLines();

function drawLines() {
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(margin, margin);
    context.lineTo(width - 100, margin);

    context.lineTo(width - 100, margin);
    context.lineTo(margin, margin + 50);

    context.lineTo(margin, margin + 50);
    context.lineTo(width - 100, margin + 50);

    context.lineTo(width - 100, margin + 50);
    context.lineTo(margin, margin + 100);

    context.lineTo(width - 100, margin + 100);
    context.lineTo(margin, margin + 150);

    context.lineTo(width - 100, margin + 150);
    context.lineTo(margin, margin + 200);

    context.lineTo(width - 100, margin + 200);
    context.lineTo(margin, margin);
    context.stroke();
}