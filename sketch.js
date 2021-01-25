var INSTRUCTIONS = 5;

var CHARACTER = 2;
var MAP = 3;
var CLASSIC = 4;

var WIN = 6;
var LOSE = 7;
var START = 0;
var gameState = START;


var player1, player2, player3, player4;
var playerImg1, playerImg2, playerImg3;

var booyah, defeat, booyahImg, defeatImg;

var background1, background2, background3, background4, background5;
var backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5;

var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6;
var enemy1Img, enemy2Img, enemy3Img, enemy4Img, enemy5Img, enemy6Img;

var bulletPlace;
var enemy1BulletPlace, enemy2BulletPlace, enemy3BulletPlace, enemy4BulletPlace, enemy5BulletPlace, enemy6BulletPlace;
var bulletGroup, gunSound;
var enemyBulletGroup, enemyBulletGroup2, enemyBulletGroup3, enemyBulletGroup4, enemyBulletGroup5, enemyBulletGroup6;
var wallStop1, wallStop2, wallStop3, wallStop4, wallStop5, wallStop6;
var player1Health, playerHealthBar;
var enemy1Health, enemy2Health, enemy3Health, enemy4Health, enemy5Health, enemy6Health;
var start, startImg, start1, button, buttonImg;
var medkit, medkitImg, medCount, MedCount, info;



var display1, display2, display3, displayGroup;
var map1, map2, map3, map4, map1Img, map2Img, map3Img, map4Img, Map1, Map2, Map3, Map4, mapGroup;

var alive, aliveNo, kill, killNo;

var b, d;


var continueButton, cButtonImg;
var awmSound, cSound, gSound, guSound;

 function preload() {
  playerImg1 = loadImage ("player1.png");
  playerImg2 = loadImage ("player2.png");
  playerImg3 = loadImage ("player3.png");

  enemy1Img = loadImage ("1.png");
  enemy2Img = loadImage ("2.png");
  enemy3Img = loadImage ("3.png");
  enemy4Img = loadImage ("4.png");
  enemy5Img = loadImage ("5.png");
  enemy6Img = loadImage ("6.png");


  backgroundImg1 = loadImage ("factory.jpg");
  backgroundImg2 = loadImage ("bermuda2.jpg");
  backgroundImg3 = loadImage ("peak.jpg");
  backgroundImg4 = loadImage ("bermuda1.jpg");

  booyahImg = loadImage ("booyah.png");
  defeatImg = loadImage ("defeat.png");

  medkitImg = loadImage ("med.png");
  info = loadImage ("medkit.png");

  startImg = loadImage ("free fire.jpeg");

  map1Img = loadImage ("factoryMap.jpg");
  map2Img = loadImage ("ber2map.jpg");
  map3Img = loadImage ("peakMap.jpg");
  map4Img = loadImage ("ber1map.jpg");

  buttonImg = loadImage ("start.jpg");
 

  cButtonImg = loadImage ("tap.png");

  gunSound = loadSound ("gun.mp3");
  awmSound = loadSound ("awm.mp3");
 
  cSound = loadSound ("click.mp3");
  gSound = loadSound ("g.mp3");
  guSound = loadSound ("gu.mp3");



}

