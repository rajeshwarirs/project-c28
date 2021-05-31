
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree;
var stone,mango;
var slingshot;
var boy;
var gameState = "onSling";

function preload()
{
	
}

function setup() {
	createCanvas(800, 700)

	engine = Engine.create();
	world = engine.world;

    var boy= new Boy(200,650,50,80);

	var ground = new Ground(400,650,800,30);
	var tree = new Tree(600,600,200,100);

	var stone = new Stone(100,600,10);
    var mango = new Mango(50,80,6);

    var slingshot = new SlingShot(stone.body,boy.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
   tree.display();
   stone.display();
   mango.display();
   slingshot.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
