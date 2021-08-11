let particles = []
//let colors = "FDCA40-f7b2b7-f7717d-de639a-7f2982-16001e-fcfcfc-f7567c-fffae3-88e1d9-5d576b".split("-").map(a=>"#"+a)
//let colors = "fff-fff-2176ff-33a1fd-fdca40-f79824-f72585-7209b7-3a0ca3-4361ee-4cc9f0".split("-").map(a=>"#"+a)
let colors = "16A085-27AE60-2980B9-8E44AD-2C3E50-F1C40F-E67E22-E74C3C".split("-").map(a=>"#"+a)
let mainGraphics
let canvasTexture

function setup() {
  colors=colors.concat(colors).concat(['#2176FF'])
  createCanvas(1080,1080);
  mainGraphics = createGraphics(width,height)
  canvasTexture = loadImage("canvas.jpg")
  background(100);
  pixelDensity(2)
  fill(0)
  rect(0,0,width,height)
  mainGraphics.noStroke()
  let gridSpan = random(50,66)
  for(var x=0;x<=width;x+=gridSpan){
    for(var y=0;y<=height;y+=gridSpan){
      particles.push(new Particle({
        p: createVector(x,y),
        color: random(colors),
        r: random([1,5,5,10,10,20,40,40,80]),
        targetColor: random(colors)
      }))
    }
  }
}

function draw() {
  particles.forEach(p=>{
    p.update()
    p.draw(mainGraphics)
  })
  particles = particles.filter(p=>p.r>0.001)
  image(mainGraphics,0,0)
  push()
    blendMode(MULTIPLY)
    image(canvasTexture,0,0)
  pop()
  // ellipse(mouseX, mouseY, 20, 20);
}