function setup () {
  createCanvas (1400, 550);

  bulletGroup = createGroup ();
  enemyBulletGroup = createGroup ();
  enemyBulletGroup2 = createGroup ();
  enemyBulletGroup3 = createGroup ();
  enemyBulletGroup4 = createGroup ();
  enemyBulletGroup5 = createGroup ();
  enemyBulletGroup6 = createGroup ();

  
  displayGroup = createGroup ();
  mapGroup = createGroup ();

  background1 = createSprite (700, 300, 1400, 600);
  background1.addImage ("background1", backgroundImg1);
  background1.addImage ("background2", backgroundImg2);
  background1.addImage ("background3", backgroundImg3);
  background1.addImage ("background4", backgroundImg4);
  background1.scale = 1.7;
  background1.visible = false;

  player1 = createSprite (400, 450, 50, 10);
  player1.addImage ("player1", playerImg1);
  player1.addImage ("player2", playerImg2);
  player1.addImage ("player3", playerImg3);
  player1.scale = 0.4;
  player1.visible = false;


  enemy1 = createSprite (7100, random (280, 450), 50, 10)
  enemy1.addImage ("enemy1", enemy1Img);
  enemy1.scale = 0.4;
  enemy1.visible = false;

  enemy2 = createSprite (10000, random (350, 450), 50, 10)
  enemy2.addImage ("enemy2", enemy2Img);
  enemy2.scale = 0.4;
  enemy2.visible = false;

  enemy3 = createSprite (12000, random (200, 450), 50, 10)
  enemy3.addImage ("enemy3", enemy3Img);
  enemy3.scale = 0.4;
  enemy3.visible = false;


  enemy4 = createSprite (7000, random (250, 450), 50, 10)
  enemy4.addImage ("enemy4", enemy4Img);
  enemy4.scale = 0.4;
  enemy4.visible = false;


  enemy5 = createSprite (9000, random (250, 400), 50, 10)
  enemy5.addImage ("enemy5", enemy5Img);
  enemy5.scale = 0.4;
  enemy5.visible = false;

  enemy6 = createSprite (7500, random (250, 400), 50, 10)
  enemy6.addImage ("enemy6", enemy6Img);
  enemy6.addImage ("enemy1", enemy1Img);
  enemy6.scale = 0.4;
  enemy6.visible = false;

  wallStop1 = createSprite (900, 300, 10, 1200);
  wallStop1.visible = false;
  wallStop2 = createSprite (1000, 300, 10, 1200);
  wallStop2.visible = false;
  wallStop3 = createSprite (1100, 300, 10, 1200);
  wallStop3.visible = false;
  wallStop4 = createSprite (1200, 300, 10, 1200);
  wallStop4.visible = false;
  wallStop5 = createSprite (1150, 300, 10, 1200);
  wallStop5.visible = false;
  wallStop6 = createSprite (950, 300, 10, 1200);
  wallStop6.visible = false;

  playerHealthBar = createSprite (600, 500, 200, 10);
  playerHealthBar.shapeColor = "white";
 
  medkit = createSprite (1800, random (250, 450), 50, 50);
  medkit.addImage (medkitImg);
  medkit.scale = 0.3;
  medkit.visible = false;

  start = createSprite (1000, 600, 1400, 500);
  //start.shapeColor = "red"
  start.addImage ("start1", startImg);
  start.scale = 1.5;
  start.visible = false;

  button = createSprite (1280, 510, 20, 10);
  button.addImage (buttonImg);
  button.scale = 4;
  button.visible = false;

  kill = createSprite (1350, 10, 100, 20);
  kill.shapeColor = "red";
 

  alive = createSprite (1250, 10, 100, 20);
  alive.shapeColor = "lightblue";
  

  b = createSprite (width / 2,100,50,10);
  b.addImage (booyahImg);
  b.scale = 2;
  b.visible = false;


  d = createSprite (width / 2,200,50,10);
  d.addImage (defeatImg);
  d.scale = 1;
  d.visible = false;
 



  enemy1Health = 200;
  enemy2Health = 200;
  enemy3Health = 200;
  enemy4Health = 200;
  enemy5Health = 200;
  enemy6Health = 200;
  player1Health = 200;
 

 

  medCount = 0;
  MedCount = 0;
 
  killNo = 0;
  aliveNo = 50;


 
  



}

