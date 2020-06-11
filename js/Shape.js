/*

    N220 Section 25750
    Harmanjot Singh
    Classes
    16 February 2020

*/

// boilerplate class for the shapes
class Shape {
    // set the width, height, radius and color for the shape
    constructor(x = 50, y = 50, r = 100, color = '#ffdbac') {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        // randomly select the value
        this.vx = random(-5,5);
        this.vy = random(-5,5);
    }
  
    // randomly move the shapes
    move() {
        this.x += this.vx;
        this.y += this.vy;
        return this;
    }
  
    // draw the shape with smiley face
    draw() {
        fill(this.color);
        // scale(0.5, 2);
        ellipse(this.x,this.y,this.r);
        fill(252,157,154);//light pink

        // create the face
        fill(249,205,173);
        ellipse(mouseX, mouseY, 100, 100);
    
        // create the eye 1
        fill(30);
        ellipse(mouseX, mouseY,10, 10);
    
        // create the eye 2
        ellipse(mouseX+20, mouseY,10);
    
        // create the mouth
        fill(252,157,154);
        arc(mouseX, mouseY+20, 30, 30, 0, radians(180), PIE);
        return this;
    }
}
  