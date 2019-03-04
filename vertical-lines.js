function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  for (var i = 20; i <= 380; i = i + 10) {
    var startX = i;
    var endX = i;
    line(startX, 20, endX, 380);
  }
}
