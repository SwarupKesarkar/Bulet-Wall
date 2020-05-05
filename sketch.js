
var engine, world;
var bullet, wall, thickness;
var speed, wieght, deformation, value, thickness, thicknessstriple, inWall;

function setup(){
    var canvas = createCanvas(1600,400);

    speed = random(223, 321);
    wieght = random(32, 52);

    bullet = createSprite(20, 200, 30, 20);
    bullet.shapeColor = "white";
    
    wall = createSprite(1200, 200, thickness, 200)
    wall.shapeColor = rgb(80, 80, 80)
    
    thickness = random(22, 83);

    thicknesstriple = thickness * thickness * thickness;

    inWall = createSprite(1150, 200, 50, 200);
    inWall.visible = false;
}

function draw(){
    background(0);

    bullet.velocityX = speed;
    if (bullet.isTouching(inWall))
    {
     bullet.velocityX = 0;
     deformation = 0.5 * wieght * speed * speed;
     value = deformation / thicknesstriple;
     text("destruction: " + value, 750, 200);
     if (value > 10)
     {
      bullet.shapeColor = "red"; 
     }
     
     if (value < 10)
    {
     bullet.shapeColor = "green"; 
    }
    }

    
    drawSprites();
   
}