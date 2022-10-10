"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRect1();
drawEllipse();
drawRect();

function drawRect1() {
    context.fillStyle = '#FE8B00';
    context.lineWidth = '3';
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.fill();
}

function drawRect() {
    context.fillStyle = 'blue';
    context.lineWidth = '3';
    context.beginPath();
    context.rect(50, 300, 350, 100);
    context.fill();
}

function drawEllipse() {
    context.fillStyle = 'yellow';
    context.beginPath();
    context.ellipse(230, 320, 150, 50, 0, 0, Math.PI, true);
    context.fill();
}