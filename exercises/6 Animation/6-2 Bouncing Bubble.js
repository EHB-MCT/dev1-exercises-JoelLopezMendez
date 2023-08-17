"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let size = 20;
let x = Utils.randomNumber(size, width - size);
let y = Utils.randomNumber(size, height - size);
let xSpeed = 5;
let ySpeed = 5;


update();

function update() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    drawBallon();

    requestAnimationFrame(update);
}


function drawBallon() {
    context.fillStyle = "green";
    Utils.fillCircle(x, y, size);

    if (x > width - size || x < size) {
        xSpeed *= -1;
    }

    if (y > height - size) {
        ySpeed *= -1;
    } else if (y < size) {
        ySpeed *= -1;
    }

    x += xSpeed;
    y += ySpeed;
}

/* let size = 50;
let x = Utils.randomNumber(size, width - size);
let y = Utils.randomNumber(size, height - size);
let hSpeed = 10;
let vSpeed = 10;

draw();

function draw() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "blue";
    Utils.fillCircle(x, y, size);

    x += hSpeed;
    y += vSpeed;
    if (x >= width - size || x <= size) {
        hSpeed *= -1;
    }
    if (y >= height - size || y <= size) {
        vSpeed *= -1;
    }
    requestAnimationFrame(draw);
} */