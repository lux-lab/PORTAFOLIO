

let lux;
var designCanvas;

function setup() {
  designCanvas=createCanvas(800,400);
  designCanvas.position(10,500);

  rectMode(CENTER,)
  background(lux,150,140);
  frameRate(8)
}

function draw() {

  let step = frameCount % 30;
  lux= random(800)


 applyMatrix( lux/ step,0, 0, lux / step, 400,200);
  fill/(300,100,20)
  stroke(800,180,0,lux)
  circle(2000,50,lux)
  fill(0,0,100)
  rect(0,0,0,100);
  noStroke(0,0,0)
   fill(1000,300,100,)
text ('DESIGN',20,50, lux,lux )
  noStroke()
  fill(100,129,300,)
text ('DISEÑO',lux,70, lux, lux)


}
