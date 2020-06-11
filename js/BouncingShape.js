/*

    N220 Section 25750
    Harmanjot Singh
    Classes
    16 February 2020

*/

// extend or inherit from first class which will give all its methods and values to use for this class or shape
class BouncingShape extends Shape {
    // set the width, height, radius and color for the shape
    constructor(x = 50, y = 50, r = 50, color = '#ecbcb4') {
        super(x, y, r, color);
    }
    
    // randomly move the created shapes
    move() {
        this.x += this.vx;
        this.y += this.vy;
    
        // when hit the edges of the canvas, switch the direction
        if(!this.onCanvas()) {
            this.vx *= -1;
            this.vy *= -1;
        }
        return this;
    }
  
    // determine the edges of the canvas
    onCanvas() {
        if(this.x - (this.r / 2) < 0 || this.x + (this.r / 2) > width || this.y - (this.r / 2) < 0 || this.y + (this.r / 2) > height) { 
            return false; 
        }
        return true;
    }
}