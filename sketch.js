var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
movingRect.shapeColor = "green"
fixedRect.shapeColor = "green"
}
function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if (isTouching(movingRect,fixedRect)) {


  movingRect.shapeColor = "red"
}
else {
  movingRect.shapeColor = "green"
}
  drawSprites();
}


