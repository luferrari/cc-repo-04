function setup() {
  // Create canvas, set angle mode, etc.
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(76, 25, 37);
}

function draw() {
  noStroke();
  var c1 = color(227, 218, 255);
  var c2 = color(197, 137, 232);
  var c3 = color(150, 61, 90);

  var hours = map(hour() % 12, 0, 12, 0, 360);
  var minutes = map(minute(), 0, 60, 0, 360);
  var seconds = map(second(), 0, 60, 0, 360);
  var len = 30;
  var rad = 60;

  background(76, 25, 37, 15);
  translate(width / 2, height / 2 - rad / 2);

  fill(236, 255, 248);
  ellipse(0, 0, 16);

  // Do things while call clockhand()
  clockHand(hours, len, 48, c3);
  clockHand(minutes, len + rad, 48, c2);
  clockHand(seconds, len + rad * 2, 48, c1);

  clockText();
}

function clockHand(unit, handLength, handSize, handColor) {
  // Do parametric things
  // use second(), minute(), and hour() to get current time.
  // remember that hour() output a number between 0 and 24.

  var c0 = color(76, 25, 37);
  noFill();
  strokeWeight(handSize * .325);
  stroke(lerpColor(c0, handColor, .25));
  ellipse(0, 0, handSize * 1.25 + handLength * 2);

  noStroke();
  push();
  rotate(unit);
  fill(handColor);
  triangle(0, -handLength, -handSize / 2, -handLength - handSize + 5, handSize / 2, -handLength - handSize + 5);
  pop();
}

function clockText() {
  var hh = hour();
  var mm = minute();
  var ss = second();
  // shorthand unknown
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }
  
  fill(76, 25, 37);
  rect(-125, 200, 250, 50);
  fill(236, 255, 248);
  textSize(48);
  textAlign(CENTER);
  textFont("Courier New");
  text(hh + ":" + mm + ":" + ss, 0, 245);
}

// PALETTE
// color(76, 25, 37);
// color(150, 61, 90);
// color(197, 137, 232);
// color(227, 218, 255);
// color(236, 255, 248);