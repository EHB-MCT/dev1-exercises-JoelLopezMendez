"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let Arrayglobos = [];

setup();
drawGlobo();

function setup() {
    for (let i = 0; i < 100; i++) {
        let objectGlobo = {
            x: Utils.randomNumber(0, width),
            y: Utils.randomNumber(height / 3 * 4, height),
            h: Utils.randomNumber(10, 50),
            move: function () {
                this.x -= Utils.randomNumber(-1, 1);
                this.y -= Utils.randomNumber(1, 4);
            }
        };
        Arrayglobos.push(objectGlobo);
    }
}

function drawGlobo() {
    context.fillStyle = Utils.hsl(170, 80, 60);
    context.fillRect(0, 0, width, height);

    context.lineWidth = 5;
    context.fillStyle = "black";

    for (let i = 0; i < Arrayglobos.length; i++) {
        let objectGlobo = Arrayglobos[i];
        Utils.drawLine(objectGlobo.x, objectGlobo.y, objectGlobo.x, objectGlobo.y + 150);

        context.fillStyle = Utils.hsl(objectGlobo.h, 90, 60);
        Utils.fillEllipse(objectGlobo.x, objectGlobo.y, 25, 75);

        Arrayglobos[i].move();
    }
    requestAnimationFrame(drawGlobo);
}


/* let ballons = [];

setup();
update();

function setup() {
    for (let i = 0; i < 50; i++) {
        let globos = {
            x1: Utils.randomNumber(0, width),
            y1: height - i * 1,
            w: 30,
            h: 60,
            color: Utils.hsl(Utils.randomNumber(12, 50), 100, 50)
        };
        ballons[i] = globos;
    }
}

function update() {
    context.fillStyle = "#00D8FF";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < ballons.length; i++) {
        let globos = ballons[i];

        context.lineWidth = 5;
        context.strokeStyle = "black";
        Utils.drawLine(globos.x1, globos.y1, globos.x1, globos.y1 + 100);

        context.fillStyle = globos.color;
        Utils.fillEllipse(globos.x1, globos.y1 -= i * 1, globos.w, globos.h);
    }

    requestAnimationFrame(update);
}

function globo() {
    for (let i = 0; i < 50; i++) {

        context.lineWidth = 5;
        context.strokeStyle = "black";
        Utils.drawLine(globos.x1, globos.y1, globos.x1, globos.y + 100);

        context.fillStyle = globos.color;
        Utils.fillEllipse(globos.x1, globos.y1 + i * 10, globos.x2, globos.y2);
    }
} */