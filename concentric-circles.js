function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  for (var d = 20; d <= 380; d = d + 20) {
    noFill();
    ellipse(200, 200, d);
  }
}
