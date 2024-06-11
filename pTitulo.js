var s1 = function ( sketch ) {

  let lux;
  var graficaCanvas;
  var pwindow;



  sketch.setup = () => {

    let graficaCanvas = sketch.createCanvas(windowWidth,150);
  
    graficaCanvas.position(0,0);
    graficaCanvas.parent('titulo1');


    sketch.background (255);
    sketch.frameRate(8);
    sketch.rectMode(sketch.CENTER);

  };



  sketch.draw = () => {

    sketch.fill(0)
    sketch.rect(400,200,lux,400)

   

    let step = sketch.frameCount % 30;

    lux = sketch.random(windowWidth);

    sketch.applyMatrix( lux/ step,0, 0, lux / step,400,200);

    sketch.fill(250)
    sketch.circle(lux,lux,lux)

    sketch.fill(100)
    sketch.textSize(lux)
    sketch.text("STUDIO",40,30,lux,lux);
    sketch.text.nostroke;
    sketch.fill(50);
    sketch.text("~",10,7,lux,lux);
    sketch.fill(200);
    sketch.text("STUDIO",lux,0,lux,lux);

    sketch.stroke(400,200,50,lux)
    sketch.fill(10);
    sketch.noStroke(0)
  };
};

var myp51 = new p5(s1);{
 };


