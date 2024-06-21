function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240);
    noLoop(); // Draw only once unless mouse interaction occurs
}

function draw() {
    // Clear background on each draw call to avoid smudging
    background(240);

    // Kandinsky-inspired geometric shapes
    for (let i = 0; i < 10; i++) {
        fill(random(255), random(255), random(255), 150);
        noStroke();
        ellipse(random(width), random(height), random(50, 150));
    }

    // Basquiat-inspired spontaneous lines and shapes
    for (let i = 0; i < 20; i++) {
        stroke(random(255), random(255), random(255));
        strokeWeight(random(1, 5));
        line(random(width), random(height), random(width), random(height));
    }
}

function mouseDragged() {
    // Draw shapes while dragging the mouse
    fill(random(255), random(255), random(255), 200);
    noStroke();
    rect(mouseX, mouseY, random(20, 60), random(20, 60));

    // Add spontaneous lines
    stroke(random(255), random(255), random(255));
    strokeWeight(random(1, 5));
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
