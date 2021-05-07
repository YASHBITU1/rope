const Constraint = Matter.Constraint;
const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
var engine;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(200,200,200,25);

    ball1 = new ball(120,300,40);
    ball2 = new ball(160,300,40);
    ball3 = new ball(200,300,40);
    ball4 = new ball(240,300,40);
    ball5 = new ball(280,300,40);

	rope1 = new rope(ball1.body,roof1.body,-80,0);
	rope2 = new rope(ball2.body,roof1.body,-40,0);
  rope3 = new rope(ball3.body,roof1.body,0,0);
  rope4 = new rope(ball4.body,roof1.body,40,0);
  rope5 = new rope(ball5.body,roof1.body,80,0);

  var render = Render.create({
    element:document.body,engine:engine,options:{width:1200,height:700,wireFrames:false}
  })
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-25,y:-30})
  }
}

