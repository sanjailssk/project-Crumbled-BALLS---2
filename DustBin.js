class DustBin {
    constructor(x,y,width,height){
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body,this.image);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      stroke("white");
      imageMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }