var fixedRect, movingRect;
var smallrec,bigrec;
var rec1,rec2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  smallrec = createSprite(200,100,40,30);
  smallrec.shapeColor = "green";
  smallrec.debug = true;
  bigrec = createSprite(300,100,80,30);
  bigrec.shapeColor = "green";
  bigrec.debug = true;
  rec1 = createSprite(700,100,40,30);
  rec1.shapeColor = "blue";
  rec1.debug = true;
  rec1.velocityY=2
  rec2 = createSprite(700,700,80,30);
  rec2.shapeColor = "blue";
  rec2.debug = true;
  rec2.velocityY=-2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,smallrec)){
    movingRect.shapeColor = "red";
  smallrec.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    smallrec.shapeColor = "green";
  }
  bounceOff(rec1,rec2);
  drawSprites();
}