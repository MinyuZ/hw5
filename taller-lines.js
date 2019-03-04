function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  for (var i = 10; i <= 380; i = i + 10) {
    var startX = 10;
    var endX = 10;
    var endY =10;
    line(startX+i, 0, endX+i, endY+2*i);
  }
  
}
