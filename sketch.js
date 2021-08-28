var Car
var Car2
var truck
var truckGroup
var life = 100;

function preload(){
  mainCarImg = loadImage("CAR_1.png")
  Car2Img = loadImage("CAR_2.png")
  roadImg = loadImage("ROAD.jpg")
  truckImg = loadImage("TRUCK.png")
}

function setup() {
  createCanvas(1500,600);
  road = createSprite(400,50,700,50)
  road.addImage("ROAD",roadImg)
  road.velocityX = -5
  road.scale= 3.5
 car = createSprite(450, 520, 50, 50);
 car.addImage("mainCar",mainCarImg)
 car.scale = 0.30

 car2 = createSprite(400, 450, 50, 50);
 car2.addImage("car2",Car2Img)
 car2.scale = 0.8

 truckGroup = createGroup()

 
}


function draw() {
  background(255,255,255);  
  if (road.x<250){
    road.x = 400
  }
  if (truckGroup.isTouching(car)){
    console.log ("TOUCHED!")
    life = life-1

  }
  if (life<0 ) {
    textSize(60)
    car.destroy()
    fill ("blue")
    text ("GAMEOVER!,400,400")
  }
  keyControls();
  spawnObstacles();
  drawSprites();
  textSize(30)
  fill ("blue")
  text ("LIFE"+life,400,100)
}

function keyControls (){
  if (keyDown(UP_ARROW)){
    car.y = car.y-2
  }

  if (keyDown(DOWN_ARROW)){
    car.y = car.y+2
  }
}

function spawnObstacles (){
if (frameCount%100==0){
  truck = createSprite (10,random(400,500),20,20)
  truckGroup.add(truck)
  truck.addImage(truckImg)
 truck.scale= random(0.05,0.5)
 truck.velocityX = random(1,5)
}
}



function isTouching(object1, object2) {


  if (object1.x - object2.x < object2.width / 2 + object1.width / 2
    && object2.x - object1.x < object2.width / 2 + object1.width / 2
    && object1.y - object2.y < object2.height / 2 + object1.height / 2
    && object2.y - object1.y < object2.height / 2 + object1.height / 2) {


    return true;

  }
  else {
    return false;
  }
}
