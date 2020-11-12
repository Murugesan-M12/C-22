//create the components
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies; 

var engine, world;
var ground, ball;

function setup() {
  createCanvas(800,400);
 //the physics engine code- computer's memory
engine= Engine.create();
world= engine.world;
var ground_options= {
  isStatic: true
}
ground= Bodies.rectangle(400,380,800,20, ground_options);
World.add(world,ground);
console.log(box);

var ball_options= {
 restitution: 0.8
}
ball= Bodies.circle(400,80,20, ball_options);
World.add(world,ball);
console.log(ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

 // equivalent p5 code
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}