"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

drawRect();

function drawRect() {
    let x = 50;
    let y = 50;

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {

            context.fillStyle = '#9F1300';
            context.beginPath();
            context.rect(x + i * 85, y + j * 45, 80, 40);
            context.fill();
        }
    }
}

//modulos