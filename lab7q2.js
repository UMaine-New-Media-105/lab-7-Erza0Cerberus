let startSquareX = 0;
let startSquareY = 0;
let squareSize = 40;
let circleDiameter = 30;
let circle2Diameter = 5;

function setup() {
  createCanvas(400, 400);

  background(300);

  for (let x = 0; x < width; x += 60) {
    for (let y = 0; y < height; y += 60) {
      
      fill("seashell");
      rect(0, 0, 40); // A bounding box for our bear.
      ellipse(20, 20, 30); // Head.

      rect(0, 0, 40); // A bounding box for our bear.
      ellipse(20, 20, 30); // Head.

      // Baby bear.
      rect(40, 0, 40);
      ellipse(60, 20, 30);

      rect(80, 0, 40);
      ellipse(100, 20, 30);

      rect(startSquareX + 40 * 3, startSquareY, squareSize);
      ellipse(startSquareX + 20 * 7, startSquareY + 20, circleDiameter);

      rect(startSquareX + 40 * 4, startSquareY, squareSize);
      ellipse(startSquareX + 20 * 9, startSquareY + 20, circleDiameter);

      rect(startSquareX + 0, startSquareY + 40, squareSize);
      ellipse(startSquareX + 20, startSquareY + 60, circleDiameter);

      rect(startSquareX + 40, startSquareY + 40, squareSize);
      ellipse(startSquareX + 20 * 3, startSquareY + 60, circleDiameter);

      rect(startSquareX + 80, startSquareY + 40, squareSize);
      ellipse(startSquareX + 20 * 5, startSquareY + 60, circleDiameter);

      rect(startSquareX + 120, startSquareY + 40, squareSize);
      ellipse(startSquareX + 20 * 7, startSquareY + 60, circleDiameter);

      rect(startSquareX + 160, startSquareY + 40, squareSize);
      ellipse(startSquareX + 20 * 9, startSquareY + 60, circleDiameter);

      fill("mistyrose");

      rect(startSquareX + 0, startSquareY + 80, squareSize);
      ellipse(startSquareX + 20, startSquareY + 100, circleDiameter);

      rect(startSquareX + 40, startSquareY + 80, squareSize);
      ellipse(startSquareX + 20 * 3, startSquareY + 100, circleDiameter);

      rect(startSquareX + 120, startSquareY + 80, squareSize);
      ellipse(startSquareX + 20 * 3, startSquareY + 100, circleDiameter);

      rect(startSquareX + 80, startSquareY + 80, squareSize);
      ellipse(startSquareX + 20 * 7, startSquareY + 100, circleDiameter);

      rect(startSquareX + 160, startSquareY + 80, squareSize);
      ellipse(startSquareX + 20 * 9, startSquareY + 100, circleDiameter);

      fill("peachpuff");

      rect(startSquareX + 0, startSquareY + 120, squareSize);
      ellipse(startSquareX + 20, startSquareY + 140, circleDiameter);

      rect(startSquareX + 40, startSquareY + 120, squareSize);
      ellipse(startSquareX + 20 * 3, startSquareY + 140, circleDiameter);

      rect(startSquareX + 80, startSquareY + 120, squareSize);
      ellipse(startSquareX + 20 * 5, startSquareY + 140, circleDiameter);

      rect(startSquareX + 120, startSquareY + 120, squareSize);
      ellipse(startSquareX + 20 * 7, startSquareY + 140, circleDiameter);

      rect(startSquareX + 160, startSquareY + 120, squareSize);
      ellipse(startSquareX + 20 * 9, startSquareY + 140, circleDiameter);

      rect(startSquareX + 0, startSquareY + 160, squareSize);
      ellipse(startSquareX + 20, startSquareY + 180, circleDiameter);

      rect(startSquareX + 40, startSquareY + 160, squareSize);
      ellipse(startSquareX + 20 * 3, startSquareY + 180, circleDiameter);

      rect(startSquareX + 80, startSquareY + 160, squareSize);
      ellipse(startSquareX + 20 * 5, startSquareY + 180, circleDiameter);

      rect(startSquareX + 120, startSquareY + 160, squareSize);
      ellipse(startSquareX + 20 * 7, startSquareY + 180, circleDiameter);

      rect(startSquareX + 160, startSquareY + 160, squareSize);
      ellipse(startSquareX + 20 * 9, startSquareY + 180, circleDiameter);
    }
  }
}