function draw () {
  background (220);

  var booyahText = createDiv ("ARE YOU READY FOR ONE MORE ROUND")
  var booyahText2 = createDiv ("PRESS ctrl R TO PLAY AGAIN");
  var defeatText = createDiv ("DON'T WORRY, GO FOR ANOTHER ROUND");
  var defeatText2 = createDiv ("PRESS ctrl R TO TRY AGAIN");

  booyahText.position (350,150);
  booyahText.style ('font-size', '35px'); 
  booyahText.style ('color', 'white');
  booyahText2.position (500,200);
  booyahText2.style ('font-size', '25px');
  booyahText2.style ('color', 'white');

  defeatText.position (350,150);
  defeatText.style ('font-size', '35px'); 
  defeatText.style ('color', 'white')
  defeatText2.position (500,200);
  defeatText2.style ('font-size', '25px');
  defeatText2.style ('color', 'white');

  booyahText.hide ();
  booyahText2.hide ();
  defeatText.hide ();
  defeatText2.hide ();

  

  

  if (gameState === START) {
    background (0);

    if (frameCount% 45 === 0) {
      continueButton = createSprite (780, 490, 1, 1);
      continueButton.addImage (cButtonImg);
      continueButton.scale = 0.2;
      continueButton.lifetime = 30;
    }
    start.visible = true;
    //continueButton.visible = true;
    //playerHealthBar.visible = true;
  }

  if (mousePressedOver (start) && gameState === START) {
    awmSound.play ();
    //awmSound.setVolume=0.5;
    gameState = INSTRUCTIONS;
    start.destroy ();
    //continueButton.destroy ();
  }

  if (gameState === INSTRUCTIONS) {
    instructions ();
    button.visible = true;
  }

  if (mousePressedOver (button) && gameState === INSTRUCTIONS) {
    cSound.play ();
    cSound.setVolume = 1;
    gameState = CHARACTER;
    button.destroy ();
  } else if (gameState === CHARACTER) {
    character ();
  }

  if (mousePressedOver (display1) && gameState === CHARACTER) {
    cSound.play ();
    cSound.setVolume = 1;
    gameState = MAP;
    player1.changeImage ("player1", playerImg1);    
    displayGroup.destroyEach ();
  } else if (mousePressedOver (display2) && gameState === CHARACTER) {
    cSound.play ();
    cSound.setVolume = 1;
    gameState = MAP;
    player1.changeImage ("player2", playerImg2);
    
    displayGroup.destroyEach ();
  } else if (mousePressedOver (display3) && gameState === CHARACTER) {
    cSound.play ();
    cSound.setVolume = 1;
    gameState = MAP;
    player1.changeImage ("player3", playerImg3);
   
    displayGroup.destroyEach ();
  }

  if (gameState === MAP) {
    Map ();
  }

  if (mousePressedOver (map1) && gameState === MAP) {
    cSound.play ();
    cSound.setVolume = 1;
    background1.changeImage ("background1", backgroundImg1);
    mapGroup.destroyEach ();
    gameState = CLASSIC;
  } else if (mousePressedOver (map2) && gameState === MAP) {
    cSound.play ();
    cSound.setVolume = 1;
    background1.changeImage ("background2", backgroundImg2);
    mapGroup.destroyEach ();
    gameState = CLASSIC;
  } else if (mousePressedOver (map3) && gameState === MAP) {
    cSound.play ();
    cSound.setVolume = 1;
    background1.changeImage ("background3", backgroundImg3);
    mapGroup.destroyEach ();
    gameState = CLASSIC;
  } else if (mousePressedOver (map4) && gameState === MAP) {
    cSound.play ();
    cSound.setVolume = 1;
    background1.changeImage ("background4", backgroundImg4);
    background1.scale = 2;
    mapGroup.destroyEach ();
    gameState = CLASSIC;
  }



  if (gameState === CLASSIC) {


   
   
    moveEnemy ();
    movePlayer ();
    shoot ();
    enemyShoot ();
    playerHealth ();
    Enemy1Health ();
    Enemy2Health ();
    Enemy3Health ();
    Enemy4Health ();
    Enemy5Health ();
    Enemy6Health ();
    MedKit ();
    lessEnemies ();

    
  
  }

  if (enemy1.isTouching (wallStop1)) {
    enemy1.velocityX = 0;
  }

  if (enemy2.isTouching (wallStop2)) {
    enemy2.velocityX = 0;
  }

  if (enemy3.isTouching (wallStop3)) {
    enemy3.velocityX = 0;
  }

  if (enemy4.isTouching (wallStop4)) {
    enemy4.velocityX = 0;
  }

  if (enemy5.isTouching (wallStop5)) {
    enemy5.velocityX = 0;
  }

  if (enemy6.isTouching (wallStop6)) {
    enemy6.velocityX = 0;
  }

  // ----------------------------

  

  if (aliveNo == 1 && player1Health>= 1) {
    gameState = WIN;
  }

  if (gameState === WIN) {
    player1.x = 700;
    player1.y = 450;
    player1.scale = 0.5;
    b.visible = true;

    booyahText.show ();
    booyahText2.show ();
    
    enemy1.destroy ();
    enemy2.destroy ();
    enemy3.destroy ();
    enemy4.destroy ();
    enemy5.destroy ();
    enemy6.destroy ();
    enemyBulletGroup.destroyEach ();
    enemyBulletGroup2.destroyEach ();
    enemyBulletGroup3.destroyEach ();
    enemyBulletGroup4.destroyEach ();
    enemyBulletGroup5.destroyEach ();
    enemyBulletGroup6.destroyEach ();
    bulletGroup.destroyEach ();

  }

  if (gameState === LOSE) {
    player1.x = 700;
    player1.y = 450;
    player1.scale = 0.5;
    d.visible = true;

    defeatText.show ();
    defeatText2.show ();
    
    enemy1.destroy ();
    enemy2.destroy ();
    enemy3.destroy ();
    enemy4.destroy ();
    enemy5.destroy ();
    enemy6.destroy ();
    enemyBulletGroup.destroyEach ();
    enemyBulletGroup2.destroyEach ();
    enemyBulletGroup3.destroyEach ();
    enemyBulletGroup4.destroyEach ();
    enemyBulletGroup5.destroyEach ();
    enemyBulletGroup6.destroyEach ();
    bulletGroup.destroyEach ();
  }


 

  drawSprites ();


  textSize (17);
  fill ("white");
  text (player1Health, 425,505);
  text ("/ 200", 455,505)

  text ("ALIVE", 1210,15);
  text (aliveNo, 1265,15);
  text ("KILL", 1310,15);
  text (killNo, 1365,15)

}



