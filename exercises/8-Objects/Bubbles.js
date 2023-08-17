"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


let arrayBals = [];

setup();
drawBal();

function setup() {
    for (let i = 0; i < 100; i++) {
        let ObjectBal = {
            x: width / 2,
            y: height / 2,
            size: Utils.randomNumber(5, 10),
            move: function () {
                context.fillStyle = Utils.hsl(200 + i * 10, 80, 60);
                Utils.fillCircle(this.x, this.y, this.size);
                this.x += Utils.randomNumber(-1, 1);
                this.y += Utils.randomNumber(-1, 1);
            }
        };
        arrayBals.push(ObjectBal);
    }
}

function drawBal() {
    for (let i = 0; i < arrayBals.length; i++) {
        let ObjectBal = arrayBals[i];

        ObjectBal.move();
    }
    requestAnimationFrame(drawBal);
}

/* let bubbles = [];

setup();
update();

function setup() {
    for (let i = 0; i < 200; i++) {
        let bubble = {
            x: width / 2,
            y: height / 2,
            size: 10,
            hue: Utils.randomNumber(0, 360)
        };
        bubbles[i] = bubble;
    }
    console.log(bubbles);
}

function update() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];
        bubble.x += Utils.randomNumber(-2, 2);
        bubble.y += Utils.randomNumber(-2, 2);
        bubble.size += 0.01;
        drawBubble(bubble);
    }
    requestAnimationFrame(update);
}

function drawBubble(bubble) {
    context.fillStyle = Utils.hsl(bubble.hue, 50, 50);
    Utils.fillCircle(bubble.x, bubble.y, bubble.size);
    context.fillStyle = Utils.hsl(bubble.hue, 50, 75);
    Utils.fillCircle(bubble.x + bubble.size / 3, bubble.y - bubble.size / 3, bubble.size / 4);
} */