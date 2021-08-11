# Size Parameters
w, h = 750, 1000

# Circle Size
cs = [30, 35, 40, 45, 50]

# Color Palette
#colors = [(173, 221, 206), (112, 174, 152), (230, 182, 85), (240, 163, 94), (202, 126, 141)]
#colors = [(56, 144, 143), (178, 235, 224), (94, 150, 174), (255, 191, 163), (224, 137, 99)]
colors = [(204, 153, 201), (158, 193, 207), (158, 224, 158), (253, 253, 151), (254, 177, 68), (255, 102, 99)]

def setup():
    size(w, h)
    
    background(250, 253, 243)
    
    # Take advantage of resolution
    pixelDensity(2)

    for c in range(1500):
        center_x = random(w/10, w - w/10)
        center_y = random(h/10, h - h/10)
        num = int(random(5))
        col = int(random(6))
        cs_rand = cs[num]
        col_rand = colors[col]
        
        # Draw Shadow
        #noStroke()
        #fill(15, 15, 15, 5)
        #for i in range(30):
        #    circle(center_x + 20, center_y + 20, cs_rand - i*5)
        
        # Draw Circle
        stroke(30, 30, 30)
        fill(col_rand[0], col_rand[1], col_rand[2], random(150, 255))
        circle(center_x, center_y, cs_rand)
        
    
    seed = int(random(10000))
    save("Examples/palette3NoShadow-" + str(seed) + ".png")
