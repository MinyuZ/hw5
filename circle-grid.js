function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var i = 10; i <= 370; i = i + 20) {
    for (var y =25; y<= 370; y = y + 20){
    var x = 10;
    ellipse(x+i, y, 15);
    }
  }
  
}
