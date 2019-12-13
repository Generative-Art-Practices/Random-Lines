function setup () {
  createCanvas(windowWidth, windowHeight);
  background("#C42847");
  noLoop();
}

function draw () {
  const maxWidth = windowWidth;
  for (let i = 0; i < 80; i++){
    // Configuring this stroke.
    let randomNumber = random(maxWidth);
    let randomWidth = random(10);
    stroke('#2C2C54');
    strokeWeight(randomWidth);
    
    // Creating this stroke.
    line(0, i * 20, 10 + randomNumber, 0);
    
    // let cnv = createCanvas(windowWidth, windowHeight);
    // save(cnv, 'myCanvas.jpg');
  }
}