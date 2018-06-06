function setup() {
  createCanvas(640,640,WEBGL);
  print('this works');
  console.log('or does it!?');
}

function draw() {
  background(0);
  ellipse(-200,-200,50,50);
  rect(50,50,100,100);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(20,50);
}

// NEXT VIDEO: 1.4: Color - p5.js Tutorial
