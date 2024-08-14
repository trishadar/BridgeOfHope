// Use arrow keys to move, build 4 bridges to unite the world with hope. 

/* VARIABLES */
let bridges;
let tokens;
let woodPlaced;
let lives;
let screen;
let gameStarted;
let tutorial;
let cameFromWorld;
let tutorialMode;
let screen1Img, screen2Img, screen3Img, screen4Img, screen5Img, screen6Img;
let screen7Img, united, unitedImg;
let globe, globeImg, lockedImg;
let life1, life2, life3, livesImg;
let font;
let woodBlock1, woodBlock2, woodBlock3, woodBlock4, woodBlock5, woodBlock6, woodBlock7, woodBlock8, woodBlock9, woodBlock10;
let woodBlockImg, woodSignImg, woodSign;
let reset, resetImg;
let fromReset = false;
let volumeButton, volumeButtonImg, volumeInfoImg;

// home page stuff
let instructButton, musicButton, startButton, continueButton, newGameButton;
let instructBImg, musicImg, startImg, instructImg, continueImg, newGameImg;

// world page stuff
let backButton, oceanButton, landButton, spaceButton, fireButton;
let backImg, fireImg, oceanImg, landImg, spaceImg, tut1Img, tut2Img;
let bridge1, bridge2, bridge3, bridge4, bridgeImg;

// fire world stuff
let fireChar, ground, lamps, fireMonster;
let fireCharImg, groundImg, lampsImg, fireMonsterImg;
let fireToken1, fireToken2, fireToken3, fireToken4, fireToken5;
let fireTokenImg, fireBlockImg, flamesImg;
let fireBlock1, fireBlock2, fireBlock3, fireBlock4;
let flames1, flyingFlame1, flyingFlame2, flyingFlame3, flyingFlameImg;
let tut3, tut3Img, tut4, tut4Img, tut5, tut5Img;

// land world stuff
let landGround, landChar, landMonster, hand;
let landGroundImg, castleImg, landCharImg, landMonsterImg, handImg;
let landToken1, landToken2, landToken3, landToken4, landToken5;
let landTokenImg, landBlockImg;
let landBlock1, landBlock2, landBlock3, landBlock4;

// ocean world stuff
let oceanChar, oceanGround, oceanMonster;
let oceanCharImg, oceanGroundImg, oceanBlockImg, oceanTokenImg, oceanMonsterImg;;
let oceanBlock1, oceanBlock2, oceanBlock3, oceanBlock4;
let oceanToken1, oceanToken2, oceanToken3, oceanToken4, oceanToken5;

// space world stuff
let spaceChar, spaceGround, spaceMonster;
let spaceCharImg, spaceGroundImg, spaceBlockImg, spaceTokenImg, spaceMonsterImg;
let spaceBlock1, spaceBlock2, spaceBlock3, spaceBlock4;
let spaceToken1, spaceToken2, spaceToken3, spaceToken4, spaceToken5;

// sound stuff
let music, fireMusic, oceanMusic, landMusic, spaceMusic, unitedMusic;
let musicOn = false;

/* PRELOAD LOADS FILES */
function preload() {

  // fonts
  font = loadFont("assets/pixelFont.ttf");

  // sounds
  music = loadSound("assets/song1.mp3");
  fireMusic = loadSound("assets/fireSong.mp3");
  landMusic = loadSound("assets/landSong.mp3");
  oceanMusic = loadSound("assets/oceanSong.mp3");
  spaceMusic = loadSound("assets/spaceSong.mp3");
  unitedMusic = loadSound("assets/unitedSong.mp3");

  // general
  globeImg = loadImage("assets/globe.png");
  lockedImg = loadImage("assets/locked.png");
  livesImg = loadImage("assets/heart.png");
  woodSignImg = loadImage("assets/woodSign.png");
  woodBlockImg = loadImage("assets/wood.png");
  resetImg = loadImage("assets/resetB.png");
  volumeButtonImg = loadImage("assets/volume.png");
  volumeInfoImg = loadImage("assets/volumeInfo.png");
  screen7Img = loadImage("assets/unitedBack.jpg");
  unitedImg = loadImage("assets/united.png");

  // home page images
  screen1Img = loadImage("assets/gamejamback1.jpg");
  instructBImg = loadImage("assets/homebutton1.png");
  musicImg = loadImage("assets/homebutton2.png");
  startImg = loadImage("assets/homebutton3.png");
  instructImg = loadImage("assets/instructions.png");
  continueImg = loadImage("assets/continue.png");
  newGameImg = loadImage("assets/newGame.png");

  // world page images
  screen2Img = loadImage("assets/gamejamback2.jpg");
  backImg = loadImage("assets/backButton.png");
  fireImg = loadImage("assets/FireB.png");
  oceanImg = loadImage("assets/OceanB.png");
  landImg = loadImage("assets/LandB.png");
  spaceImg = loadImage("assets/SpaceB.png");
  tut1Img = loadImage("assets/tut1.png");
  tut2Img = loadImage("assets/tut2.png");
  bridgeImg = loadImage("assets/bridge.png");

  // fire world image
  screen3Img = loadImage("assets/gamejamback3.jpg");
  groundImg = loadImage("assets/fireGround.png");
  lampsImg = loadImage("assets/lamp.png");
  fireTokenImg = loadImage("assets/fireToken.png");
  fireBlockImg = loadImage("assets/fireBlock.png");
  flamesImg = loadImage("assets/flames.png");
  fireCharImg = loadImage("assets/fireChar.png");
  fireMonsterImg = loadImage("assets/fireMonster.png");
  flyingFlameImg = loadImage("assets/flyingFlame.png");
  tut3Img = loadImage("assets/tut3.png");
  tut4Img = loadImage("assets/tut4.png");
  tut5Img = loadImage("assets/tut5.png");

  // land world image
  screen4Img = loadImage("assets/landBack.jpg");
  landGroundImg = loadImage("assets/landGround.png");
  castleImg = loadImage("assets/castle.png");
  landCharImg = loadImage("assets/landChar.png");
  landTokenImg = loadImage("assets/landToken.png");
  landBlockImg = loadImage("assets/landBlock.png");
  landMonsterImg = loadImage("assets/landMonster.png");
  handImg = loadImage("assets/hand.png");

  // ocean world image
  screen5Img = loadImage("assets/oceanBack.jpg");
  oceanGroundImg = loadImage("assets/oceanGround.png");
  oceanCharImg = loadImage("assets/oceanChar.png");
  oceanBlockImg = loadImage("assets/oceanBlock.png");
  oceanTokenImg = loadImage("assets/oceanToken.png");
  oceanMonsterImg = loadImage("assets/oceanMonster.png");

  // space world image
  screen6Img = loadImage("assets/spaceBack.jpg");
  spaceGroundImg = loadImage("assets/spaceGround.png");
  spaceCharImg = loadImage("assets/spaceChar.png");
  spaceBlockImg = loadImage("assets/spaceBlock.png");
  spaceTokenImg = loadImage("assets/spaceToken.png");
  spaceMonsterImg = loadImage("assets/spaceMonster.png");

}

/* SETUP RUNS ONCE */
function setup() {

  newGame();

}

/* DRAW LOOP REPEATS */
function draw() {

  drawCustom();

}

/* FUNCTIONS */