function moveEnemy () {
  background1.visible = true;
  player1.visible = true;
  enemy1.visible = true;
  enemy2.visible = true;
  enemy3.visible = true;
  enemy4.visible = true;
  enemy5.visible = true;
  enemy6.visible = true;

  enemy1.velocityX = -7;
  enemy2.velocityX = -6;
  enemy3.velocityX = -5;
  enemy4.velocityX = -6;
  enemy5.velocityX = -7;
  enemy6.velocityX = -8;

}


function movePlayer () {
  if (keyDown ("UP_ARROW") && player1.y>= 250) {
    player1.y = player1.y - 10;
  }

  if (keyDown ("DOWN_ARROW") && player1.y <= 480) {
    player1.y = player1.y + 10;
  }

}

function shoot () {
  bulletPlace = player1.y - 40;

  if (keyDown ("space")) {

    if (frameCount% 9 === 0) {
      var bullet = createSprite (300, bulletPlace, 7, 3);
      bullet.velocityX = 13;
      bullet.shapeColor = "red"
     
      gSound.play ();
      gSound.setVolume (0.025);
      bulletGroup.add (bullet);
      bulletGroup.setLifetimeEach (70);
    }
  }
}

function enemyShoot () {

  enemy1BulletPlace = enemy1.y - 30;
  enemy2BulletPlace = enemy2.y - 25;
  enemy3BulletPlace = enemy3.y - 50;
  enemy4BulletPlace = enemy4.y - 50;
  enemy5BulletPlace = enemy5.y - 45;
  enemy6BulletPlace = enemy6.y - 55;



  if (enemy1.x <= 1400) {
    if (frameCount% 45 === 0) {
      var enemyBullet1 = createSprite (900, enemy1BulletPlace, 8, 3);
      enemyBullet1.velocityX = -9;
      guSound.play ();
      guSound.setVolume (0.05);
      enemyBullet1.shapeColor = "red";
      enemyBulletGroup.add (enemyBullet1);
      enemyBulletGroup.setLifetimeEach (100);
    }
  }

  if (enemy2.x <= 1400) {
    if (frameCount% 45 === 0) {
      var enemyBullet2 = createSprite (1000, enemy2BulletPlace, 8, 3);
      enemyBullet2.velocityX = -9;
      gunSound.play ();
      gunSound.setVolume (0.05);
      enemyBullet2.shapeColor = "red";
      enemyBulletGroup2.add (enemyBullet2);
      enemyBulletGroup2.setLifetimeEach (100);
    }
  }

  // -----------------------------------------

  if (enemy3.x <= 1400) {
    if (frameCount% 45 === 0) {
      var enemyBullet3 = createSprite (1100, enemy3BulletPlace, 8, 3);
      guSound.play ();
      guSound.setVolume (0.05);
      enemyBullet3.velocityX = -9;
      enemyBullet3.shapeColor = "red";
      enemyBulletGroup3.add (enemyBullet3);
      enemyBulletGroup3.setLifetimeEach (100);
    }
  }

  // ------------------------------------------------

  if (enemy4.x <= 1400) {
    if (frameCount% 45 === 0) {
      var enemyBullet4 = createSprite (1200, enemy4BulletPlace, 8, 3);
      enemyBullet4.velocityX = -8;
      gunSound.play ();
      gunSound.setVolume (0.05);
      enemyBullet4.shapeColor = "red";
      enemyBulletGroup4.add (enemyBullet4);
      enemyBulletGroup4.setLifetimeEach (100);
    }

    // -------------------------------------------

  if (enemy5.x <= 1300) {
    if (frameCount% 60 === 0) {
      var enemyBullet5 = createSprite (1150, enemy5BulletPlace, 8.3);
      enemyBullet5.velocityX = -10;
      awmSound.play ();
      awmSound.setVolume (0.06);
      enemyBullet5.shapeColor = "red";
      enemyBulletGroup5.add (enemyBullet5);
      enemyBulletGroup5.setLifetimeEach (100);
    
    }
    }

  }
  // -------------------------------------

  if (enemy6.x <= 1400) {
    if (frameCount% 65 === 0) {
      var enemyBullet6 = createSprite (950, enemy6BulletPlace, 8, 3);
      enemyBullet6.velocityX = -9;
      gunSound.play ();
      gunSound.setVolume (0.05);
      enemyBullet6.shapeColor = "red";
      enemyBulletGroup6.add (enemyBullet6);
      enemyBulletGroup6.setLifetimeEach (100);
    }
  }

}





