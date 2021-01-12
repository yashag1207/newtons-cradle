
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(600, 300);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
var render = Render.create({
element:document.body,
engine:engine,
option:{
  width:1200,
  height:700,
  wireframes:false
}
})
;

rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0)
rope3=new rope(bob3.body,roof.body,0, 0)
rope4=new rope(bob4.body,roof.body,bobDiameter*1, 0)
rope5=new rope(bob5.body,roof.body,bobDiameter*2, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  roof.display();
  
  
  drawSprites();

}

function KeyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  }
}

function drawLine(){
  bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);


}

