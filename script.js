let colors;
let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colors = [color('#D32F2F'), color('#1976D2'), color('#388E3C'), color('#FBC02D'), color('#8E24AA')];
  background(255);
}

function draw() {
  for (let shape of shapes) {
    shape.display();
  }
}

function mouseDragged() {
  let shapeType = int(random(3));
  let col = random(colors);
  if (shapeType === 0) {
    shapes.push(new Rectangle(mouseX, mouseY, col));
  } else if (shapeType === 1) {
    shapes.push(new Circle(mouseX, mouseY, col));
  } else {
    shapes.push(new Triangle(mouseX, mouseY, col));
  }
}

class Rectangle {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.w = random(20, 10);
    this.h = random(20, 10);
    this.col = col;
  }
  
  display() {
    noStroke();
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Circle {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.r = random(10, 50);
    this.col = col;
  }
  
  display() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }
}

class Triangle {
  constructor(x, y, col) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + random(-50, 50);
    this.y2 = y + random(-50, 50);
    this.x3 = x + random(-50, 50);
    this.y3 = y + random(-50, 50);
    this.col = col;
  }
  
  display() {
    noStroke();
    fill(this.col);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}
