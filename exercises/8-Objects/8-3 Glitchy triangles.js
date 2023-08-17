"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let arrayTriangulos = [];

let x = [];
let y = [];
let x1 = [];
let y1 = [];
let x2 = [];
let y2 = [];

setup();
drawTriangulo();

function setup() {
    /*     for (let i = 0; i < 100; i++) {
            let objectTriangulo = {
                x: Utils.randomNumber(10, width),
                y: Utils.randomNumber(10, height),
                x1: objectTriangulo.x,
                // y1: this.y + Utils.randomNumber(10, height)
            };
            arrayTriangulos.push(objectTriangulo);
        } */

    for (let i = 0; i < 100; i++) {
        x[i] = Utils.randomNumber(-10, width + 10);
        y[i] = Utils.randomNumber(-20, height + 10);
        x1[i] = x[i] + Utils.randomNumber(5, 50);
        y1[i] = y[i] + Utils.randomNumber(5, 50);
        x2[i] = x1[i] + Utils.randomNumber(5, 50);
        y2[i] = y1[i] + Utils.randomNumber(5, 50);
    }

}

function drawTriangulo() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 100; i++) {
        context.fillStyle = Utils.hsla(300 + i * 10, 100, 60, 50);
        context.beginPath();
        context.moveTo(x[i], y[i]);
        context.lineTo(x1[i], y1[i]);
        context.lineTo(x2[i], y2[i]);
        context.fill();

        x[i] += Utils.randomNumber(-2, 2);
        y[i] += Utils.randomNumber(-2, 2);
        x1[i] += Utils.randomNumber(-2, 2);
        y1[i] += Utils.randomNumber(-2, 2);
        x2[i] += Utils.randomNumber(-2, 2);
        y2[i] += Utils.randomNumber(-2, 2);
    }
    requestAnimationFrame(drawTriangulo);
}

function drawTriangulo1() {
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(150, 200);
    context.lineTo(200, 100);
    context.fill();
}