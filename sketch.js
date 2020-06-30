const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  fill("black");
  text("y:"+mouseY,50,75);
  text("x:"+mouseX,50,50);

  
  drawSprites();
}