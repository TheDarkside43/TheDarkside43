var box;















function setup() {
  createCanvas(800,800);
  box=createSprite(400,400,30,30);

}

function draw() 
{
  background("#0000CD");
 
if(keyIsDown(RIGHT_ARROW)){
box.position.x = box.position.x+5;
background("#5F9EA0")
}
 
if(keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x-5;
  background("#B22222")
  }
 
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y-5;
    background("#4B0082")
    }
 
    if(keyIsDown(DOWN_ARROW)){
      box.position.y = box.position.y+5;
      background("#00FF00")
      }
 
 
 
 
 
 
 
    drawSprites();



}




