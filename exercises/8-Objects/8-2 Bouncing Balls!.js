"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let ArrayBallons = [];

setup();
drawBallons();

function setup() {
    for (let i = 0; i < 10; i++) {
        let ObjectBallon = {
            x: Utils.randomNumber(10, width),
            y: Utils.randomNumber(0, height),
            size: Utils.randomNumber(20, 40),
            xSpeed: 5,
            ySpeed: 5,
            bouncing: function () {
                if (this.x > width - this.size) {
                    this.xSpeed *= -1;
                } else if (this.x < this.size) {
                    this.xSpeed *= -1;
                }

                if (this.y > height - this.size) {
                    this.ySpeed *= -1;
                } else if (this.y < this.size) {
                    this.ySpeed *= -1;
                }
            },
            move: function () {
                this.x += this.xSpeed;
                this.y += this.ySpeed;
            },
            drawBal: function () {
                context.fillStyle = Utils.hsl(10 + i * 10, 100, 50);
                Utils.fillCircle(this.x, this.y, this.size);
            }
        };
        ArrayBallons.push(ObjectBallon);
    }
}

function drawBallons() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < ArrayBallons.length; i++) {
        let ObjectBallon = ArrayBallons[i];

        ObjectBallon.drawBal();
        ObjectBallon.move();
        ObjectBallon.bouncing();
    }
    requestAnimationFrame(drawBallons);
}

/* let xPos = [];
let yPos = [];
let size = [];
let r = [];
let a = [];

setup();
drawBubble();

function setup() {
    for (let i = 0; i < 100; i++) {
        xPos[i] = Math.random() * width;
        yPos[i] = Math.random() * height;
        size[i] = Utils.randomNumber(0, 20);
        r[i] = Utils.randomNumber(0, 255);
        a[i] = Utils.randomNumber(10, 80);
    }
}

function drawBubble() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < size.length; i++) {
        context.fillStyle = Utils.rgba(r[i], r[i * 2], 0, a[i]);
        Utils.fillCircle(xPos[i], yPos[i], size[i]);

        xPos[i] += Utils.randomNumber(-1, 1);
        yPos[i] += Utils.randomNumber(-1, 1);
    }
    requestAnimationFrame(drawBubble);
} */