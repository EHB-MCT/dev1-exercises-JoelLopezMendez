"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


context.fillRect(0, 0, width, height);

let space = 10;

context.lineWidth = 3;
for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
        let r = Math.floor(Math.random() * 2);

        if (r == 0) {
            context.strokeStyle = "red";
            Utils.drawLine(i * space, j * space, 10 + i * space, 10 + j * space);
        } else {
            context.strokeStyle = "white";
            Utils.drawLine(i * space, 10 + j * space, 10 + i * space, j * space);
        }
    }
}


/* // drawMaze();


drawRec();
drawLine();


//Dit is gewoon een achter grond
function drawRec() {
    context.fillStyle = "red";
    context.beginPath();
    context.fillRect(0, 0, width, height);
}

//De variabele "r" is voor een ramdon waarde tussen 0 en 1
//De variabele "i" is voor de X ass
//De variabele "j" is voor de Y ass
//En de 'strokeStyle' is voor de random color met 'hsl' het kan ook met 'rgb'
//Als ik de stroke niet bij 'else' als bij de 'if' zet dan krijg ik zwarte lijnen links boven op mijn canvas
function drawLine() {
    context.lineWidth = "5";

    for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 200; i++) {

            let r = Math.round(Math.random());

            if (r == 0) {
                context.strokeStyle = Utils.hsl(Utils.randomNumber(0, 125), 90, 50);
                Utils.drawLine(0 + i * 10, 0 + j * 10, 10 + i * 10, 10 + j * 10);
            } else {
                context.strokeStyle = Utils.hsl(Utils.randomNumber(0, 360), 94, 50);
                Utils.drawLine(0 + i * 10, 10 + j * 10, 10 + i * 10, 0 + j * 10);
            }
        }
    }
}



function drawMaze() {
    context.fillRect(0, 0, width, height);

    context.lineWidth = 5;
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            let n = Math.floor(Math.random() * 2);

            context.strokeStyle = Utils.hsl(150 + (i * j) * 10, 80, 60);

            if (n === 0) {
                // context.fillStyle = "red";
                Utils.drawLine(0 + i * 15, 0 + j * 15, 20 + i * 15, 20 + j * 15);

            } else if (n === 1) {
                // context.fillStyle = "black";
                Utils.drawLine(40 + i * 15, 0 + j * 15, 20 + i * 15, 20 + j * 15);
            }
            // console.log(n);
            // Utils.fillCircle(50 + i * 11, 50, 5);
        }
    }
} */