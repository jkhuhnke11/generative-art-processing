class Particle{
  constructor(args){
    let def = {
      p: createVector(0,0),
      v: createVector(random([-1,0,1]),random([-1,1])),
      a: createVector(0,0),
      r: 30,
      sinDiv: random(30,80),
      randomId: int(random(50000)),
      color: color('white'),
      targetColor: color('white')
    }
    Object.assign(def,args)
    Object.assign(this,def)
  }
  draw(mainGraphics){
    mainGraphics.push()
      mainGraphics.translate(this.p)
      mainGraphics.fill(this.color)
      mainGraphics.ellipse(0,0,this.r,this.r)
      if (random()<0.99){
        mainGraphics.circle(random(-0.92,0.92)*this.r,random(-0.92,0.92)*this.r,this.r/8)
      }
    mainGraphics.pop()
  }
  update(){
    this.p.add(this.v)
    this.v.add(this.a)
    this.v.mult(0.9995)
    this.v.x+=sin(this.p.x/(100+this.randomId%5))/this.sinDiv
    this.r*=0.99
    if ((frameCount+this.randomId) % 500==0){
      this.targetColor = random(colors)
    }
    this.color = lerpColor(color(this.color),color(this.targetColor),0.02)
  
  }
}
