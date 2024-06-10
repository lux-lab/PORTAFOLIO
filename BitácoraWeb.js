let currentShape;
let leftButton;
let rightButton;
let shape;
let shape1;
let shape2;
let shape3;
let shape4;
let shape5;
let shape6;
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;

function preload() {
  shape = loadModel('mandibula.obj', true);
  shape1 = loadModel('concha.obj', true);
  shape2 = loadModel('mar.obj', true); 
 

  img = loadImage('mandibula.jpg');
  img1 = loadImage('concha.jpg');
  img2 = loadImage('mar.jpg'); 
}

function setup() {
  createCanvas(windowWidth, 400, WEBGL);
 
  currentShape = shape;

  leftButton = createButton('<');
  leftButton.position(10, height / 2 - 15);
  leftButton.size(30, 30);
  leftButton.mousePressed(switchShapeToPrev);
  leftButton.style('background-color', 'transparent');
  leftButton.style('border', 'none');
  leftButton.style('color', 'black');
  leftButton.style('font-size', '20px');

  rightButton = createButton('>');
  rightButton.position(width - 40, height / 2 - 15);
  rightButton.size(30, 30);
  rightButton.mousePressed(switchShapeToNext);
  rightButton.style('background-color', 'transparent');
  rightButton.style('border', 'none');
  rightButton.style('color', 'black');
  rightButton.style('font-size', '20px');
}

function draw() {
  background(250);
  setTexture();
  noStroke();
  orbitControl();
  rotateZ(15.7);
  model(currentShape);
  
 
}

function setTexture() {
  if (currentShape === shape) {
    texture(img);
  } else if (currentShape === shape1) {
    texture(img1);
  } else if (currentShape === shape2) {
    texture(img2);
  } else if (currentShape === shape3) {
    texture(img3);
  } else if (currentShape === shape4) {
    texture(img4);
  } else if (currentShape === shape5) {
    texture(img5);
  } else if (currentShape === shape6) {
    texture(img6);
  }
}

function switchShapeToPrev() {
  if (currentShape === shape) {
    currentShape = shape6;
  } else if (currentShape === shape1) {
    currentShape = shape;
  } else if (currentShape === shape2) {
    currentShape = shape1;
  } else if (currentShape === shape3) {
    currentShape = shape2;
  } else if (currentShape === shape4) {
    currentShape = shape3;
  } else if (currentShape === shape5) {
    currentShape = shape4;
  } else if (currentShape === shape6) {
    currentShape = shape5;
  }
}

function switchShapeToNext() {
  if (currentShape === shape) {
    currentShape = shape1;
  } else if (currentShape === shape1) {
    currentShape = shape2;
  } else if (currentShape === shape2) {
    currentShape = shape3;
  } else if (currentShape === shape3) {
    currentShape = shape4;
  } else if (currentShape === shape4) {
    currentShape = shape5;
  } else if (currentShape === shape5) {
    currentShape = shape6;
  } else if (currentShape === shape6) {
    currentShape = shape;
  }
}

function resizeCanvas(){
  resizeCanvas(windowWidth,400)
  
}