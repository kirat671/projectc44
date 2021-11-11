var Zombie1, Szombie2, Szombie3, Bzombie;
var armyman, armymanImg; 
var backGround, backgroundImg;
var zombieG;
var Bullet, BulletImg;
var heart1,heart2,heart3,heart1Img, heart2Img, heart3Img;
var life = 4
var sheartImg, shootgunImg, sheart;
var klkl;

function preload(){
  backgroundImg = loadImage("back.jpg");
  Zombie1 = loadImage("zombie.png")
  Szombie2 = loadImage("level1Zombie.png")
  Szombie3 = loadImage("level2Zombie.png")
  Bzombie = loadImage("BossZombie.png")
  armymanImg = loadImage("Armyman.png")
  heart1Img = loadImage("heart.png")
  heart2Img = loadImage("heart.png")
  heart3Img = loadImage("heart.png")
  BulletImg = loadImage("bullet.png")
  sheartImg = loadImage("Sheart.png")
  shootgunImg = loadImage("shootgun.png")

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  backGround = createSprite(660,360)
  backGround.addImage("Safe",backgroundImg);
  backGround.scale = 4.8;

  
  armyman = createSprite(100,350)
  armyman.addImage("safety",armymanImg)
  armyman.scale = 0.8;

  heart1 = createSprite(1100, 50,30, 30)
  heart1.addImage("life1",heart1Img)
  heart1.scale = 0.2;

  heart2 = createSprite(1150, 50,30, 30)
  heart2.addImage("life2",heart2Img)
  heart2.scale = 0.2;

  heart3 = createSprite(1200, 50,30, 30)
  heart3.addImage("life3",heart3Img)
  heart3.scale = 0.2;

  armyman.debug = true;
  armyman.setCollider("circle",10,20,82)

  shoot = new Group();
  things = new Group();
  zombieG = new Group();
}

function draw() {
 background(139, 139, 139)
  spawnZombies();
  spawnSheart();
  spawnShootgun();
  
  
if(keyDown(UP_ARROW)){
armyman.y = armyman.y -3

}

if(keyDown(DOWN_ARROW)){
  armyman.y = armyman.y +3
    
}

if(zombieG.isTouching(armyman)){
zombieG.destroyEach();
life = life -1;
if (life === 3){
  heart3.visible = false
}

if (life === 2){
  heart2.visible = false
}

if (life === 1){
  heart1.visible = false
}
}

if(things.isTouching(armyman)){
  things.destroyEach();
  
  }



if(keyWentDown("SPACE")){
Bullet = createSprite(340,220, 90, 20);
Bullet.velocityX = +4
Bullet.y = armyman.y-2


}

if (keyWentUp("SPACE")){
armyman.changeAnimation("safety")

}

console.log(spawnZombies);

  drawSprites();
  }
  
  function spawnZombies(){
    if (frameCount % 120 === 0){
      var zombie = createSprite(1200,random(40,680),10,40);
      zombie.velocityX = -2;
      zombieG.add(zombie)

       //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: zombie.addImage(Zombie1);
                 break;
         case 2: zombie.addImage(Szombie2);
                 break;
         case 3: zombie.addImage(Szombie3);
                 break;
         //case 4: zombie.addImage(Bzombie);
                 //break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
      zombie.scale = 0.5;
      zombie.lifetime = 600;
      
      //add each obstacle to the group
       //obstaclesGroup.add(obstacle);
    }
   }

   function spawnSheart(){
    if (frameCount % 620 === 0){
      var sheart = createSprite(1200,random(40,680),10,40);
      sheart.velocityX = -2;
      things.add(sheart)

       //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: sheart.addImage(sheartImg);
                 break;
         default: break;
       }
       sheart.lifetime = 600
       sheart.scale = 0.4;

      }
    }

    function spawnShootgun(){
      if (frameCount % 520 === 0){
        var shootgun = createSprite(1200,random(40,680),10,40);
        shootgun.velocityX = -2;
        shoot.add(shootgun)
  
         //generate random obstacles
         var rand = Math.round(random(1,3));
         switch(rand) {
           case 1: shootgun.addImage(shootgunImg);
                   break;
           default: break;
         }
         shootgun.lifetime = 600;
         shootgun.scale = 0.4;
        }
      }
  

  
  



