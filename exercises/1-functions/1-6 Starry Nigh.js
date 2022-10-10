"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRec();
drawLine();
drawLine1();
drawEllipse();
drawRec1();

function drawRec() {
    context.strokeStyle = "#ff5500";
    context.lineWidth = "6";
    context.beginPath();
    context.rect(50, 50, 400, 400);
    context.stroke();
}

function drawRec1() {
    context.fillStyle = "#ff5500";
    context.lineWidth = "6";
    context.beginPath();
    context.moveTo(250, 200);
    context.lineTo(200, 250);
    context.lineTo(250, 300);
    context.lineTo(300, 250);
    context.lineTo(250, 200);
    context.fill();
}

function drawLine() {
    context.fillStyle = "#FFFEFD";
    context.lineWidth = "5";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(450, 450);
    context.stroke();

    context.moveTo(100, 50);
    context.lineTo(450, 400);
    context.stroke();

    context.moveTo(150, 50);
    context.lineTo(450, 350);
    context.stroke();

    context.moveTo(50, 100);
    context.lineTo(400, 450);
    context.stroke();

    context.moveTo(50, 150);
    context.lineTo(350, 450);
    context.stroke();
}

function drawLine1() {
    context.lineWidth = "5";
    context.beginPath();
    context.moveTo(450, 50);
    context.lineTo(50, 450);
    context.stroke();

    context.moveTo(400, 50);
    context.lineTo(50, 400);
    context.stroke();

    context.moveTo(350, 50);
    context.lineTo(50, 350);
    context.stroke();

    context.moveTo(450, 100);
    context.lineTo(100, 450);
    context.stroke();

    context.moveTo(450, 150);
    context.lineTo(150, 450);
    context.stroke();

}

function drawEllipse() {

}