function playerHealth () {
  if (enemyBulletGroup.isTouching (player1)) {
    player1Health = player1Health - 5;
    enemyBulletGroup.destroyEach ();
    playerHealthBar.width = playerHealthBar.width - 5;
  }
  if (player1Health == 0) {
    playerHealthBar.destroy ();
    gameState = LOSE;
  }

  // --------------------

  if (enemyBulletGroup2.isTouching (player1)) {
    player1Health = player1Health - 5;
    enemyBulletGroup2.destroyEach ();
    playerHealthBar.width = playerHealthBar.width - 5;
  }
  if (player1Health == 0) {
    playerHealthBar.destroy ();
    gameState = LOSE;
  }

  // ---------------------------

  if (enemyBulletGroup3.isTouching (player1)) {
    player1Health = player1Health - 5;
    enemyBulletGroup3.destroyEach ();
    playerHealthBar.width = playerHealthBar.width - 5;
  }
  if (player1Health == 0) {
    playerHealthBar.destroy ();
    gameState = LOSE;
  }

  // -------------------------

  if (enemyBulletGroup4.isTouching (player1)) {
    player1Health = player1Health - 5;
    enemyBulletGroup4.destroyEach ();
    playerHealthBar.width = playerHealthBar.width - 5;
  }
  if (player1Health == 0) {
    playerHealthBar.destroy ();
    gameState = LOSE;
  }

  // ----------------------------

  if (enemyBulletGroup5.isTouching (player1)) {
    player1Health = player1Health - 10;
    enemyBulletGroup5.destroyEach ();
    playerHealthBar.width = playerHealthBar.width - 5;
  }
  if (player1Health == 0) {
    playerHealthBar.destroy ();
    gameState = LOSE;
  }

  // ---------------------------------

  if (enemyBulletGroup6.isTouching (player1)) {
    player1Health = player1Health - 5;
    enemyBulletGroup6.destroyEach ();
    playerHealthBar.width = playerHealthBar.width - 5;
  }
  if (player1Health == 0) {
    playerHealthBar.destroy ();
    gameState = LOSE;
  }

}



