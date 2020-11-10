function setup() {
    createCanvas(1000, 500);
    background(255);
}
  
  function draw() {
      if(mouseIsPressed) {
          ellipse(mouseX, mouseY, 80,80);
          fill(0);
      }
}

function rectangle() {
    stroke(0);
    rect(mouseX, mouseY,50,50);
}
