let noiseMax = 1;
let zoff = 0;

let ca, cb;

let ox, oy;

let MAX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
  ca = color("#CD295A");
  cb = color("#38ADAE");


  ox = width / 2;
  oy = height;

  MAX = width > height ? width : height;

  noFill();
  background("#E7ECF2");
}

function draw() {
  // background(230);
  
  stroke(lerpColor(ca, cb, abs(sin(zoff * 100))));
  push();
  translate(ox, oy);
  beginShape();
  for (let t = 0; t < 360; t++) {
    let xoff = map(cos(t), -1, 1, 0, noiseMax);
    let yoff = map(sin(t), -1, 1, 0, noiseMax);

    let n = noise(xoff, yoff, zoff);

    let r = map(n, 0, 1, 0, height * 1.5);
    let x = r * cos(t);
    let y = r * sin(t);

    // let c = lerpColor(ca, cb, n);

    vertex(x, y);
  }
  endShape(CLOSE);

  zoff += 0.005;
}
