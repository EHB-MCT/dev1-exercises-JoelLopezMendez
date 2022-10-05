"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    /* J */
    context.lineWidth = 15;
    context.beginPath();
    context.moveTo(230, 200);
    context.lineTo(330, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(280, 200);
    context.lineTo(350, 400);
    context.lineTo(200, 400);
    context.lineTo(200, 370);
    context.stroke();

    /* O */
    context.lineWidth = 15;
    context.beginPath();
    context.moveTo(400, 405);
    context.lineTo(350, 200);
    context.lineTo(430, 200);
    context.lineTo(520, 400);
    context.lineTo(395, 400);
    context.stroke();

    /* E + L*/
    context.beginPath();
    context.moveTo(600, 200);
    context.lineTo(480, 200);
    context.lineTo(560, 400);
    context.lineTo(800, 400);
    context.stroke();

    context.beginPath();
    context.moveTo(600, 300);
    context.lineTo(480, 300);
    context.stroke();


    context.beginPath();
    context.moveTo(700, 400);
    context.lineTo(650, 180);
    context.stroke();
}