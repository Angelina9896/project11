var path,pathImg1,edges 
var runner,runnerImg

function preload(){
  //pre-load images
  pathImg1=loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png")  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner=createSprite(200,200)
  runner.addImage("running",runnerImg_running)
  path.velocityY=5
  
  edges=createEdgeSprites();
}
    
function draw() {
  background("white");

  
}

function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  ground.velocityX=-4
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  //stop trex from falling down
  trex.collide (ground)

  drawSprites();
}