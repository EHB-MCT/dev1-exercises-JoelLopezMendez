"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


let width = window.innerWidth;
let height = window.innerHeight;

drwaCircles3();

function drwaCircles() {

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            Utils.fillCircle(0 + i * 40, 0 + j * 40, 20);
        }
    }
}

function drwaCircles1() {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let r = Utils.randomNumber(1, 40);

            context.fillStyle = Utils.rgba(255, 100, 20, 50);
            Utils.fillCircle(0 + i * 40, 0 + j * 40, r);
        }
    }
}

function drwaCircles2() {
    context.fillStyle = Utils.rgba(0, 10, 255, 50);
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            Utils.fillCircle(0 + i * 40, 0 + j * 40, 1 + j * 5);
        }
    }
}

function drwaCircles3() {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let r = 100 + j % 2 * 100;
            context.fillStyle = Utils.rgb(j % 2 * 100, 100, 200);
            Utils.fillCircle(0 + i * 40, 0 + j * 40, 20);
        }
    }
}

function drwaCircles4() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let b = 100 + j % 2 * 155;
            context.fillStyle = Utils.rgb(100, 255, b);
            Utils.fillCircle(10 + i * 60, 10 + j * 60, 30);
        }
    }
}

function drwaCircles5() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let b = 100 + (i + j) % 2 * 100;
            context.fillStyle = Utils.rgb(255, b, 200);

            Utils.fillCircle(20 + i * 40, 20 + j * 40, 20);
        }
    }
}

/* drawCircle5();

function drawCircle() {
    context.fillStyle = "#FF9B0C";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            Utils.fillCircle(30 + i * 60, 30 + j * 60, 30);
        }
    }
}

function drawCircle1() {

    context.fillRect(0, 0, width / 2 - 200, height);
    context.fillRect(width / 2 + 200, 0, width, height);

    context.fillStyle = Utils.hsla(140, 92, 40, 40);

    for (let i = 0; i < 10; i++) {
        let x = Utils.randomNumber(width / 2 - 200, width / 2 + 200);
        let y = Utils.randomNumber(30, height);
        let size = Utils.randomNumber(10, 60);
        Utils.fillCircle(x, y, size);

    }
}

function drawCircle2() {

    context.fillStyle = Utils.hsla(55, 92, 26, 50);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            Utils.fillCircle(30 + i * 60, 30 + j * 60, 5 + j * 10);
        }
    }
}

function drawCircle3() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 5; j++) {
            let x = 0 + i * 80;
            let y = 0 + j * 80;

            let h = 200 + i % 2 * 250;
            context.fillStyle = Utils.hsl(h, 100, 20);
            Utils.fillCircle(x, y, 40);
        }
    }
}

function drawCircle4() {


    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = 0 + i * 80;
            let y = 0 + j * 80;
            let size = 40;

            let h = 150 + j % 2 * 50;
            context.fillStyle = Utils.hsl(h, 86, 50);

            Utils.fillCircle(x, y, size);
        }

    }
}

function drawCircle5() {


    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j < 6; j++) {
            let size = 30;
            let margin = size * 2;
            let x = 0 + i * margin;
            let y = 0 + j * margin;

            let h = 100 + (j + i) % 2 * 200;
            context.fillStyle = Utils.hsl(h, 100, 50);
            Utils.fillCircle(x, y, size);
        }

    }
} */