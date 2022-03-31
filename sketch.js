
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var radius = 45
var ball;
var groundobj, leftside,rightside

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,200,20,ball_options)
	World.add(world,ball)
	groundobj = new Ground(width/2,690,width,10)
	leftside = new Ground(900,630,20,120)
	rightside = new Ground(1100,630,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, radius,radius )
  groundobj.show()
	leftside.show()
	rightside.show()

  drawSprites();
 
}
	function keyPressed(){
		if(keyCode===UP_ARROW){
			Matter.Body.applyForce(ball, ball.position, {x:79,y:-79})
		}
	}


