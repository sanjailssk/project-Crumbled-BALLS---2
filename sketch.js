const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;
var paper1,ground1,box1,box2,box3,dustbinIMG;

function preload(){
	dustbinIMG = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1550,600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(640,580,2000,15);
	paper1 = new Paper(90,200,27);
	box1 = new DustBin(1250,570,150,15);
	box2 = new DustBin(1178,484,15,179);
	box3 = new DustBin(1326,484,20,179);

	Engine.run(engine);
  
}


function draw() {
  background(255);
 
  box3.display();
  box1.display();
  box2.display();
  paper1.display();
  ground1.display();
  image(dustbinIMG, 1250, 484, 160, 180);
}

function keyPressed(){
 if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:190,y:-170});
 }
}

