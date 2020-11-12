class Plinko{
    constructor(x,y,diameter) {
        var options = {
         
            isStatic: true
        }
    
        this.diameter = diameter
this.bob=Bodies.circle(x,y,this.diameter/2,options)
World.add(world,this.bob)
    }
display(){
    var pos =this.bob.position;
   

    fill("white")
ellipse(RADIUS);
    ellipse(pos.x, pos.y, this.diameter,this.diameter);
  }
}



    
