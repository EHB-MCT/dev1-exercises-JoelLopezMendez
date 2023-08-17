"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";
import * as Noise from "../../Scripts/noise.js";


let width = context.canvas.width;
let height = context.canvas.height;

let arrayRect = [];

setup();
name();

function setup() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);


    for (let i = 0; i < 1000; i++) {
        let objectRect = {
            x: Utils.randomNumber(0, width),
            y: Utils.randomNumber(0, height),
            size: 10,
            xN: i,
            yN: Noise.perlinNoise(i / 100) * 800,
            rect: function () {
                if (objectRect.x < width / 8 || objectRect.x > width / 4 * 3.5) {
                    context.fillStyle = Utils.rgb(Utils.randomNumber(0, 255), Utils.randomNumber(0, 255), Utils.randomNumber(0, 255));
                    context.fillRect(objectRect.x, objectRect.y, objectRect.size, objectRect.size * 2);
                } else if (objectRect.y < height / 5 || objectRect.y > height / 4 * 3) {
                    context.fillStyle = Utils.rgb(Utils.randomNumber(0, 255), Utils.randomNumber(0, 255), Utils.randomNumber(0, 255));
                    context.fillRect(objectRect.x, objectRect.y, objectRect.size, objectRect.size * 2);
                }
            },
            // noise: function () {}
        };
        arrayRect.push(objectRect);
    }
}

function name() {
    for (let i = 0; i < arrayRect.length; i++) {
        let objectRect = arrayRect[i];

        let xN = i;
        let yN = Noise.perlinNoise(i / 100) * 800;


        objectRect.rect();
        // objectRect.noise();

        console.log(Noise.getSeed());
        Noise.setSeed(2);
        if (xN < width / 8 || xN > width / 4 * 3.5) {

        } else if (yN < height / 5 || yN > height / 4 * 3) {

        } else {
            context.fillStyle = "blue";
            context.fillRect(xN, yN, 2, 10);
        }

        // xN++;
        // requestAnimationFrame(name);
    }
}