function Enemy1Health () {
  if (bulletGroup.isTouching (enemy1)) {
    bulletGroup.destroyEach ();
    enemy1Health = enemy1Health - 70;

    if (enemy1Health <= 1) {
      enemy1Health = 200;
      enemy1.x = 9000;
      enemy1.y = random (280, 450)
      enemy1.velocityX = -7;
      aliveNo = aliveNo - 1;
      killNo = killNo + 1;
      enemyBulletGroup.destroyEach ()
    }
  }


}
// ---------------------


function Enemy2Health () {
  if (bulletGroup.isTouching (enemy2)) {
    bulletGroup.destroyEach ();
    enemy2Health = enemy2Health - 70;

    if (enemy2Health <= 1) {
      enemy2Health = 200;
      enemy2.x = 10000;
      enemy2.y = random (350, 450)
      enemy2.velocityX = -7;
      aliveNo = aliveNo - 1;
      killNo = killNo + 1;
      enemyBulletGroup2.destroyEach ()
    }


  }


}

// ----------------------------
function Enemy3Health () {

  if (bulletGroup.isTouching (enemy3)) {
    bulletGroup.destroyEach ();
    enemy3Health = enemy3Health - 70;

    if (enemy3Health <= 1) {
      enemy3Health = 200;
      enemy3.x = 12000;
      enemy3.y = random (350, 450)
      enemy3.velocityX = -7;
      aliveNo = aliveNo - 1;
      killNo = killNo + 1;
      enemyBulletGroup3.destroyEach ()
    }


  }


}
// ----------------------------------------
function Enemy4Health () {
  if (bulletGroup.isTouching (enemy4)) {
    bulletGroup.destroyEach ();
    enemy4Health = enemy4Health - 70;

    if (enemy4Health <= 1) {
      enemy4Health = 200;
      enemy4.x = 8000;
      enemy4.y = random (200, 350);
      enemy4.velocityX = -10;
      aliveNo = aliveNo - 1;
      killNo = killNo + 1;
      enemyBulletGroup4.destroyEach ()
    }


  }

}

function Enemy5Health () {
  if (bulletGroup.isTouching (enemy5)) {
    bulletGroup.destroyEach ();
    enemy5Health = enemy5Health - 70;

    if (enemy5Health <= 1) {
      enemy5Health = 200;
      enemy5.x = 9000;
      enemy5.y = random (200, 450);
      enemy5.velocityX = -6;
      aliveNo = aliveNo - 1;
      killNo = killNo + 1;
      enemyBulletGroup5.destroyEach ()
    }


  }

}

function Enemy6Health () {

  if (bulletGroup.isTouching (enemy6)) {
    bulletGroup.destroyEach ();
    enemy6Health = enemy6Health - 70;

    if (enemy6Health <= 1) {
      enemy6Health = 200;
      enemy6.x = 9000;
      enemy6.y = random (200, 450);
      enemy6.velocityX = -6;
      aliveNo = aliveNo - 1;
      killNo = killNo + 1;
      enemyBulletGroup6.destroyEach ()
    }


  }


}

