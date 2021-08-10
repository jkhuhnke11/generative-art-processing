let colors = "FF5A5F-F0F757-F92A82-86bbd8-f6ae2d-f26419-ebe9e9-f3f8f2-3581b8-fcb07e-dee2d6".split("-").map(a=>"#"+a); 

let canvasTexture;  

function preload(){

  canvasTexture = loadImage("canvas.jpeg"); 
}
function setup() {
  
  createCanvas(1000,1000);
  background(100);
}

function draw() {
  
  push(); 
    // fill("#050a19");
    rect(0,0,width,height); 
    let count = 40; 
    translate(width/2,height/2); 
    rotate(frameCount/1000); 
    noStroke(); 
    blendMode(MULTIPLY); 
    rectMode(CENTER); 
    for(let i=0;i<count;i++){  
      for(var k=0;k<3;k++){
        
        let r = 450+sin(i/50)*250; 
        push(); 
          rotate(i*2*PI/count+noise(i*50,k*500,frameCount/100)*0.2);
          translate(+sin(k+i+frameCount/100)*r/1.8,
                     +cos(k+i+frameCount/100)*r/1.8);
          fill(colors[int(k+i+random(0,1)+noise(i,k)/10 )%colors.length]);
          let func = (((i+k)%2==0)?ellipse:rect);
          rotate(sin( (i+k)*frameCount/5000));
          func(0,0, (k*150+5)*noise(i*100,k*100,frameCount/100)*noise(i*100,k*100,frameCount/50)  );
         
          if ((k+i)%4==0){ 
            stroke(colors[(k+i+1)%colors.length]);
            noFill();
            strokeWeight(2);
            rectMode(CORNER);
            rect(-30,-30,(k*400+30),k*30+30,50);

            noStroke(); 
            fill(colors[(k+i+1)%colors.length]); 
            circle(0,0,5);  
          }
          if ((k+i)%20==0){ 
            stroke(0); 
            rotate(PI); 
            for(var m=0;m<50;m++){
              translate(0,10); 
              strokeWeight(m%10==0?3:1); 
              line(0,0,m%10==0?20:5,0); 
            }
          }
        pop(); 
      } 
    }
  pop(); 
  
  
  push(); 
    blendMode(MULTIPLY); 
    image(canvasTexture,0,0); 
  pop(); 
}
