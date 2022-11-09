"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


let width = window.innerWidth;
let height = window.innerHeight;


drawRectBlack();
drawCicleL();


function drawRectBlack() {
    context.fillStyle = '#00';
    context.beginPath();
    context.rect(0, 0, width, height);
    context.fill();
}

function drawCicleL() {
    for (let i = 0; i < 100; i++) {
        let x = Utils.randomNumber(200, width - 200);
        let y = Utils.randomNumber(200, height - 200);
        let size = Utils.randomNumber(10, 50);

        context.fillStyle = Utils.hsla(Utils.randomNumber(0, 150), 94, 50, 40);
        Utils.fillCircle(x, y, size);
    }
}