"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRect();
drawLine();

function drawRect() {
    context.fillStyle = '#18F7EA';
    context.strokeStyle = 'black';
    context.lineWidth = '3';
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.stroke();
    context.fill();
}