class rope {
    constructor(body1,body2,x1,y1) {
        var options = {
          bodyA : body1,
          bodyB : body2,
          point:{x:x1,y:y1}
        }
        this.x1 = x1;
        this.y1 = y1;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x+this.x1,pointB.y+this.y1);
            
        } 
    }