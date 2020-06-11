/*

    N220 Section 25750
    Harmanjot Singh
    Classes
    16 February 2020

*/

'use strict';

let shapes = [];

// create a canvas
function setup() { 
    createCanvas(800,600);
    background(0);
} 

// start drawing
function draw() {
    background(0);
    let i;
    for(i = 0; i < shapes.length; i++) {
        shapes[i].move().draw();
    }
}

function mouseClicked() {
    // click on the right half of the canvas to create bouncing shapes
    if(mouseX > width / 2) {
        shapes.push(new BouncingShape(mouseX, mouseY));
    }
    // click on the left half of the canvas to create non-bouncing shapes
    else {
        shapes.push(new Shape(mouseX, mouseY));
    }
}