function drawCustom() {
  //clear();
  //console.log("inside drawCustom()");
  if (globe.mouse.presses()) {
    cameFromWorld = true;
    showScreen2();
  }

  if (kb.presses('1') && musicOn == true) {
    music.setVolume(0);
    fireMusic.setVolume(0);
    landMusic.setVolume(0);
    oceanMusic.setVolume(0);
    spaceMusic.setVolume(0);
    unitedMusic.setVolume(0);
  }
  if (kb.presses('2') && musicOn == true) {
    music.setVolume(0.3);
    fireMusic.setVolume(0.1);
    landMusic.setVolume(0.1);
    oceanMusic.setVolume(0.1);
    spaceMusic.setVolume(0.1);
    unitedMusic.setVolume(0.1);
  }
  if (kb.presses('3') && musicOn == true) {
    music.setVolume(0.9);
    fireMusic.setVolume(0.3);
    landMusic.setVolume(0.3);
    oceanMusic.setVolume(0.3);
    spaceMusic.setVolume(0.3);
    unitedMusic.setVolume(0.3);
  }
  if (kb.presses('4') && musicOn == true) {
    music.setVolume(1.5);
    fireMusic.setVolume(0.6);
    landMusic.setVolume(0.6);
    oceanMusic.setVolume(0.5);
    spaceMusic.setVolume(0.7);
    unitedMusic.setVolume(0.7);
  }

  if (screen == 1) {
    image(screen1Img, 0, 0);
    fill(71, 70, 138);

    if (volumeButton.mouse.pressing()) {
      image(volumeInfoImg, width - 270, 60)
    }
    else if (kb.presses("t") && bridges == 0) {
      if (tutorial == false) {
        tutorial = true;
      }
      else {
        tutorial = false;
      }
    }

    if (tutorial == false) {
      tutorialMode = "OFF";
    }
    else if (tutorial == true) {
      tutorialMode = "ON";
    }

    text("Tutorial Mode: " + tutorialMode, 35, 35);
    text("Made by Trisha D", 35, 65);

    if (instructButton.mouse.pressing()) {
      image(instructImg, width / 2 - 680, height / 2 - 100)
    }
    else if (musicButton.mouse.presses()) {
      if (musicOn == false) {
        music.loop();
        musicOn = true;
      }
      else {
        music.pause();
        musicOn = false;
      }
    }
    else if (startButton.mouse.presses()) {
      bridges = 0;
      tokens = 0;
      woodPlaced = 0;
      gameStarted = true;
      cameFromWorld = false;
      showScreen2();
    }
    else if (continueButton.mouse.presses()) {
      tokens = 0;
      woodPlaced = 0;
      gameStarted = true;
      cameFromWorld = false;
      showScreen2();
    }
    else if (newGameButton.mouse.presses()) {
      allSprites.remove();
      newGame();
    }
  }

  else if (screen == 2) {
    image(screen2Img, 0, 0);
    fill(255);
    text("Bridges Built: " + bridges + "/4", 170, 35);

    if (volumeButton.mouse.pressing()) {
      image(volumeInfoImg, width - 270, 60)
    }

    if (tutorial == true) {
      image(tut1Img, width / 2 - 360, -65);
      image(tut2Img, width / 2 - 300, height / 2 - 200);
    }

    bridge2.rotation = 90;
    bridge3.rotation = 180;
    bridge4.rotation = 270;

    if (bridges == 0) {
      image(lockedImg, width / 2 + width / 4 - 150, height / 4 - 150);
      image(lockedImg, width / 2 + width / 4 - 150, height / 2 + height / 4 - 150);
      image(lockedImg, width / 4 - 150, height / 2 + height / 4 - 150);
    }
    else if (bridges == 1) {
      image(lockedImg, width / 2 + width / 4 - 150, height / 2 + height / 4 - 150);
      image(lockedImg, width / 4 - 150, height / 2 + height / 4 - 150);
      bridge1.pos = { x: width / 2, y: height / 2 - height / 4 };
    }
    else if (bridges == 2) {
      image(lockedImg, width / 4 - 150, height / 2 + height / 4 - 150);
      bridge1.pos = { x: width / 2, y: height / 2 - height / 4 };
      bridge2.pos = { x: width / 2 + width / 4, y: height / 2 };
    }
    else if (bridges == 3) {
      bridge1.pos = { x: width / 2, y: height / 2 - height / 4 };
      bridge2.pos = { x: width / 2 + width / 4, y: height / 2 };
      bridge3.pos = { x: width / 2, y: height / 2 + height / 4 };
    }
    else if (bridges == 4) {
      bridge1.pos = { x: width / 2, y: height / 2 - height / 4 };
      bridge2.pos = { x: width / 2 + width / 4, y: height / 2 };
      bridge3.pos = { x: width / 2, y: height / 2 + height / 4 };
      bridge4.pos = { x: width / 2 - width / 4, y: height / 2 };

      unitedSequence();
    }

    if (backButton.mouse.presses()) {
      showScreen1();
    }
    else if (fireButton.mouse.presses() && bridges == 0) {
      showScreen3();
    }
    else if (landButton.mouse.presses() && bridges == 1) {
      showScreen4();
    }
    else if (oceanButton.mouse.presses() && bridges == 2) {
      showScreen5();
    }
    else if (spaceButton.mouse.presses() && bridges == 3) {
      showScreen6();
    }
  }

  else if (screen == 3) {
    image(screen3Img, 0, 0);

    fill(255);
    text("Tokens: " + tokens + "/5", 130, 35);

    if (volumeButton.mouse.pressing()) {
      image(volumeInfoImg, width - 270, 60)
    }

    if (lives < 3) {
      console.log(lives);
      life3.pos = { x: -600, y: -600 };
      if (lives < 2) {
        life2.pos = { x: -600, y: -600 };
        if (lives < 1) {
          life1.pos = { x: -600, y: -600 };
          fromReset = true;
          showScreen3();
        }
      }
    }

    if (fireChar.collided(fireToken1) && tokens < 5) {
      tokens += 1;
      fireToken1.y = -500;
    }
    if (fireChar.collided(fireToken2) && tokens < 5) {
      tokens += 1;
      fireToken2.y = -500;
    }
    if (fireChar.collided(fireToken3) && tokens < 5) {
      tokens += 1;
      fireToken3.y = -500;
    }
    if (fireChar.collided(fireToken4) && tokens < 5) {
      tokens += 1;
      fireToken4.y = -500;
    }
    if (fireChar.collided(fireToken5) && tokens < 5) {
      tokens += 1;
      fireToken5.y = -500;
    }

    if (fireChar.collided(flames1)) {
      lives -= 1;
    }
    if (fireChar.collided(fireMonster)) {
      lives -= 1;
    }
    if (fireChar.collided(flyingFlame1)) {
      lives -= 1;
    }
    if (fireChar.collided(flyingFlame2)) {
      lives -= 1;
    }
    if (fireChar.collided(flyingFlame3)) {
      lives -= 1;
    }
    if (fireChar.colliding(fireBlock1)) {
      fireBlock1.collider = 'dynamic';
    }
    if (fireChar.colliding(fireBlock2)) {
      fireBlock2.collider = 'dynamic';
    }
    if (fireChar.colliding(fireBlock3)) {
      fireBlock3.collider = 'dynamic';
    }
    if (fireChar.colliding(fireBlock4)) {
      fireBlock4.collider = 'dynamic';
    }

    if (fireBlock1.collides(ground)) {
      fireBlock1.collider = 'k';
    }
    if (fireBlock2.collides(ground)) {
      fireBlock2.collider = 'k';
    }
    if (fireBlock3.collides(ground)) {
      fireBlock3.collider = 'k';
    }
    if (fireBlock4.collides(ground)) {
      fireBlock4.collider = 'k';
    }

    // player movement
    if (kb.pressing("left")) {
      fireChar.vel.x = -4;
      lamps.vel.x = 4;
      fireToken1.vel.x = 4;
      fireToken2.vel.x = 4;
      fireToken3.vel.x = 4;
      fireToken4.vel.x = 4;
      fireToken5.vel.x = 4;
      fireBlock1.vel.x = 4;
      fireBlock2.vel.x = 4;
      fireBlock3.vel.x = 4;
      fireBlock4.vel.x = 4;
      flames1.vel.x = 4;
      fireMonster.vel.x = 4;
      flyingFlame1.vel.x = 4;
      flyingFlame2.vel.x = 4;
      flyingFlame3.vel.x = 4;
      woodSign.vel.x = 4;
      woodBlock1.vel.x = 4;
      woodBlock2.vel.x = 4;
      woodBlock3.vel.x = 4;
      woodBlock4.vel.x = 4;
      woodBlock5.vel.x = 4;
      woodBlock6.vel.x = 4;
      woodBlock7.vel.x = 4;
      woodBlock8.vel.x = 4;
      woodBlock9.vel.x = 4;
      woodBlock10.vel.x = 4;
      tut3.vel.x = 4;
      tut4.vel.x = 4;
      tut5.vel.x = 4;
    }
    else if (kb.pressing("right")) {
      fireChar.vel.x = 4;
      lamps.vel.x = -4;
      fireToken1.vel.x = -4;
      fireToken2.vel.x = -4;
      fireToken3.vel.x = -4;
      fireToken4.vel.x = -4;
      fireToken5.vel.x = -4;
      fireBlock1.vel.x = -4;
      fireBlock2.vel.x = -4;
      fireBlock3.vel.x = -4;
      fireBlock4.vel.x = -4;
      flames1.vel.x = -4;
      fireMonster.vel.x = -4;
      flyingFlame1.vel.x = -4;
      flyingFlame2.vel.x = -4;
      flyingFlame3.vel.x = -4;
      woodSign.vel.x = -4;
      woodBlock1.vel.x = -4;
      woodBlock2.vel.x = -4;
      woodBlock3.vel.x = -4;
      woodBlock4.vel.x = -4;
      woodBlock5.vel.x = -4;
      woodBlock6.vel.x = -4;
      woodBlock7.vel.x = -4;
      woodBlock8.vel.x = -4;
      woodBlock9.vel.x = -4;
      woodBlock10.vel.x = -4;
      tut3.vel.x = -4;
      tut4.vel.x = -4;
      tut5.vel.x = -4;
    }
    else {
      fireChar.vel.x = 0;
      lamps.vel.x = 0;
      fireToken1.vel.x = 0;
      fireToken2.vel.x = 0;
      fireToken3.vel.x = 0;
      fireToken4.vel.x = 0;
      fireToken5.vel.x = 0;
      fireBlock1.vel.x = 0;
      fireBlock2.vel.x = 0;
      fireBlock3.vel.x = 0;
      fireBlock4.vel.x = 0;
      flames1.vel.x = 0;
      fireMonster.vel.x = 0;
      flyingFlame1.vel.x = -1;
      flyingFlame2.vel.x = -1;
      flyingFlame3.vel.x = -1;
      woodSign.vel.x = 0;
      woodBlock1.vel.x = 0;
      woodBlock2.vel.x = 0;
      woodBlock3.vel.x = 0;
      woodBlock4.vel.x = 0;
      woodBlock5.vel.x = 0;
      woodBlock6.vel.x = 0;
      woodBlock7.vel.x = 0;
      woodBlock8.vel.x = 0;
      woodBlock9.vel.x = 0;
      woodBlock10.vel.x = 0;
      tut3.vel.x = 0;
      tut4.vel.x = 0;
      tut5.vel.x = 0;
    }
    if (kb.presses("up")) {
      fireChar.vel.y = -5;
    }

    // stop player at edges of screen
    if (fireChar.x < width / 8) {
      fireChar.x = width / 8;
    }
    else if (fireChar.x > width / 2) {
      fireChar.x = width / 2;
    }
    else if (fireChar.y < -50) {
      fireChar.y = -50;
    }
    else if (fireChar.x > woodSign.x - 200) {
      fireChar.x = woodSign.x - 200;
    }

    // tokens found
    if (tokens == 5) {
      fill(255);
      text("Wood Placed: " + woodPlaced + "/10", 300, 35);
      console.log(woodPlaced);
    }

    // wood placement
    if (kb.presses("space") && tokens == 5 && woodPlaced < 10) {
      woodPlaced += 1;
      if (woodPlaced == 1) {
        woodBlock1.pos = { x: woodSign.x + 300, y: height - 150 };
      }
      else if (woodPlaced == 2) {
        woodBlock2.pos = { x: woodBlock1.x + 100, y: height - 150 };
      }
      else if (woodPlaced == 3) {
        woodBlock3.pos = { x: woodBlock2.x, y: height - 250 };
      }
      else if (woodPlaced == 4) {
        woodBlock4.pos = { x: woodBlock3.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 5) {
        woodBlock5.pos = { x: woodBlock4.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 6) {
        woodBlock6.pos = { x: woodBlock5.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 7) {
        woodBlock7.pos = { x: woodBlock6.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 8) {
        woodBlock8.pos = { x: woodBlock7.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 9) {
        woodBlock9.pos = { x: woodBlock8.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 10) {
        woodBlock10.pos = { x: woodBlock9.x + 100, y: height - 350 };
      }
    }

    if (woodPlaced == 10) {
      bridges = 1;
      tokens = 0;
      woodPlaced = 0;
      cameFromWorld = true;
      tutorial = false;
      showScreen2();
    }

    // reset character
    if (reset.mouse.presses()) {
      fromReset = true;
      showScreen3();
    }


  }

  else if (screen == 4) {
    image(screen4Img, 0, 0);
    image(castleImg, 0, 0);

    fill(255);
    text("Tokens: " + tokens + "/5", 130, 35);

    if (volumeButton.mouse.pressing()) {
      image(volumeInfoImg, width - 270, 60)
    }

    if (landChar.collided(landMonster)) {
      lives -= 1;
    }
    if (landChar.collided(hand)) {
      lives -= 1;
    }

    if (lives < 3) {
      console.log(lives);
      life3.pos = { x: -600, y: -600 };
      if (lives < 2) {
        life2.pos = { x: -600, y: -600 };
        if (lives < 1) {
          life1.pos = { x: -600, y: -600 };
          fromReset = true;
          showScreen4();
        }
      }
    }

    if (landChar.collided(landToken1) && tokens < 5) {
      tokens += 1;
      landToken1.y = -500;
    }
    if (landChar.collided(landToken2) && tokens < 5) {
      tokens += 1;
      landToken2.y = -500;
    }
    if (landChar.collided(landToken3) && tokens < 5) {
      tokens += 1;
      landToken3.y = -500;
    }
    if (landChar.collided(landToken4) && tokens < 5) {
      tokens += 1;
      landToken4.y = -500;
    }
    if (landChar.collided(landToken5) && tokens < 5) {
      tokens += 1;
      landToken5.y = -500;
    }

    if (landChar.colliding(landBlock1)) {
      landBlock1.collider = 'dynamic';
    }
    if (landChar.colliding(landBlock2)) {
      landBlock2.collider = 'dynamic';
    }
    if (landChar.colliding(landBlock3)) {
      landBlock3.collider = 'dynamic';
    }
    if (landChar.colliding(landBlock4)) {
      landBlock4.collider = 'dynamic';
    }

    if (landBlock1.collides(landGround)) {
      landBlock1.collider = 'k';
    }
    if (landBlock2.collides(landGround)) {
      landBlock2.collider = 'k';
    }
    if (landBlock3.collides(landGround)) {
      landBlock3.collider = 'k';
    }
    if (landBlock4.collides(landGround)) {
      landBlock4.collider = 'k';
    }

    // player movement
    if (kb.pressing("left")) {
      landChar.vel.x = -4;
      landToken1.vel.x = 4;
      landToken2.vel.x = 4;
      landToken3.vel.x = 4;
      landToken4.vel.x = 4;
      landToken5.vel.x = 4;
      landBlock1.vel.x = 4;
      landBlock2.vel.x = 4;
      landBlock3.vel.x = 4;
      landBlock4.vel.x = 4;
      landMonster.vel.x = 4;
      hand.vel.x = 4;
      woodSign.vel.x = 4;
      woodBlock1.vel.x = 4;
      woodBlock2.vel.x = 4;
      woodBlock3.vel.x = 4;
      woodBlock4.vel.x = 4;
      woodBlock5.vel.x = 4;
      woodBlock6.vel.x = 4;
      woodBlock7.vel.x = 4;
      woodBlock8.vel.x = 4;
      woodBlock9.vel.x = 4;
      woodBlock10.vel.x = 4;
    }
    else if (kb.pressing("right")) {
      landChar.vel.x = 4;
      landToken1.vel.x = -4;
      landToken2.vel.x = -4;
      landToken3.vel.x = -4;
      landToken4.vel.x = -4;
      landToken5.vel.x = -4;
      landBlock1.vel.x = -4;
      landBlock2.vel.x = -4;
      landBlock3.vel.x = -4;
      landBlock4.vel.x = -4;
      landMonster.vel.x = -4;
      hand.vel.x = -4;
      woodSign.vel.x = -4;
      woodBlock1.vel.x = -4;
      woodBlock2.vel.x = -4;
      woodBlock3.vel.x = -4;
      woodBlock4.vel.x = -4;
      woodBlock5.vel.x = -4;
      woodBlock6.vel.x = -4;
      woodBlock7.vel.x = -4;
      woodBlock8.vel.x = -4;
      woodBlock9.vel.x = -4;
      woodBlock10.vel.x = -4;
    }
    else {
      landChar.vel.x = 0;
      landToken1.vel.x = 0;
      landToken2.vel.x = 0;
      landToken3.vel.x = 0;
      landToken4.vel.x = 0;
      landToken5.vel.x = 0;
      landBlock1.vel.x = 0;
      landBlock2.vel.x = 0;
      landBlock3.vel.x = 0;
      landBlock4.vel.x = 0;
      landMonster.vel.x = 0;
      hand.vel.x = 0;
      woodSign.vel.x = 0;
      woodBlock1.vel.x = 0;
      woodBlock2.vel.x = 0;
      woodBlock3.vel.x = 0;
      woodBlock4.vel.x = 0;
      woodBlock5.vel.x = 0;
      woodBlock6.vel.x = 0;
      woodBlock7.vel.x = 0;
      woodBlock8.vel.x = 0;
      woodBlock9.vel.x = 0;
      woodBlock10.vel.x = 0;
    }
    if (kb.presses("up")) {
      landChar.vel.y = -5;
    }

    // stop player at edges of screen
    if (landChar.x < width / 8) {
      landChar.x = width / 8;
    }
    else if (landChar.x > width / 2) {
      landChar.x = width / 2;
    }
    else if (landChar.y < -50) {
      landChar.y = -50;
    }
    else if (landChar.x > woodSign.x - 200) {
      landChar.x = woodSign.x - 200;
    }

    // tokens found
    if (tokens == 5) {
      fill(255);
      text("Wood Placed: " + woodPlaced + "/10", 300, 35);
      console.log(woodPlaced);
    }

    // wood placement
    if (kb.presses("space") && tokens == 5 && woodPlaced < 10) {
      woodPlaced += 1;
      if (woodPlaced == 1) {
        woodBlock1.pos = { x: woodSign.x + 300, y: height - 150 };
      }
      else if (woodPlaced == 2) {
        woodBlock2.pos = { x: woodBlock1.x + 100, y: height - 150 };
      }
      else if (woodPlaced == 3) {
        woodBlock3.pos = { x: woodBlock2.x, y: height - 250 };
      }
      else if (woodPlaced == 4) {
        woodBlock4.pos = { x: woodBlock3.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 5) {
        woodBlock5.pos = { x: woodBlock4.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 6) {
        woodBlock6.pos = { x: woodBlock5.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 7) {
        woodBlock7.pos = { x: woodBlock6.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 8) {
        woodBlock8.pos = { x: woodBlock7.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 9) {
        woodBlock9.pos = { x: woodBlock8.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 10) {
        woodBlock10.pos = { x: woodBlock9.x + 100, y: height - 350 };
      }
    }

    if (woodPlaced == 10) {
      bridges = 2;
      tokens = 0;
      woodPlaced = 0;
      cameFromWorld = true;
      tutorial = false;
      showScreen2();
    }

    // reset character
    if (reset.mouse.presses()) {
      fromReset = true;
      showScreen4();
    }


  }

  else if (screen == 5) {
    image(screen5Img, 0, 0);

    fill(255);
    text("Tokens: " + tokens + "/5", 130, 35);

    if (volumeButton.mouse.pressing()) {
      image(volumeInfoImg, width - 270, 60)
    }

    if (oceanChar.collided(oceanMonster)) {
      lives -= 1;
    }

    if (lives < 3) {
      console.log(lives);
      life3.pos = { x: -600, y: -600 };
      if (lives < 2) {
        life2.pos = { x: -600, y: -600 };
        if (lives < 1) {
          life1.pos = { x: -600, y: -600 };
          fromReset = true;
          showScreen5();
        }
      }
    }

    if (oceanChar.collided(oceanToken1) && tokens < 5) {
      tokens += 1;
      oceanToken1.y = -500;
    }
    if (oceanChar.collided(oceanToken2) && tokens < 5) {
      tokens += 1;
      oceanToken2.y = -500;
    }
    if (oceanChar.collided(oceanToken3) && tokens < 5) {
      tokens += 1;
      oceanToken3.y = -500;
    }
    if (oceanChar.collided(oceanToken4) && tokens < 5) {
      tokens += 1;
      oceanToken4.y = -500;
    }
    if (oceanChar.collided(oceanToken5) && tokens < 5) {
      tokens += 1;
      oceanToken5.y = -500;
    }

    if (oceanChar.colliding(oceanBlock1)) {
      oceanBlock1.collider = 'dynamic';
    }
    if (oceanChar.colliding(oceanBlock2)) {
      oceanBlock2.collider = 'dynamic';
    }
    if (oceanChar.colliding(oceanBlock3)) {
      oceanBlock3.collider = 'dynamic';
    }
    if (oceanChar.colliding(oceanBlock4)) {
      oceanBlock4.collider = 'dynamic';
    }

    if (oceanBlock1.collides(oceanGround)) {
      oceanBlock1.collider = 'k';
    }
    if (oceanBlock2.collides(oceanGround)) {
      oceanBlock2.collider = 'k';
    }
    if (oceanBlock3.collides(oceanGround)) {
      oceanBlock3.collider = 'k';
    }
    if (oceanBlock4.collides(oceanGround)) {
      oceanBlock4.collider = 'k';
    }

    // player movement
    if (kb.pressing("left")) {
      oceanChar.vel.x = -4;
      oceanToken1.vel.x = 4;
      oceanToken2.vel.x = 4;
      oceanToken3.vel.x = 4;
      oceanToken4.vel.x = 4;
      oceanToken5.vel.x = 4;
      oceanBlock1.vel.x = 4;
      oceanBlock2.vel.x = 4;
      oceanBlock3.vel.x = 4;
      oceanBlock4.vel.x = 4;
      oceanMonster.vel.x = 4;
      woodSign.vel.x = 4;
      woodBlock1.vel.x = 4;
      woodBlock2.vel.x = 4;
      woodBlock3.vel.x = 4;
      woodBlock4.vel.x = 4;
      woodBlock5.vel.x = 4;
      woodBlock6.vel.x = 4;
      woodBlock7.vel.x = 4;
      woodBlock8.vel.x = 4;
      woodBlock9.vel.x = 4;
      woodBlock10.vel.x = 4;
    }
    else if (kb.pressing("right")) {
      oceanChar.vel.x = 4;
      oceanToken1.vel.x = -4;
      oceanToken2.vel.x = -4;
      oceanToken3.vel.x = -4;
      oceanToken4.vel.x = -4;
      oceanToken5.vel.x = -4;
      oceanBlock1.vel.x = -4;
      oceanBlock2.vel.x = -4;
      oceanBlock3.vel.x = -4;
      oceanBlock4.vel.x = -4;
      oceanMonster.vel.x = -4;
      woodSign.vel.x = -4;
      woodBlock1.vel.x = -4;
      woodBlock2.vel.x = -4;
      woodBlock3.vel.x = -4;
      woodBlock4.vel.x = -4;
      woodBlock5.vel.x = -4;
      woodBlock6.vel.x = -4;
      woodBlock7.vel.x = -4;
      woodBlock8.vel.x = -4;
      woodBlock9.vel.x = -4;
      woodBlock10.vel.x = -4;
    }
    else {
      oceanChar.vel.x = 0;
      oceanToken1.vel.x = 0;
      oceanToken2.vel.x = 0;
      oceanToken3.vel.x = 0;
      oceanToken4.vel.x = 0;
      oceanToken5.vel.x = 0;
      oceanBlock1.vel.x = 0;
      oceanBlock2.vel.x = 0;
      oceanBlock3.vel.x = 0;
      oceanBlock4.vel.x = 0;
      oceanMonster.vel.x = 0;
      woodSign.vel.x = 0;
      woodBlock1.vel.x = 0;
      woodBlock2.vel.x = 0;
      woodBlock3.vel.x = 0;
      woodBlock4.vel.x = 0;
      woodBlock5.vel.x = 0;
      woodBlock6.vel.x = 0;
      woodBlock7.vel.x = 0;
      woodBlock8.vel.x = 0;
      woodBlock9.vel.x = 0;
      woodBlock10.vel.x = 0;
    }
    if (kb.presses("up")) {
      oceanChar.vel.y = -5;
    }

    // stop player at edges of screen
    if (oceanChar.x < width / 8) {
      oceanChar.x = width / 8;
    }
    else if (oceanChar.x > width / 2) {
      oceanChar.x = width / 2;
    }
    else if (oceanChar.y < -50) {
      oceanChar.y = -50;
    }
    else if (oceanChar.x > woodSign.x - 200) {
      oceanChar.x = woodSign.x - 200;
    }

    // tokens found
    if (tokens == 5) {
      fill(255);
      text("Wood Placed: " + woodPlaced + "/10", 300, 35);
      console.log(woodPlaced);
    }

    // wood placement
    if (kb.presses("space") && tokens == 5 && woodPlaced < 10) {
      woodPlaced += 1;
      if (woodPlaced == 1) {
        woodBlock1.pos = { x: woodSign.x + 300, y: height - 150 };
      }
      else if (woodPlaced == 2) {
        woodBlock2.pos = { x: woodBlock1.x + 100, y: height - 150 };
      }
      else if (woodPlaced == 3) {
        woodBlock3.pos = { x: woodBlock2.x, y: height - 250 };
      }
      else if (woodPlaced == 4) {
        woodBlock4.pos = { x: woodBlock3.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 5) {
        woodBlock5.pos = { x: woodBlock4.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 6) {
        woodBlock6.pos = { x: woodBlock5.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 7) {
        woodBlock7.pos = { x: woodBlock6.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 8) {
        woodBlock8.pos = { x: woodBlock7.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 9) {
        woodBlock9.pos = { x: woodBlock8.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 10) {
        woodBlock10.pos = { x: woodBlock9.x + 100, y: height - 350 };
      }
    }

    if (woodPlaced == 10) {
      bridges = 3;
      tokens = 0;
      woodPlaced = 0;
      cameFromWorld = true;
      tutorial = false;
      showScreen2();
    }

    // reset character
    if (reset.mouse.presses()) {
      fromReset = true;
      showScreen5();
    }


  }

  else if (screen == 6) {
    image(screen6Img, 0, 0);

    fill(255);
    text("Tokens: " + tokens + "/5", 130, 35);

    if (volumeButton.mouse.pressing()) {
      image(volumeInfoImg, width - 270, 60)
    }

    if (lives < 3) {
      console.log(lives);
      life3.pos = { x: -600, y: -600 };
      if (lives < 2) {
        life2.pos = { x: -600, y: -600 };
        if (lives < 1) {
          life1.pos = { x: -600, y: -600 };
          fromReset = true;
          showScreen6();
        }
      }
    }

    if (spaceChar.collided(spaceMonster)) {
      lives -= 1;
    }

    if (spaceChar.collided(spaceToken1) && tokens < 5) {
      tokens += 1;
      spaceToken1.y = -500;
    }
    if (spaceChar.collided(spaceToken2) && tokens < 5) {
      tokens += 1;
      spaceToken2.y = -500;
    }
    if (spaceChar.collided(spaceToken3) && tokens < 5) {
      tokens += 1;
      spaceToken3.y = -500;
    }
    if (spaceChar.collided(spaceToken4) && tokens < 5) {
      tokens += 1;
      spaceToken4.y = -500;
    }
    if (spaceChar.collided(spaceToken5) && tokens < 5) {
      tokens += 1;
      spaceToken5.y = -500;
    }

    if (spaceChar.colliding(spaceBlock1)) {
      spaceBlock1.collider = 'dynamic';
    }
    if (spaceChar.colliding(spaceBlock2)) {
      spaceBlock2.collider = 'dynamic';
    }
    if (spaceChar.colliding(spaceBlock3)) {
      spaceBlock3.collider = 'dynamic';
    }
    if (spaceChar.colliding(spaceBlock4)) {
      spaceBlock4.collider = 'dynamic';
    }

    if (spaceBlock1.collides(spaceGround)) {
      spaceBlock1.collider = 'k';
    }
    if (spaceBlock2.collides(spaceGround)) {
      spaceBlock2.collider = 'k';
    }
    if (spaceBlock3.collides(spaceGround)) {
      spaceBlock3.collider = 'k';
    }
    if (spaceBlock4.collides(spaceGround)) {
      spaceBlock4.collider = 'k';
    }

    // player movement
    if (kb.pressing("left")) {
      spaceChar.vel.x = -4;
      spaceToken1.vel.x = 4;
      spaceToken2.vel.x = 4;
      spaceToken3.vel.x = 4;
      spaceToken4.vel.x = 4;
      spaceToken5.vel.x = 4;
      spaceBlock1.vel.x = 4;
      spaceBlock2.vel.x = 4;
      spaceBlock3.vel.x = 4;
      spaceBlock4.vel.x = 4;
      spaceMonster.vel.x = 4;
      woodSign.vel.x = 4;
      woodBlock1.vel.x = 4;
      woodBlock2.vel.x = 4;
      woodBlock3.vel.x = 4;
      woodBlock4.vel.x = 4;
      woodBlock5.vel.x = 4;
      woodBlock6.vel.x = 4;
      woodBlock7.vel.x = 4;
      woodBlock8.vel.x = 4;
      woodBlock9.vel.x = 4;
      woodBlock10.vel.x = 4;
    }
    else if (kb.pressing("right")) {
      spaceChar.vel.x = 4;
      spaceToken1.vel.x = -4;
      spaceToken2.vel.x = -4;
      spaceToken3.vel.x = -4;
      spaceToken4.vel.x = -4;
      spaceToken5.vel.x = -4;
      spaceBlock1.vel.x = -4;
      spaceBlock2.vel.x = -4;
      spaceBlock3.vel.x = -4;
      spaceBlock4.vel.x = -4;
      spaceMonster.vel.x = -4;
      woodSign.vel.x = -4;
      woodBlock1.vel.x = -4;
      woodBlock2.vel.x = -4;
      woodBlock3.vel.x = -4;
      woodBlock4.vel.x = -4;
      woodBlock5.vel.x = -4;
      woodBlock6.vel.x = -4;
      woodBlock7.vel.x = -4;
      woodBlock8.vel.x = -4;
      woodBlock9.vel.x = -4;
      woodBlock10.vel.x = -4;
    }
    else {
      spaceChar.vel.x = 0;
      spaceToken1.vel.x = 0;
      spaceToken2.vel.x = 0;
      spaceToken3.vel.x = 0;
      spaceToken4.vel.x = 0;
      spaceToken5.vel.x = 0;
      spaceBlock1.vel.x = 0;
      spaceBlock2.vel.x = 0;
      spaceBlock3.vel.x = 0;
      spaceBlock4.vel.x = 0;
      spaceMonster.vel.x = 0;
      woodSign.vel.x = 0;
      woodBlock1.vel.x = 0;
      woodBlock2.vel.x = 0;
      woodBlock3.vel.x = 0;
      woodBlock4.vel.x = 0;
      woodBlock5.vel.x = 0;
      woodBlock6.vel.x = 0;
      woodBlock7.vel.x = 0;
      woodBlock8.vel.x = 0;
      woodBlock9.vel.x = 0;
      woodBlock10.vel.x = 0;
    }
    if (kb.presses("up")) {
      spaceChar.vel.y = -7;
    }

    // stop player at edges of screen
    if (spaceChar.x < width / 8) {
      spaceChar.x = width / 8;
    }
    else if (spaceChar.x > width / 2) {
      spaceChar.x = width / 2;
    }
    else if (spaceChar.y < -50) {
      spaceChar.y = -50;
    }
    else if (spaceChar.x > woodSign.x - 200) {
      spaceChar.x = woodSign.x - 200;
    }

    // tokens found
    if (tokens == 5) {
      fill(255);
      text("Wood Placed: " + woodPlaced + "/10", 300, 35);
      console.log(woodPlaced);
    }

    // wood placement
    if (kb.presses("space") && tokens == 5 && woodPlaced < 10) {
      woodPlaced += 1;
      if (woodPlaced == 1) {
        woodBlock1.pos = { x: woodSign.x + 300, y: height - 150 };
      }
      else if (woodPlaced == 2) {
        woodBlock2.pos = { x: woodBlock1.x + 100, y: height - 150 };
      }
      else if (woodPlaced == 3) {
        woodBlock3.pos = { x: woodBlock2.x, y: height - 250 };
      }
      else if (woodPlaced == 4) {
        woodBlock4.pos = { x: woodBlock3.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 5) {
        woodBlock5.pos = { x: woodBlock4.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 6) {
        woodBlock6.pos = { x: woodBlock5.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 7) {
        woodBlock7.pos = { x: woodBlock6.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 8) {
        woodBlock8.pos = { x: woodBlock7.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 9) {
        woodBlock9.pos = { x: woodBlock8.x + 100, y: height - 350 };
      }
      else if (woodPlaced == 10) {
        woodBlock10.pos = { x: woodBlock9.x + 100, y: height - 350 };
      }
    }

    if (woodPlaced == 10) {
      bridges = 4;
      tokens = 0;
      woodPlaced = 0;
      cameFromWorld = true;
      tutorial = false;
      showScreen2();
    }

    // reset character
    if (reset.mouse.presses()) {
      fromReset = true;
      showScreen6();
    }


  }

  else if (screen == 7) {
    image(screen7Img, 0, 0);

    if (volumeButton.mouse.pressing()) {
      image(volumeInfoImg, width - 270, 60)
    }

    if (newGameButton.mouse.presses()) {
      allSprites.remove();
      newGame();
    }
  }


  //allSprites.debug = mouse.pressing();

}

async function unitedSequence() {
  screen = 7;
  await delay(1000);
  allSprites.visible = false;
  image(screen7Img, 0, 0);
  if (musicOn == true) {
    music.pause();
    unitedMusic.loop();
  }

  volumeButton.visible = true;
  united.visible = true;
  united.layer = 2000;
  united.rotationSpeed = 1;
}

function newGame() {

  unitedMusic.stop();
  musicOn = false;

  bridges = 0;
  tokens = 0;
  woodPlaced = 0;
  lives = 3;
  screen = 1;
  gameStarted = false;
  tutorial = false;
  cameFromWorld = false;
  tutorialMode = "OFF";

  createCanvas(1500, 720, 'fullscreen');
  world.gravity.y = 0;

  //Resize images
  globeImg.resize(100, 0);
  lockedImg.resize(300, 0);
  livesImg.resize(50, 0);
  woodSignImg.resize(170, 0);
  woodBlockImg.resize(100, 0);
  resetImg.resize(100, 0);
  volumeButtonImg.resize(150, 0);
  volumeInfoImg.resize(250, 0);
  screen7Img.resize(width, height);
  unitedImg.resize(400, 0);

  // home page images
  screen1Img.resize(width, height);
  instructBImg.resize(100, 0);
  musicImg.resize(100, 0);
  startImg.resize(250, 0);
  instructImg.resize(400, 0);
  continueImg.resize(200, 0);
  newGameImg.resize(200, 0);

  // world page images
  screen2Img.resize(width, height);
  backImg.resize(150, 0);
  fireImg.resize(100, 0);
  oceanImg.resize(100, 0);
  landImg.resize(100, 0);
  spaceImg.resize(100, 0);
  tut1Img.resize(200, 0);
  tut2Img.resize(200, 0);
  bridgeImg.resize(200, 0);

  // fire world images
  screen3Img.resize(width, height);
  groundImg.resize(width, 120);
  lampsImg.resize(50, 0);
  fireTokenImg.resize(60, 0);
  fireBlockImg.resize(80, 0);
  flamesImg.resize(200, 0);
  fireCharImg.resize(180, 0);
  fireMonsterImg.resize(180, 0);
  flyingFlameImg.resize(90, 0);
  tut3Img.resize(200, 0);
  tut4Img.resize(200, 0);
  tut5Img.resize(200, 0);

  // land world images
  screen4Img.resize(width, height);
  landGroundImg.resize(width, 120);
  castleImg.resize(width / 2, 0);
  landCharImg.resize(130, 0);
  landTokenImg.resize(60, 0);
  landBlockImg.resize(80, 0);
  landMonsterImg.resize(140, 0);
  handImg.resize(200, 0);

  // ocean world images
  screen5Img.resize(width, height);
  oceanGroundImg.resize(width, 120);
  oceanCharImg.resize(180, 0);
  oceanBlockImg.resize(160, 0);
  oceanTokenImg.resize(100, 0);
  oceanMonsterImg.resize(280, 0);

  // space world images
  screen6Img.resize(width, height);
  spaceGroundImg.resize(width, 120);
  spaceCharImg.resize(120, 0);
  spaceTokenImg.resize(60, 0);
  spaceBlockImg.resize(160, 0);
  spaceMonsterImg.resize(250, 0);

  // reset sound volumes
  music.setVolume(1.5);
  fireMusic.setVolume(0.6);
  landMusic.setVolume(0.6);
  oceanMusic.setVolume(0.5);
  spaceMusic.setVolume(0.7);
  unitedMusic.setVolume(0.7);

  // create wood stuff for bridge
  woodBlock1 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock2 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock3 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock4 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock5 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock6 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock7 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock8 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock9 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodBlock10 = new Sprite(woodBlockImg, -100, -100, 'k');
  woodSign = new Sprite(woodSignImg, -100, -100, 'k');
  woodSign.rotationLock = true;
  woodSign.vel.y = 0;

  // create general stuff
  globe = new Sprite(globeImg, -600, -600, "k");
  globe.layer = 1001;
  life1 = new Sprite(livesImg, -600, -600, "n");
  life1.layer = 1001;
  life2 = new Sprite(livesImg, -600, -600, "n");
  life2.layer = 1001;
  life3 = new Sprite(livesImg, -600, -600, "n");
  life3.layer = 1001;
  reset = new Sprite(resetImg, -600, -600, "k");
  reset.layer = 1001;
  volumeButton = new Sprite(volumeButtonImg, width - 100, 30, "k");
  volumeButton.layer = 1001;
  volumeInfoImg.layer = 1001;
  united = new Sprite(unitedImg, width / 2, height / 2, "n");

  // create home stuff
  instructButton = new Sprite(instructBImg, width / 2 - 150, height / 2 + 100, 'k');
  musicButton = new Sprite(musicImg, width / 2 - 60, height / 2 + 100, 'k');
  startButton = new Sprite(startImg, width / 2 + 120, height / 2 + 100, 'k');
  continueButton = new Sprite(continueImg, -600, -600, 'k');
  newGameButton = new Sprite(newGameImg, -600, -600, 'k');

  // create world stuff
  backButton = new Sprite(backImg, -200, -200, 'k');
  fireButton = new Sprite(fireImg, -210, -210, 'k');
  oceanButton = new Sprite(oceanImg, -220, -220, 'k');
  landButton = new Sprite(landImg, -230, -230, 'k');
  spaceButton = new Sprite(spaceImg, -240, -240, 'k');
  bridge1 = new Sprite(bridgeImg, -250, -250, 'n');
  bridge2 = new Sprite(bridgeImg, -250, -250, 'n');
  bridge3 = new Sprite(bridgeImg, -250, -250, 'n');
  bridge4 = new Sprite(bridgeImg, -250, -250, 'n');

  // create fire world stuff
  ground = new Sprite(groundImg, -9000, -9000, 's');
  lamps = new Sprite(lampsImg, -9000, -9000, 'n');
  lamps.rotationLock = true;
  lamps.vel.y = 0;
  tut3 = new Sprite(tut3Img, -9000, -9000, 'n');
  tut3.rotationLock = true;
  tut3.vel.y = 0;
  tut3.layer = 11;
  tut4 = new Sprite(tut4Img, -9000, -9000, 'n');
  tut4.rotationLock = true;
  tut4.vel.y = 0;
  tut4.layer = 11;
  tut5 = new Sprite(tut5Img, -9000, -9000, 'n');
  tut5.rotationLock = true;
  tut5.vel.y = 0;
  tut5.layer = 11;

  // fire tokens
  fireToken1 = new Sprite(fireTokenImg, -250, -250, 'k');
  fireToken1.rotationLock = true;
  fireToken1.vel.y = 0;
  fireToken2 = new Sprite(fireTokenImg, -250, -250, 'k');
  fireToken2.rotationLock = true;
  fireToken2.vel.y = 0;
  fireToken3 = new Sprite(fireTokenImg, -250, -250, 'k');
  fireToken3.rotationLock = true;
  fireToken3.vel.y = 0;
  fireToken4 = new Sprite(fireTokenImg, -250, -250, 'k');
  fireToken4.rotationLock = true;
  fireToken4.vel.y = 0;
  fireToken5 = new Sprite(fireTokenImg, -250, -250, 'k');
  fireToken5.rotationLock = true;
  fireToken5.vel.y = 0;

  // fire blocks
  fireBlock1 = new Sprite(fireBlockImg, -250, -250, 'k');
  fireBlock1.rotationLock = true;
  fireBlock1.vel.y = 0;
  fireBlock2 = new Sprite(fireBlockImg, -250, -250, 'k');
  fireBlock2.rotationLock = true;
  fireBlock2.vel.y = 0;
  fireBlock3 = new Sprite(fireBlockImg, -250, -250, 'k');
  fireBlock3.rotationLock = true;
  fireBlock3.vel.y = 0;
  fireBlock4 = new Sprite(fireBlockImg, -250, -250, 'k');
  fireBlock4.rotationLock = true;
  fireBlock4.vel.y = 0;


  flames1 = new Sprite(flamesImg, -250, -250, 'k');
  flames1.rotationLock = true;
  flames1.vel.y = 0;
  fireChar = new Sprite(fireCharImg, -250, -250, 's');
  fireChar.rotationLock = true;
  fireChar.layer = 1000;
  fireMonster = new Sprite(fireMonsterImg, -250, -250, 'k');
  fireMonster.rotationLock = true;
  fireMonster.vel.y = 0;
  flyingFlame1 = new Sprite(flyingFlameImg, -250, -250, 'k');
  flyingFlame1.rotationLock = true;
  flyingFlame1.vel.y = 0;
  flyingFlame2 = new Sprite(flyingFlameImg, -250, -250, 'k');
  flyingFlame2.rotationLock = true;
  flyingFlame2.vel.y = 0;
  flyingFlame3 = new Sprite(flyingFlameImg, -250, -250, 'k');
  flyingFlame3.rotationLock = true;
  flyingFlame3.vel.y = 0;
  flyingFlame1.layer = 1000;
  flyingFlame2.layer = 1000;
  flyingFlame3.layer = 1000;

  // create land world stuff
  landGround = new Sprite(landGroundImg, -9000, -9000, 's');
  landChar = new Sprite(landCharImg, -9000, -9000, 's');
  landChar.rotationLock = true;
  landChar.layer = 1000;
  landMonster = new Sprite(landMonsterImg, -250, -250, 'k');
  landMonster.rotationLock = true;
  landMonster.vel.y = 0;
  hand = new Sprite(handImg, -250, -250, 'k');
  hand.rotationLock = true;
  hand.vel.y = 0;

  // land tokens
  landToken1 = new Sprite(landTokenImg, -250, -250, 'k');
  landToken1.rotationLock = true;
  landToken1.vel.y = 0;
  landToken2 = new Sprite(landTokenImg, -250, -250, 'k');
  landToken2.rotationLock = true;
  landToken2.vel.y = 0;
  landToken3 = new Sprite(landTokenImg, -250, -250, 'k');
  landToken3.rotationLock = true;
  landToken3.vel.y = 0;
  landToken4 = new Sprite(landTokenImg, -250, -250, 'k');
  landToken4.rotationLock = true;
  landToken4.vel.y = 0;
  landToken5 = new Sprite(landTokenImg, -250, -250, 'k');
  landToken5.rotationLock = true;
  landToken5.vel.y = 0;

  // land blocks
  landBlock1 = new Sprite(landBlockImg, -250, -250, 'k');
  landBlock1.rotationLock = true;
  landBlock1.vel.y = 0;
  landBlock2 = new Sprite(landBlockImg, -250, -250, 'k');
  landBlock2.rotationLock = true;
  landBlock2.vel.y = 0;
  landBlock3 = new Sprite(landBlockImg, -250, -250, 'k');
  landBlock3.rotationLock = true;
  landBlock3.vel.y = 0;
  landBlock4 = new Sprite(landBlockImg, -250, -250, 'k');
  landBlock4.rotationLock = true;
  landBlock4.vel.y = 0;

  // create ocean world stuff
  oceanGround = new Sprite(oceanGroundImg, -9000, -9000, 's');
  oceanChar = new Sprite(oceanCharImg, -9000, -9000, 's');
  oceanChar.rotationLock = true;
  oceanChar.layer = 1000;
  oceanMonster = new Sprite(oceanMonsterImg, -250, -250, 'k');
  oceanMonster.rotationLock = true;
  oceanMonster.vel.y = 0;

  // ocean blocks
  oceanBlock1 = new Sprite(oceanBlockImg, -250, -250, 'k');
  oceanBlock1.rotationLock = true;
  oceanBlock1.vel.y = 0;
  oceanBlock2 = new Sprite(oceanBlockImg, -250, -250, 'k');
  oceanBlock2.rotationLock = true;
  oceanBlock2.vel.y = 0;
  oceanBlock3 = new Sprite(oceanBlockImg, -250, -250, 'k');
  oceanBlock3.rotationLock = true;
  oceanBlock3.vel.y = 0;
  oceanBlock4 = new Sprite(oceanBlockImg, -250, -250, 'k');
  oceanBlock4.rotationLock = true;
  oceanBlock4.vel.y = 0;

  // ocean tokens
  oceanToken1 = new Sprite(oceanTokenImg, -250, -250, 'k');
  oceanToken1.rotationLock = true;
  oceanToken1.vel.y = 0;
  oceanToken2 = new Sprite(oceanTokenImg, -250, -250, 'k');
  oceanToken2.rotationLock = true;
  oceanToken2.vel.y = 0;
  oceanToken3 = new Sprite(oceanTokenImg, -250, -250, 'k');
  oceanToken3.rotationLock = true;
  oceanToken3.vel.y = 0;
  oceanToken4 = new Sprite(oceanTokenImg, -250, -250, 'k');
  oceanToken4.rotationLock = true;
  oceanToken4.vel.y = 0;
  oceanToken5 = new Sprite(oceanTokenImg, -250, -250, 'k');
  oceanToken5.rotationLock = true;
  oceanToken5.vel.y = 0;

  // create space world stuff
  spaceGround = new Sprite(spaceGroundImg, -9000, -9000, 's');
  spaceChar = new Sprite(spaceCharImg, -9000, -9000, 's');
  spaceChar.rotationLock = true;
  spaceChar.layer = 1000;
  spaceMonster = new Sprite(spaceMonsterImg, -250, -250, 'k');
  spaceMonster.rotationLock = true;
  spaceMonster.vel.y = 0;

  // space blocks
  spaceBlock1 = new Sprite(spaceBlockImg, -250, -250, 'k');
  spaceBlock1.rotationLock = true;
  spaceBlock1.vel.y = 0;
  spaceBlock2 = new Sprite(spaceBlockImg, -250, -250, 'k');
  spaceBlock2.rotationLock = true;
  spaceBlock2.vel.y = 0;
  spaceBlock3 = new Sprite(spaceBlockImg, -250, -250, 'k');
  spaceBlock3.rotationLock = true;
  spaceBlock3.vel.y = 0;
  spaceBlock4 = new Sprite(spaceBlockImg, -250, -250, 'k');
  spaceBlock4.rotationLock = true;
  spaceBlock4.vel.y = 0;

  // space tokens
  spaceToken1 = new Sprite(spaceTokenImg, -250, -250, 'k');
  spaceToken1.rotationLock = true;
  spaceToken1.vel.y = 0;
  spaceToken2 = new Sprite(spaceTokenImg, -250, -250, 'k');
  spaceToken2.rotationLock = true;
  spaceToken2.vel.y = 0;
  spaceToken3 = new Sprite(spaceTokenImg, -250, -250, 'k');
  spaceToken3.rotationLock = true;
  spaceToken3.vel.y = 0;
  spaceToken4 = new Sprite(spaceTokenImg, -250, -250, 'k');
  spaceToken4.rotationLock = true;
  spaceToken4.vel.y = 0;
  spaceToken5 = new Sprite(spaceTokenImg, -250, -250, 'k');
  spaceToken5.rotationLock = true;
  spaceToken5.vel.y = 0;

  // tutorial stuff
  tut1 = new Sprite(tut1Img, -250, -250, 'k');
  tut1.rotationLock = true;
  tut1.vel.y = 0;

  //Draw background image
  background(0);
  image(screen1Img, 0, 0);

  // text stuff
  textFont(font);
  textSize(30);

  allSprites.visible = true;
  united.visible = false;
}

function showScreen1() {
  world.gravity.y = 0;
  screen = 1;
  image(screen1Img, 0, 0);
  fromReset = false;

  // hide old stuff
  backButton.pos = { x: -100, y: -100 };
  fireButton.pos = { x: -100, y: -100 };
  oceanButton.pos = { x: -100, y: -100 };
  landButton.pos = { x: -100, y: -100 };
  spaceButton.pos = { x: -100, y: -100 };
  globe.pos = { x: -600, y: -600 };
  fireChar.pos = { x: -250, y: -250 };
  lamps.pos = { x: -250, y: -250 };
  ground.pos = { x: -2000, y: -2000 };
  fireMonster.pos = { x: -250, y: -250 };
  tut3.pos = { x: -250, y: -250 };
  bridge1.pos = { x: -100, y: -100 };
  bridge2.pos = { x: -100, y: -100 };
  bridge3.pos = { x: -100, y: -100 };
  bridge4.pos = { x: -100, y: -100 };
  landChar.pos = { x: -9000, y: -9000 };

  fireToken1.pos = { x: -250, y: -250 };
  fireToken2.pos = { x: -250, y: -250 };
  fireToken3.pos = { x: -250, y: -250 };
  fireToken4.pos = { x: -250, y: -250 };
  fireToken5.pos = { x: -250, y: -250 };
  landToken1.pos = { x: -250, y: -250 };
  landToken2.pos = { x: -250, y: -250 };
  landToken3.pos = { x: -250, y: -250 };
  landToken4.pos = { x: -250, y: -250 };
  landToken5.pos = { x: -250, y: -250 };

  fireBlock1.pos = { x: -250, y: -250 };
  fireBlock2.pos = { x: -250, y: -250 };
  fireBlock3.pos = { x: -250, y: -250 };
  fireBlock4.pos = { x: -250, y: -250 };

  flyingFlame1.pos = { x: -250, y: -250 };
  flyingFlame2.pos = { x: -250, y: -250 };
  flyingFlame3.pos = { x: -250, y: -250 };

  flames1.pos = { x: -250, y: -250 };
  life1.pos = { x: -600, y: -600 };
  life2.pos = { x: -600, y: -600 };
  life3.pos = { x: -600, y: -600 };
  woodBlock1.pos = { x: -100, y: -100 };
  woodBlock2.pos = { x: -100, y: -100 };
  woodBlock3.pos = { x: -100, y: -100 };
  woodBlock4.pos = { x: -100, y: -100 };
  woodBlock5.pos = { x: -100, y: -100 };
  woodBlock6.pos = { x: -100, y: -100 };
  woodBlock7.pos = { x: -100, y: -100 };
  woodBlock8.pos = { x: -100, y: -100 };
  woodBlock9.pos = { x: -100, y: -100 };
  woodBlock10.pos = { x: -100, y: -100 };
  woodSign.pos = { x: -100, y: -100 };
  reset.pos = { x: -100, y: -100 };

  // display new stuff
  instructButton.pos = { x: width / 2 - 150, y: height / 2 + 100 };
  musicButton.pos = { x: width / 2 - 60, y: height / 2 + 100 };
  if (gameStarted == false) {
    startButton.pos = { x: width / 2 + 120, y: height / 2 + 100 };
  }
  else {
    continueButton.pos = { x: width / 2 + 120, y: height / 2 + 75 };
    newGameButton.pos = { x: width / 2 + 120, y: height / 2 + 125 };
  }
}

function showScreen2() {
  world.gravity.y = 0;
  screen = 2;
  image(screen2Img, 0, 0)
  if (musicOn == true && cameFromWorld == true) {
    music.loop();
    fireMusic.stop();
    landMusic.stop();
    oceanMusic.stop();
    spaceMusic.stop();
  }
  fromReset = false;

  fireBlock1.collider = 'k';
  fireBlock2.collider = 'k';
  fireBlock3.collider = 'k';
  fireBlock4.collider = 'k';
  fireChar.collider = 's';
  landChar.collider = 's';
  oceanChar.collider = 's';
  spaceChar.collider = 's';

  // hide old stuff
  instructButton.pos = { x: -100, y: -100 };
  musicButton.pos = { x: -100, y: -100 };
  startButton.pos = { x: -100, y: -100 };
  continueButton.pos = { x: -100, y: -100 };
  newGameButton.pos = { x: -100, y: -100 };
  fireChar.pos = { x: -250, y: -250 };
  lamps.pos = { x: -250, y: -250 };
  ground.pos = { x: -2000, y: -2000 };
  fireMonster.pos = { x: -250, y: -250 };
  spaceMonster.pos = { x: -250, y: -250 };
  oceanMonster.pos = { x: -250, y: -250 };
  landMonster.pos = { x: -250, y: -250 };
  tut3.pos = { x: -2500, y: -2500 };
  tut4.pos = { x: -2500, y: -2500 };
  tut5.pos = { x: -2500, y: -2500 };
  landGround.pos = { x: -500, y: -500 };
  landChar.pos = { x: -9000, y: -9000 };
  oceanGround.pos = { x: -500, y: -500 };
  oceanChar.pos = { x: -9000, y: -9000 };
  spaceGround.pos = { x: -500, y: -500 };
  spaceChar.pos = { x: -9000, y: -9000 };

  fireToken1.pos = { x: -250, y: -250 };
  fireToken2.pos = { x: -250, y: -250 };
  fireToken3.pos = { x: -250, y: -250 };
  fireToken4.pos = { x: -250, y: -250 };
  fireToken5.pos = { x: -250, y: -250 };
  landToken1.pos = { x: -250, y: -250 };
  landToken2.pos = { x: -250, y: -250 };
  landToken3.pos = { x: -250, y: -250 };
  landToken4.pos = { x: -250, y: -250 };
  landToken5.pos = { x: -250, y: -250 };
  oceanToken1.pos = { x: -250, y: -250 };
  oceanToken2.pos = { x: -250, y: -250 };
  oceanToken3.pos = { x: -250, y: -250 };
  oceanToken4.pos = { x: -250, y: -250 };
  oceanToken5.pos = { x: -250, y: -250 };
  spaceToken1.pos = { x: -250, y: -250 };
  spaceToken2.pos = { x: -250, y: -250 };
  spaceToken3.pos = { x: -250, y: -250 };
  spaceToken4.pos = { x: -250, y: -250 };
  spaceToken5.pos = { x: -250, y: -250 };

  fireBlock1.pos = { x: -250, y: -250 };
  fireBlock2.pos = { x: -250, y: -250 };
  fireBlock3.pos = { x: -250, y: -250 };
  fireBlock4.pos = { x: -250, y: -250 };
  landBlock1.pos = { x: -250, y: -250 };
  landBlock2.pos = { x: -250, y: -250 };
  landBlock3.pos = { x: -250, y: -250 };
  landBlock4.pos = { x: -250, y: -250 };
  oceanBlock1.pos = { x: -250, y: -250 };
  oceanBlock2.pos = { x: -250, y: -250 };
  oceanBlock3.pos = { x: -250, y: -250 };
  oceanBlock4.pos = { x: -250, y: -250 };
  spaceBlock1.pos = { x: -250, y: -250 };
  spaceBlock2.pos = { x: -250, y: -250 };
  spaceBlock3.pos = { x: -250, y: -250 };
  spaceBlock4.pos = { x: -250, y: -250 };


  flyingFlame1.pos = { x: -250, y: -250 };
  flyingFlame2.pos = { x: -250, y: -250 };
  flyingFlame3.pos = { x: -250, y: -250 };

  flames1.pos = { x: -250, y: -250 };
  hand.pos = { x: -250, y: -250 };
  life1.pos = { x: -600, y: -600 };
  life2.pos = { x: -600, y: -600 };
  life3.pos = { x: -600, y: -600 };
  globe.pos = { x: -600, y: -600 };
  woodBlock1.pos = { x: -100, y: -100 };
  woodBlock2.pos = { x: -100, y: -100 };
  woodBlock3.pos = { x: -100, y: -100 };
  woodBlock4.pos = { x: -100, y: -100 };
  woodBlock5.pos = { x: -100, y: -100 };
  woodBlock6.pos = { x: -100, y: -100 };
  woodBlock7.pos = { x: -100, y: -100 };
  woodBlock8.pos = { x: -100, y: -100 };
  woodBlock9.pos = { x: -100, y: -100 };
  woodBlock10.pos = { x: -100, y: -100 };
  woodSign.pos = { x: -100, y: -100 };
  reset.pos = { x: -100, y: -100 };

  // display new stuff
  backButton.pos = { x: 80, y: 30 };
  if (bridges < 1) {
    fireButton.pos = { x: width / 2 - 50, y: height / 2 - 40 };
  }
  if (bridges < 3) {
    oceanButton.pos = { x: width / 2 + 50, y: height / 2 + 70 };
  }
  if (bridges < 2) {
    landButton.pos = { x: width / 2 + 50, y: height / 2 - 40 };
  }
  if (bridges < 4) {
    spaceButton.pos = { x: width / 2 - 50, y: height / 2 + 70 };
  }

}

function showScreen3() {
  world.gravity.y = 0;
  screen = 3;
  tokens = 0;
  woodPlaced = 0;
  lives = 3;
  image(screen3Img, 0, 0)
  fireChar.collider = "d";

  fireBlock1.collider = 'k';
  fireBlock1.layer = 900;
  fireBlock2.collider = 'k';
  fireBlock2.layer = 900;
  fireBlock3.collider = 'k';
  fireBlock3.layer = 900;
  fireBlock4.collider = 'k';
  fireBlock4.layer = 900;

  if (musicOn == true && fromReset == false) {
    music.pause();
    fireMusic.loop();
  }

  if (tutorial == true) {
    tut3.pos = { x: width / 8 - 100, y: height - 250 };
    tut4.pos = { x: width / 2 + 3100, y: height / 2 };
    tut5.pos = { x: width / 2 + 3900, y: height / 2 - 200 };
  }
  else {
    tut3.pos = { x: -2500, y: -2500 };
    tut4.pos = { x: -2500, y: -2500 };
    tut5.pos = { x: -2500, y: -2500 };
  }

  // hide old stuff
  instructButton.pos = { x: -100, y: -100 };
  musicButton.pos = { x: -100, y: -100 };
  startButton.pos = { x: -100, y: -100 };
  continueButton.pos = { x: -100, y: -100 };
  newGameButton.pos = { x: -100, y: -100 };
  backButton.pos = { x: -100, y: -100 };
  fireButton.pos = { x: -100, y: -100 };
  oceanButton.pos = { x: -100, y: -100 };
  landButton.pos = { x: -100, y: -100 };
  spaceButton.pos = { x: -100, y: -100 };
  woodBlock1.pos = { x: -100, y: -100 };
  woodBlock2.pos = { x: -100, y: -100 };
  woodBlock3.pos = { x: -100, y: -100 };
  woodBlock4.pos = { x: -100, y: -100 };
  woodBlock5.pos = { x: -100, y: -100 };
  woodBlock6.pos = { x: -100, y: -100 };
  woodBlock7.pos = { x: -100, y: -100 };
  woodBlock8.pos = { x: -100, y: -100 };
  woodBlock9.pos = { x: -100, y: -100 };
  woodBlock10.pos = { x: -100, y: -100 };
  bridge1.pos = { x: -100, y: -100 };
  bridge2.pos = { x: -100, y: -100 };
  bridge3.pos = { x: -100, y: -100 };
  bridge4.pos = { x: -100, y: -100 };
  landChar.pos = { x: -9000, y: -9000 };

  // display new stuff
  ground.pos = { x: width / 2, y: height - 60 };
  lamps.pos = { x: width / 2 - 300, y: height / 2 - 100 };
  lamps.layer = 10;
  fireChar.pos = { x: width / 8 + 100, y: height - 250 };
  fireChar.visible = true;
  console.log(fireChar.x + " " + fireChar.y);
  fireMonster.pos = { x: width / 2 + 1900, y: height - 250 };

  fireToken1.pos = { x: width / 2 + 200, y: height / 2 };
  fireToken2.pos = { x: width / 2 + 700, y: height / 2 };
  fireToken3.pos = { x: width / 2 + 1450, y: height / 2 - 50 };
  fireToken4.pos = { x: width / 2 + 2300, y: height - 200 };
  fireToken5.pos = { x: width / 2 + 3900, y: height / 2 };

  fireBlock1.pos = { x: width / 2 + 200, y: height / 2 + 80 };
  fireBlock2.pos = { x: width / 2 + 1300, y: height / 2 + 80 };
  fireBlock3.pos = { x: width / 2 + 1450, y: height / 2 + 30 };
  fireBlock4.pos = { x: width / 2 + 1600, y: height / 2 - 20 };

  flyingFlame1.pos = { x: width / 2 + 2800, y: height / 2 - 100 };
  flyingFlame2.pos = { x: width / 2 + 3300, y: height / 2 + 100 };
  flyingFlame3.pos = { x: width / 2 + 3800, y: height / 2 - 300 };

  flames1.pos = { x: width / 2 + 700, y: height - 165 };
  globe.pos = { x: 60, y: 60 };
  life1.pos = { x: 150, y: 70 };
  life2.pos = { x: 205, y: 70 };
  life3.pos = { x: 260, y: 70 };
  woodSign.pos = { x: width / 2 + 4100, y: height - 170 };
  reset.pos = { x: 60, y: 130 };
  world.gravity.y = 10;

}

function showScreen4() {
  screen = 4;
  tokens = 0;
  woodPlaced = 0;
  lives = 3;
  image(screen4Img, 0, 0)
  image(castleImg, 0, 0);
  screen4Img.layer = 3;
  castleImg.layer = 4;

  landBlock1.collider = 'k';
  landBlock1.layer = 900;
  landBlock2.collider = 'k';
  landBlock2.layer = 900;
  landBlock3.collider = 'k';
  landBlock3.layer = 900;
  landBlock4.collider = 'k';
  landBlock4.layer = 900;

  if (musicOn == true && fromReset == false) {
    music.pause();
    landMusic.loop();
  }

  // hide old stuff
  instructButton.pos = { x: -100, y: -100 };
  musicButton.pos = { x: -100, y: -100 };
  startButton.pos = { x: -100, y: -100 };
  continueButton.pos = { x: -100, y: -100 };
  newGameButton.pos = { x: -100, y: -100 };
  backButton.pos = { x: -100, y: -100 };
  fireButton.pos = { x: -100, y: -100 };
  oceanButton.pos = { x: -100, y: -100 };
  landButton.pos = { x: -100, y: -100 };
  spaceButton.pos = { x: -100, y: -100 };
  woodBlock1.pos = { x: -100, y: -100 };
  woodBlock2.pos = { x: -100, y: -100 };
  woodBlock3.pos = { x: -100, y: -100 };
  woodBlock4.pos = { x: -100, y: -100 };
  woodBlock5.pos = { x: -100, y: -100 };
  woodBlock6.pos = { x: -100, y: -100 };
  woodBlock7.pos = { x: -100, y: -100 };
  woodBlock8.pos = { x: -100, y: -100 };
  woodBlock9.pos = { x: -100, y: -100 };
  woodBlock10.pos = { x: -100, y: -100 };
  bridge1.pos = { x: -100, y: -100 };
  bridge2.pos = { x: -100, y: -100 };
  bridge3.pos = { x: -100, y: -100 };
  bridge4.pos = { x: -100, y: -100 };

  // display new stuff
  landGround.pos = { x: width / 2, y: height - 50 };
  hand.pos = { x: width / 2 + 700, y: height - 180 };
  landMonster.pos = { x: width / 2 + 1900, y: height - 265 };
  globe.pos = { x: 60, y: 60 };
  life1.pos = { x: 150, y: 70 };
  life2.pos = { x: 205, y: 70 };
  life3.pos = { x: 260, y: 70 };
  woodSign.pos = { x: width / 2 + 4100, y: height - 170 };
  landChar.pos = { x: width / 8 + 100, y: height - 255 };
  landChar.visible = true;
  landChar.collider = "d";
  landToken1.pos = { x: width / 2 + 200, y: height / 2 };
  landToken2.pos = { x: width / 2 + 700, y: height / 2 };
  landToken3.pos = { x: width / 2 + 1450, y: height / 2 - 50 };
  landToken4.pos = { x: width / 2 + 2300, y: height - 200 };
  landToken5.pos = { x: width / 2 + 3900, y: height / 2 };
  reset.pos = { x: 60, y: 130 };

  landBlock1.pos = { x: width / 2 + 200, y: height / 2 + 80 };
  landBlock2.pos = { x: width / 2 + 1300, y: height / 2 + 80 };
  landBlock3.pos = { x: width / 2 + 1450, y: height / 2 + 30 };
  landBlock4.pos = { x: width / 2 + 1600, y: height / 2 - 20 };

  world.gravity.y = 10;

}

function showScreen5() {
  screen = 5;
  tokens = 0;
  woodPlaced = 0;
  lives = 3;
  image(screen5Img, 0, 0)
  screen5Img.layer = 3;

  oceanBlock1.collider = 'k';
  oceanBlock1.layer = 900;
  oceanBlock2.collider = 'k';
  oceanBlock2.layer = 900;
  oceanBlock3.collider = 'k';
  oceanBlock3.layer = 900;
  oceanBlock4.collider = 'k';
  oceanBlock4.layer = 900;

  if (musicOn == true && fromReset == false) {
    music.pause();
    oceanMusic.loop();
  }

  // hide old stuff
  instructButton.pos = { x: -100, y: -100 };
  musicButton.pos = { x: -100, y: -100 };
  startButton.pos = { x: -100, y: -100 };
  continueButton.pos = { x: -100, y: -100 };
  newGameButton.pos = { x: -100, y: -100 };
  backButton.pos = { x: -100, y: -100 };
  fireButton.pos = { x: -100, y: -100 };
  oceanButton.pos = { x: -100, y: -100 };
  landButton.pos = { x: -100, y: -100 };
  spaceButton.pos = { x: -100, y: -100 };
  woodBlock1.pos = { x: -100, y: -100 };
  woodBlock2.pos = { x: -100, y: -100 };
  woodBlock3.pos = { x: -100, y: -100 };
  woodBlock4.pos = { x: -100, y: -100 };
  woodBlock5.pos = { x: -100, y: -100 };
  woodBlock6.pos = { x: -100, y: -100 };
  woodBlock7.pos = { x: -100, y: -100 };
  woodBlock8.pos = { x: -100, y: -100 };
  woodBlock9.pos = { x: -100, y: -100 };
  woodBlock10.pos = { x: -100, y: -100 };
  bridge1.pos = { x: -100, y: -100 };
  bridge2.pos = { x: -100, y: -100 };
  bridge3.pos = { x: -100, y: -100 };
  bridge4.pos = { x: -100, y: -100 };

  // display new stuff
  oceanGround.pos = { x: width / 2, y: height - 50 };
  oceanMonster.pos = { x: width / 2 + 1900, y: height - 250 };
  globe.pos = { x: 60, y: 60 };
  life1.pos = { x: 150, y: 70 };
  life2.pos = { x: 205, y: 70 };
  life3.pos = { x: 260, y: 70 };
  woodSign.pos = { x: width / 2 + 4100, y: height - 170 };
  oceanChar.pos = { x: width / 8 + 100, y: height - 255 };
  oceanChar.visible = true;
  oceanChar.collider = "d";
  oceanToken1.pos = { x: width / 2 + 200, y: height / 2 };
  oceanToken2.pos = { x: width / 2 + 700, y: height / 2 };
  oceanToken3.pos = { x: width / 2 + 1450, y: height / 2 - 50 };
  oceanToken4.pos = { x: width / 2 + 2300, y: height - 200 };
  oceanToken5.pos = { x: width / 2 + 3900, y: height / 2 };
  reset.pos = { x: 60, y: 130 };

  oceanBlock1.pos = { x: width / 2 + 200, y: height / 2 + 80 };
  oceanBlock2.pos = { x: width / 2 + 1300, y: height / 2 + 80 };
  oceanBlock3.pos = { x: width / 2 + 1450, y: height / 2 + 30 };
  oceanBlock4.pos = { x: width / 2 + 1600, y: height / 2 - 20 };

  world.gravity.y = 10;

}

function showScreen6() {
  screen = 6;
  tokens = 0;
  woodPlaced = 0;
  lives = 3;
  image(screen6Img, 0, 0)
  screen6Img.layer = 3;

  spaceBlock1.collider = 'k';
  spaceBlock1.layer = 900;
  spaceBlock2.collider = 'k';
  spaceBlock2.layer = 900;
  spaceBlock3.collider = 'k';
  spaceBlock3.layer = 900;
  spaceBlock4.collider = 'k';
  spaceBlock4.layer = 900;

  if (musicOn == true && fromReset == false) {
    music.pause();
    spaceMusic.loop();
  }

  // hide old stuff
  instructButton.pos = { x: -100, y: -100 };
  musicButton.pos = { x: -100, y: -100 };
  startButton.pos = { x: -100, y: -100 };
  continueButton.pos = { x: -100, y: -100 };
  newGameButton.pos = { x: -100, y: -100 };
  backButton.pos = { x: -100, y: -100 };
  fireButton.pos = { x: -100, y: -100 };
  oceanButton.pos = { x: -100, y: -100 };
  landButton.pos = { x: -100, y: -100 };
  spaceButton.pos = { x: -100, y: -100 };
  woodBlock1.pos = { x: -100, y: -100 };
  woodBlock2.pos = { x: -100, y: -100 };
  woodBlock3.pos = { x: -100, y: -100 };
  woodBlock4.pos = { x: -100, y: -100 };
  woodBlock5.pos = { x: -100, y: -100 };
  woodBlock6.pos = { x: -100, y: -100 };
  woodBlock7.pos = { x: -100, y: -100 };
  woodBlock8.pos = { x: -100, y: -100 };
  woodBlock9.pos = { x: -100, y: -100 };
  woodBlock10.pos = { x: -100, y: -100 };
  bridge1.pos = { x: -100, y: -100 };
  bridge2.pos = { x: -100, y: -100 };
  bridge3.pos = { x: -100, y: -100 };
  bridge4.pos = { x: -100, y: -100 };

  // display new stuff
  spaceGround.pos = { x: width / 2, y: height - 50 };
  spaceMonster.pos = { x: width / 2 + 1900, y: height - 250 };
  globe.pos = { x: 60, y: 60 };
  life1.pos = { x: 150, y: 70 };
  life2.pos = { x: 205, y: 70 };
  life3.pos = { x: 260, y: 70 };
  woodSign.pos = { x: width / 2 + 4100, y: height - 170 };
  spaceChar.pos = { x: width / 8 + 100, y: height - 255 };
  spaceChar.visible = true;
  spaceChar.collider = "d";
  spaceToken1.pos = { x: width / 2 + 200, y: height / 2 };
  spaceToken2.pos = { x: width / 2 + 700, y: height / 2 };
  spaceToken3.pos = { x: width / 2 + 1450, y: height / 2 - 50 };
  spaceToken4.pos = { x: width / 2 + 2300, y: height - 200 };
  spaceToken5.pos = { x: width / 2 + 3900, y: height / 2 };
  reset.pos = { x: 60, y: 130 };

  spaceBlock1.pos = { x: width / 2 + 200, y: height / 2 + 80 };
  spaceBlock2.pos = { x: width / 2 + 1300, y: height / 2 + 80 };
  spaceBlock3.pos = { x: width / 2 + 1450, y: height / 2 + 30 };
  spaceBlock4.pos = { x: width / 2 + 1600, y: height / 2 - 20 };

  world.gravity.y = 7;

}
