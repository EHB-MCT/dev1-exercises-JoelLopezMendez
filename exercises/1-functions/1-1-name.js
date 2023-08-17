"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";


drawName();

function drawName() {
    /* J */
    Utils.drawLine(50, 50, 150, 50);
    Utils.drawLine(100, 50, 100, 150);
    Utils.drawLine(100, 150, 50, 125);

    /* O */
    Utils.drawLine(175, 50, 250, 50);
    Utils.drawLine(250, 50, 250, 150);
    Utils.drawLine(250, 150, 175, 150);
    Utils.drawLine(175, 150, 175, 50);

    /* E */
    Utils.drawLine(275, 50, 375, 50);
    Utils.drawLine(275, 50, 275, 150);
    Utils.drawLine(275, 150, 375, 150);
    Utils.drawLine(275, 75, 375, 75);

    /* L */
    Utils.drawLine(400, 50, 400, 150);
    Utils.drawLine(400, 150, 450, 150);
}


/* draw();

function draw() {
    // *J*
    context.strokeStyle = "#008000";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(125, 50);
    context.stroke();

    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(90, 150);
    context.lineTo(60, 130);
    context.stroke();

    // *O*
    context.fillStyle = "#ff0000";
    context.beginPath();
    context.moveTo(150, 50);
    context.lineTo(225, 50);
    context.lineTo(220, 150);
    context.lineTo(160, 150);
    context.lineTo(152, 48);
    context.fill();

    // *E*
    context.strokeStyle = "#800080";
    context.beginPath();
    context.moveTo(330, 55);
    context.lineTo(250, 50);
    context.lineTo(250, 150);
    context.lineTo(340, 140);
    context.stroke();
    context.beginPath();
    context.moveTo(250, 110);
    context.lineTo(300, 100);
    context.stroke();

    // *L*
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(340, 55);
    context.lineTo(350, 150);
    context.lineTo(400, 150);
    context.stroke();
} */