
let lux;
var graficaCanvas;



function setup() {
  graficaCanvas = createCanvas(800,400);
  graficaCanvas.position(10,285);

  rectMode(CENTER,);
  background(lux,150,140);
  frameRate(8);


}

function draw() {

  let step = frameCount % 30;
  lux= random(800)

  applyMatrix( lux/ step,0, 0, lux / step, 400,200);
  stroke(2000,80,50,lux)
  circle(100,50,)
  fill(0,0,100)
  rect(0,0,0,100);
  noStroke(0,0,0)
  fill(100,0,50,)
text ('GRÁFICA',50, 80, lux, lux)
  noStroke()
  fill(2000,180,200,)
text ('GRÁFICA',20,50, lux, lux)


}
