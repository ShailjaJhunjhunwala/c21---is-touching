var fixedRect, movingRect;
var ball,paddle

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ball = createSprite(100,100,20,20)
  ball.shapeColor = "red"
  ball.velocityX = 5
  paddle = createSprite(600,100,50,50)
  paddle.shapeColor = "red"
  paddle.velocityX = -5
}


function draw() {
  background(0,0,0);  

 if(isTouching(movingRect,fixedRect)){
   movingRect.velocityY = movingRect.velocityY * (-1);
   fixedRect.velocityY = fixedRect.velocityY * (-1);
 }
if(isTouching(ball,paddle)){
  ball.velocityX = ball.velocityX * (-1)
  paddle.velocityX = paddle.velocityX * (-1)
}
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 
return true;
}
else{
  return false
}

  

}