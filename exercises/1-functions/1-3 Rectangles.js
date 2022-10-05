"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');



drawRectRed();
drawRectBlack();

function drawRectRed() {
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();

    context.beginPath();
    context.rect(350, 350, 150, 150);
    context.stroke();

    context.beginPath();
    context.rect(70, 400, 80, 80);
    context.stroke();

    context.beginPath();
    context.rect(400, 70, 80, 80);
    context.stroke();
}

function drawRectBlack() {
    context.strokeStyle = 'black';
    context.beginPath();
    context.rect(480, 20, 50, 50);
    context.fill();

    context.beginPath();
    context.rect(20, 480, 50, 50);
    context.fill();

    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(150, 150, 250, 250);
    context.fill();
    context.stroke();
}