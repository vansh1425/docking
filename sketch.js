var backgroundImg;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var issImg;
var issst,spacecraft;
var hasDocked=false;
function preload(){
backgroundImg =loadImage("docking-undocking/spacebg.jpg");
issImg = loadImage("docking-undocking/iss.png");
spacecraft1 =loadImage("docking-undocking/spacecraft1.png");
spacecraft2 =loadImage("docking-undocking/spacecraft2.png");
spacecraft3 =loadImage("docking-undocking/spacecraft3.png");
spacecraft4 =loadImage("docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  issst =createSprite(230, 130);
  issst.addImage(issImg);
  issst.scale=0.7;
  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale=0.1;
}

function draw() {
  background(backgroundImg);  
  //spacecraft.velocityY=0;
  //spacecraft.velocityX=0;
  
  spacecraft.addImage(spacecraft1);
  spacecraft.scale=0.1;
  if(!hasDocked ){
    spacecraft.x=spacecraft.x+random(-1,1);
  if(keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-2;
    spacecraft.addImage(spacecraft2);
  /*spacecraft.velocityY=-2;
   
   
    }else{
      spacecraft.addImage(spacecraft1);
   spacecraft.scale=0.1;*/
    }
    if(keyDown(DOWN_ARROW)){
      //spacecraft.velocityY=2;
     // spacecraft.y=spacecraft.y+2;
      spacecraft.addImage(spacecraft2);
      spacecraft.scale=0.1;    
    }
  
     if(keyDown(RIGHT_ARROW)){
      //spacecraft.velocityX=2;
      spacecraft.x=spacecraft.x+1;
      spacecraft.addImage(spacecraft3);
      spacecraft.scale=0.1;
       }
       if(keyDown(LEFT_ARROW)){
       // spacecraft.velocityX=-2;
       spacecraft.x=spacecraft.x-1; 
       spacecraft.addImage(spacecraft4);
        spacecraft.scale=0.1;
         }
        }    
        
    if(spacecraft.y <=(issst.y+70) && spacecraft.x <= (issst.x-10)){
     hasDocked=true;
     fill("red");
     text("Docking Successfull",120,500)
  }

  drawSprites();
}