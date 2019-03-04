function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  for (var i = 20; i <= 380; i = i + 10) {
    line(200, 0, i, 380);
  }
}