function MedKit () {

  if (player1Health <= 70 && medCount == 0 && MedCount <= 3) {
    medkit.visible = true;
    medkit.velocityX = -12;
  }

  if (medkit.isTouching (player1)) {
    medkit.x = 1450;
    medkit.y = random (250, 450);
    medkit.velocityX = 0;
    medCount = medCount + 1
    MedCount = MedCount + 1;

    var med = createSprite (700, 200, 10, 50);
    med.addImage (info);
    med.scale = 1;
    med.lifetime = 120;
  }

  if (keyDown ("m") && medCount == 1) {
    medCount = 0;
    player1Health = player1Health + 70;
    playerHealthBar.width = playerHealthBar.width + 70;

  }

  if (medkit.x <= -20) {
    medkit.x = 3000;
    medkit.y = random (250, 450);
    medkit.velocityX = -12;
  }
}

function character () {

  background (0, 0, 250);
  fill ("black");
  textSize (30);
  text ("CHOOSE YOUR OUTFIT", 545, 120)

  display1 = createSprite (350, 300, 50, 50);
  display1.addImage ("player1", playerImg1);
  display1.scale = 0.4;
  displayGroup.add (display1);

  display2 = createSprite (700, 300, 50, 50);
  display2.addImage ("player2", playerImg2);
  display2.scale = 0.4;
  displayGroup.add (display2);

  display3 = createSprite (1050, 300, 50, 50);
  display3.addImage ("player3", playerImg3);
  display3.scale = 0.4;
  displayGroup.add (display3);

}

function Map () {

  background (0, 150, 0);
  textSize (30);
  fill ("black");
  text ("CHOOSE A SPOT TO LAND", 454, 200);
  displayGroup.destroyEach ();

  map1 = createSprite (300, 450, 50, 50);
  map1.addImage ("Map1", map1Img);
  map1.scale = 1;
  mapGroup.add (map1);

  map2 = createSprite (600, 450, 50, 50);
  map2.addImage ("Map2", map2Img);
  map2.scale = 0.55;
  mapGroup.add (map2);

  map3 = createSprite (900, 450, 50, 50);
  map3.addImage ("Map3", map3Img);
  mapGroup.add (map3);

  map4 = createSprite (1200, 450, 50, 50);
  map4.addImage ("Map4", map4Img);
  map4.scale = 1.9;
  mapGroup.add (map4);

  textSize (20);
  fill ("black");
  text ("FACTORY", 260, 350);
 // text ("SAMURAIS GARDEN", ​​505, 340); 
  text ("PEAK", 860, 350);
  text ("ACADEMY", 1150, 350);
  
   textSize (17);
  
  text ("(REMASTERED)", 535,360);
  text ("(REMASTERED)", 1130,370)
}

function instructions () {
  background ("pink");

  textSize (25);
  fill ("black");
  text ("1.MOVE WITH UP AND DOWN ARROW KEYS", 30, 100);
  text ("2.PRESS SPACE TO FIRE", 30, 150);
  text ("3.YOU WILL GET ONLY 3-4 MEDKITS DURING THE GAME", 30, 200);
  text ("4.ALL YOUR GUNS GIVE THE SAME DAMAGE", 30, 250);
  text ("5.WAIT FOR A WHILE, THE ENEMIES WILL COME FROM RIGHT SIDE", 30,300);
  text ("DON'T FORGET TO BOOYAH!", 400, 450);



  button.visible = true;
}

function lessEnemies () {

  if (aliveNo == 6) {
    enemy1.x = 2700;
    enemy1.velocityX = 0;
    enemy1.lifetime = 50;
  }
  if (aliveNo == 5) {
    enemy2.x = 2700;
    enemy2.velocityX = 0;
    enemy2.lifetime = 50;
  }
  if (aliveNo == 4) {
    enemy3.x = 2700;
    enemy3.velocityX = 0;
    enemy3.lifetime = 50;
  }
  if (aliveNo == 3) {
    enemy5.x = 2700;
    enemy5.velocityX = 0;
    enemy5.lifetime = 50;
  }
  if (aliveNo == 49) {
    enemy4.x = 2700;
    enemy4.velocityX = 0;
    enemy4.lifetime = 50;
    enemy6.changeImage ("enemy1", enemy1Img);
    enemy6.scale = 0.4;
  }
}


