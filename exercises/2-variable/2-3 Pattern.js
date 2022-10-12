"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "#D6D6D6";
context.fillRect(0, 0, width, height);

context.fillStyle = "#00155F";
context.fillRect(0, 0, width / 4, height);

context.fillStyle = "#00155F";
context.fillRect(width / 1.3, 0, width, height);

context.fillStyle = "#EA5303";
context.fillRect(0, height / 5, width, height / 3);

context.fillStyle = "#03EADC";
context.fillRect(0, height / 1.4, width / 4 + 1, height);


context.fillStyle = "#03EADC";
context.fillRect(width / 1.3 - 1, height / 1.4, width, height);