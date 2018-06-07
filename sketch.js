function setup() {
  createCanvas(640,640,WEBGL);
  print('this works');
  console.log('or does it!?');
}

function draw() {
  background(0);
  stroke(255,0,0);
  fill(0,0,255);
  ellipse(-200,-200,50,50);
  stroke(0,255,0);
  fill(255,0,0);
  rect(50,50,100,100);
  stroke(0,0,255);
  fill(0,255,0,50); //last value is transparency
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(20,50);
}

// NEXT VIDEO: How to upload your sketch - p5.js Tutorial
