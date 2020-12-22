var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 50, 50);
  wall = createSprite(725,200,50,200);
  wall.shapeColor = "blue"
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
}
function draw() {
  background(0);
  car.velocityX = speed;
  textSize(40)
  fill("orange")
  stroke("white")
  strokeWeight(2)
  text("CAR TEST",275,60)
  
  if(wall.x-car.x < wall.width/2+car.width/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation < 100){
      car.shapeColor = "green"
      textSize(30)
      fill("green")
      stroke("yellow")
      strokeWeight(3)
      text("low damage",300,300)
    }
    if(deformation>180){
      textSize(30)
      fill("red")
      stroke("yellow")
      strokeWeight(2)
      text("High damage",300,300)
     car.shapeColor = "red"
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow"
      textSize(30)
      fill("yellow")
      stroke("red")
      strokeWeight(2)
      text("medium damage",300,300)
    }
  }
  drawSprites();
}