function Box(x, y, w, h,r,g,b) {
  var options = {
    friction: 0.3,
    restitution: 0.4
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(r,g,b);
    rect(0, 0, this.w, this.h);
    pop();
  }

}
