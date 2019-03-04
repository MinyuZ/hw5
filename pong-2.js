var rad = 5;
var xpos, ypos;

var xspeed = 0.8; 
var yspeed = 0.5;  

var xdirection = 1;
var ydirection = 1; 

var scorePlayer = 0;
var scoreCp =0;

function setup() {
  createCanvas(500, 400);
  frameRate(15);
  ellipseMode(RADIUS);
  xpos = width / 2;
  ypos = random(50,350);
}

function draw() {
  background(0);
	
	for (var i = 20; i < 361; i = i + 20) {
	strokeWeight(5);
	stroke(255);
	line(250,i,250,i+8);
		
	line(40,mouseY-10,40,mouseY+10);
    
	xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

			
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  
  if ( xpos<43 && xpos>41 && mouseY< ypos+10 && mouseY> ypos-10) {
    xdirection *= -1;    
  }
    
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
 
  ellipse(xpos, ypos, rad, rad);
    
  if ( xpos < rad) {
    scoreCp = scoreCp + 1;
  }
  
  if ( xpos > width - rad) {
    scorePlayer = scorePlayer + 1;
  }
    
  textSize(64);  
  fill(255);
  text( scorePlayer, 150, 80);
  text( scoreCp, 300,80);
  

 }
}
