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

function drawLine() {
    context.lineWidth = '2';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
    context.stroke();

    context.rect(100, 50, 250, 250);
    context.fill();
    context.stroke();

    context.rect(175, 100, 175, 200);
    context.fill();
    context.stroke();

    context.rect(175, 150, 125, 150);
    context.fill();
    context.stroke();
}

/* function drawLine() {
    context.lineWidth = '2';
    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(100, 300);
    context.lineTo(330, 300);
    context.stroke();

    context.beginPath();
    context.moveTo(330, 50);
    context.lineTo(330, 350);
    context.lineTo(50, 350);
    context.stroke();

    context.beginPath();
    context.moveTo(330, 100);
    context.lineTo(150, 100);
    context.lineTo(150, 300);
    context.stroke();

    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(280, 150);
    context.lineTo(280, 300);
    context.stroke();
} */