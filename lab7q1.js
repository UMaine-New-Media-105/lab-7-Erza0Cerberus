let arrayOfColors = ["snow", "seashell", "mistyrose", "peachpuff", "darksalmon", "salmon", "coral", "tomato", "palevioletred"];
let xCord = 30
let yCord = 30
let offSet= 25
let x2cord= 37
let y2cord= 373
let offset2= 24

function setup() {
  createCanvas(400, 400);
  noLoop ();
}

function draw() {
  background(220);
  for (let i=0; i<15; i++){  //first line
    let randomColor = random(arrayOfColors);
    drawSprite (xCord, yCord, randomColor)
    xCord+=offSet;
    yCord+=offSet;
  }
    for (let i=0; i<15; i++){ //second line 
    let randomColor = random(arrayOfColors);
    drawSprite (x2cord, y2cord, randomColor)
    x2cord+=offset2;
    y2cord-=offset2;
  }
}

function drawSprite (x,y,color) { 
  push();
  fill(color)
  ellipse (x,y,30)
  pop();
}
