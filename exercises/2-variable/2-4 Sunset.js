"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

window.onresize = drawSun;

sky();
drawSun();
sea();


function sky() {
    context.fillStyle = "#FEBE03";
    context.fillRect(0, 0, width, height / 2);

    context.fillStyle = "#FE8803";
    context.fillRect(0, height / 9, width, height / 3);

    context.fillStyle = "#FE4003";
    context.fillRect(0, height / 5, width, height / 5);
}

function sea() {
    context.fillStyle = "#03F3FE";
    context.fillRect(0, height / 3, width, height / 6);
}

function drawSun() {
    context.fillStyle = '#FFFDD3';
    context.arc(width / 2, height / 3, width / 6, 0, Math.PI, true);
    context.fill();
}