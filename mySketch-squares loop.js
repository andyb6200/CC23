function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  const squareSize = width / 3;

  for (let x = squareSize / 2; x < width; x += squareSize) {
    for (let y = squareSize / 2; y < height; y += squareSize) {

      if ((x + y) % (2 * squareSize) < squareSize) {
        fill(255, 255, 255); 
      } else {
        fill(255, 0, 0); 
      }

      rect(x, y, squareSize, squareSize);
    }
  }
}
