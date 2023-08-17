"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

for (let i = 0; i < 10000; i++) {
    let x = Utils.randomNumber(0, width);
    let y = Utils.randomNumber(0, height);

    if (x < width/2) {
        context.fillStyle = "red";
    } else {
        context.fillStyle = "blue";
    }
    Utils.fillCircle(x, y, 2);
}

/* drawDots();

function drawDots() {
    for (let i = 0; i < 10000; i++) {
        let x = Utils.randomNumber(0, width);
        let y = Math.random() * height;

        if (x < width / 2) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "green";
        }
        Utils.fillCircle(x, y, 2);
    }

}

function drawDots1() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (y < height / 3) {
            context.fillStyle = "red";
        } else if (y > height / 3 && y < height / 1.5) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "blue";
        }

        Utils.fillCircle(x, y, 2);
    }
}

function drawDots2() {
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < 200 || x > width - 200) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "green";
        }

        Utils.fillCircle(x, y, 2);
    }
}

function drawDots3() {
    for (let i = 0; i < 10000; i++) {
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height);

        if (x < width / 2 && y < height / 2) {
            context.fillStyle = "green";
        } else {
            context.fillStyle = "red";
        }

        Utils.fillCircle(x, y, 2);
    }


}

function drawDots4() {
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x > 200 && x < width - 200 && y > 100 && y < height - 100) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "black";
        }
        Utils.fillCircle(x, y, 2);
    }
}

function drawDots5() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);

        if (distance < 50 || distance < 100) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, y, 5);
    }
}

function drawDots7() {

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if (distance < 50 || distance > 100) {
            context.fillStyle = "blue";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 5);
    }
} */