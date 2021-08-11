PImage img;

void setup() {
  img = loadImage("spin3.JPG"); //change this to whatever the file name of your image is
  size(408, 534);
  
  save("Glitch.png"); 
}

void draw() {
  background(255);
  loadPixels();  
  for (int y = 0; y<height; y+=1 ) {
    for (int x = 0; x<width; x+=1) {
      int loc = x + y*img.width;
      float r = red (img.pixels[loc]);
      float g = green (img.pixels[loc]);
      float b = blue (img.pixels[loc]);
      float av = ((r+g+b)/3.0);

    pushMatrix();
    translate(x,y);
      stroke(r,g,b);
      if (r > 100 && r < 255) {
        line(0,0,(av-255)/3,0); //change these values to alter the length. The closer to 0 the longer the lines. 
       // you can also try different shapes or even bezier curves instead of line();
      }
    popMatrix(); 
      
    }
  }
println("done");
noLoop();
}
