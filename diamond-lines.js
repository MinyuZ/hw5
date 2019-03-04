function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  for (var i = 10; i <= 180; i = i + 10) {
    var startX = 195;
    var startY = 0;
    var endX = 205;
    var endY =0;
    line(startX-i, startY+i, endX+i, endY+i);
  }
  
  for (var i = 10; i <= 180; i = i + 10) {
    var startX = 15;
    var startY = 180;
    var endX = 385;
    var endY =180;
    line(startX+i, startY+i, endX-i, endY+i);
  }
  
}
