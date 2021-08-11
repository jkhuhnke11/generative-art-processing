w, h = 1000, 1000
r = 650

cir_num = 100

# color palette
#colors = [(101, 46, 199), (222, 56, 200), (255, 211, 0)]
#bg = color(51, 19, 92)
colors = [(120, 152, 251), (92, 229, 213), (184, 251, 60)]
bg = color(0, 20, 55)

def setup(): 
    size(w, h)
    pixelDensity(2)
    background(bg)
    
    noFill()
    strokeWeight(2)
    
    for i in range(cir_num):  
        w_c = random(-r*0.1, r*0.1)
        h_c = random(-r*0.1, r*0.1)
        r_c = random(-r*0.1, r*0.1)
        num = int(random(3))
        ran_col = colors[num] 
        
        stroke(ran_col[0], ran_col[1], ran_col[2])
        circle(w/2+w_c, h/2+h_c, r+r_c)
    
    seed = int(random(5000))
    save("Examples/palette2" + str(seed) + ".png")
