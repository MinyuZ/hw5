function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(255);
  for (var l = 10; l <= 40; l = l + 10) {
    for (var x =50; x<= 350; x = x + 50){
    noFill();
    rect(x, 200, l, l);
    }
  }
  
}
