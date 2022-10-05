"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawCros();
drawRect();

function drawRect() {
    context.lineWidth = '5';
    context.strokeStyle = 'black';
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();
}

function drawCros() {
    context.lineWidth = '5';
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(50, 200);
    context.lineTo(200, 50);
    context.stroke();

}