class Drops{
    constructor(x,y){
        var options = {
            'friction':0.1,
            'restitution':0.1
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
    }
}
updateY(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}
showDrops(){
    fill("Green");
    ellipseMode(CENTER);
    ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
}