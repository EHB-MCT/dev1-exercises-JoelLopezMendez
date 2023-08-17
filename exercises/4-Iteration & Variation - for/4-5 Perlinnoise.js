"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


let width = window.innerWidth;
let height = window.innerHeight;

let ArrayNoise = [];
init();

function init() {
    for (let i = 0; i < width; i++) {
        let objectNoise = {
            x: i,
            y: Noise.perlinNoise(i / 100) * 200
        };
    }
}

/* for (let i = 0; i < width; i++) {
    // console.log(Noise.setSeed());

    let x = i;
    let y = Noise.perlinNoise(i / 100) * 400;

    for (let j = 0; j < height; j++) {
        // context.fillStyle = Utils.hsl(j * 36, 200, 50);
        context.fillStyle = Utils.rgb(j * 36, j * 50, 255);

        Utils.fillCircle(x, y + j * 40, 2);
    }
}

for (let i = 0; i < 1000; i++) {
    let x1 = Math.random() * width;
    let y1 = Math.random() * height;
    let distance = Utils.calculateDistance(width / 2, height / 2, x1, y1);

    if (distance < 250) {

    } else {
        context.fillStyle = "black";
        Utils.fillCircle(x1, y1, 20);
    }
} */