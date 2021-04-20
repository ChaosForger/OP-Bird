class Bird {
    constructor(x, y) {
      var options = {
          'restitution':1.0,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.circle(x, y,60,options);
      this.radius = 60
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("lightBlue");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };