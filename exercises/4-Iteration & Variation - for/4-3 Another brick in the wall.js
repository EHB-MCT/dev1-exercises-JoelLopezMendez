"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= 6; j++) {
        let x = 50 + i * 45 + j % 2 * 20;
        let y = 50 + j * 25;

        context.fillRect(x, y, 40, 20);
    }
}

/* drawRect();

function drawRect() {
    context.fillStyle = "darkred";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            let x = 50 + i * 85 + j % 2 * 50;
            let y = 50 + j * 40;
            context.fillRect(x, y, 80, 35);
        }
    }
} */