"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

let squares = [];

let size = 50;
let x = width / 2;
let y = height - size;
let xSpeed = 10;
let ySpeed = 10;

setup();
update();

function update() {
    drawSquare();
    numner();
    drawRect();

    requestAnimationFrame(update);
}

function setup() {
    for (let i = 0; i < 1000; i++) {
        let square = {
            rN: Utils.randomNumber(1, 4),
            x: Utils.randomNumber(0, width),
            y: Utils.randomNumber(0, height),
            triangulo: function () {
                context.beginPath();
                context.moveTo(width / 4 * 3 + 20, height / 4 * 3 - 50);
                context.lineTo(width / 4 * 3 + 100, height / 4 * 3 + 75);
                context.lineTo(width / 4 * 3 - 50, height / 4 * 3 + 75);
                context.lineTo(width / 4 * 3 + 30, height / 4 * 3 - 50);
                context.stroke();
            },
            drawSquares: function () {
                if (this.x < width / 2 && this.y < height / 2) {
                    context.fillStyle = 'red';
                } else if (this.y > height / 2 && this.x > width / 2) {
                    context.fillStyle = 'blue';
                } else if (this.x > width / 2 && this.y < height / 2) {
                    context.fillStyle = "green";
                } else if (this.x < width / 2 && this.y > height / 2) {
                    context.fillStyle = 'yellow';
                }
                context.fillRect(this.x, this.y, 20, 20);
            }
        };
        squares.push(square);
    }
}

function drawRect() {
    context.fillRect(x, y, size, size);

    if (x > width - size || x < 0) {
        xSpeed *= -1;
    }
    if (y < 0 || y > height - size) {
        ySpeed *= -1;
    }

    x += xSpeed;
    y -= ySpeed;
}

function drawSquare() {
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];

        square.drawSquares();
        Utils.fillCircle(width / 2, height / 2, 75);
    }
}

function numner() {
    context.lineWidth = 20;
    for (let i = 0; i < 1; i++) {
        let square = squares[i];
        context.fillStyle = "black";
        context.font = "bold " + 100 + "pt Arial";
        context.fillText(square.rN, width / 2 - 40, height / 2 + 45);
        if (square.rN == 1) {
            context.strokeRect(width / 8, height / 6, 140, 140);
        } else if (square.rN == 2) {
            Utils.strokeCircle(width / 4 * 3, height / 4, 75);
        } else if (square.rN == 3) {
            Utils.strokeEllipse(height / 5, height / 5 * 4, 100, 50);
        } else if (square.rN == 4) {
            square.triangulo();
        }



    }
    context.fillStyle = 'white';
}


// context.font = "bold " + sizeY / 5 + "pt Arial"
// context.textAlign = "center";
// context.font = "normal 50pt Arial";
// context.fillText("STARRY NIGHT", width / 2, height / 2);