"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);

drawBubbles();

function drawBubbles(params) {
    for (let i = 0; i < 100; i++) {
        let x = Utils.randomNumber(200, width - 200);
        let y = Utils.randomNumber(200, height - 200);
        let size = Utils.randomNumber(5, 35);
        let color = Utils.randomNumber(0, 255);

        context.fillStyle = Utils.rgba(color, 255, 255, 50);
        Utils.fillCircle(x, y, size);
    }
}


/* drawCiclel();

function drawCiclel() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 200; i++) {
        let x = Utils.randomNumber(200, width - 200);
        let y = Utils.randomNumber(200, height - 200);
        let size = Utils.randomNumber(5, 40);

        let h = Utils.randomNumber(105, 207);
        let s = Utils.randomNumber(64, 80);
        let l = Utils.randomNumber(36, 60);
        let a = Utils.randomNumber(20, 60);
        context.fillStyle = Utils.hsla(h, s, l, a);

        Utils.fillCircle(x, y, size);
    }
} */