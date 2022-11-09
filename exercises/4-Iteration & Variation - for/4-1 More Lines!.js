"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = 600;
let height = 300;

let horizontal = 60;
let vertical = 30;

drawRectRed();
drawLine();
drawLineV();

function drawRectRed() {
    context.fillStyle = '#FF9300';
    context.beginPath();
    context.rect(0, 0, 600, 300);
    context.fill();
}

function drawLine() {
    let step = width / horizontal;

    for (let i = 0; i < 60; i++) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        Utils.drawLine(0 + i * step, 0, width - i * step, height);
    }
}

function drawLineV() {
    let step1 = height / vertical;

    for (let i = 0; i <= 30; i++) {
        Utils.drawLine(0, 0 + i * step1, width, height - i * step1);
    }
}