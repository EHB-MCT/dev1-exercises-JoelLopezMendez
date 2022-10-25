"use strict";
import context from "../../Script/Context.js";

drawRectBlue();
drawCicle();
drawCicleRB();
drawCicleRN();
drawCicleLB();
drawCicleLN();


function drawRectBlue() {
    context.fillStyle = '#33A2FF';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
}

function drawCicle() {
    let i = 0;

    while (i < 10) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.arc(200, 200, 10 + i * 15, 0, Math.PI * 2);
        context.stroke();

        i++;
    }
}

function drawCicleRB() {
    let i = 0;

    while (i < 10) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.arc(50, 50, 10 + i * 15, 0, Math.PI * 2);
        context.stroke();

        i++;
    }
}

function drawCicleRN() {
    let i = 0;

    while (i < 10) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.arc(50, 350, 10 + i * 15, 0, Math.PI * 2);
        context.stroke();

        i++;
    }
}

function drawCicleLB() {
    let i = 0;

    while (i < 10) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.arc(350, 50, 10 + i * 15, 0, Math.PI * 2);
        context.stroke();

        i++;
    }
}

function drawCicleLN() {
    let i = 0;

    while (i < 10) {
        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.arc(350, 350, 10 + i * 15, 0, Math.PI * 2);
        context.stroke();

        i++;
    }
}