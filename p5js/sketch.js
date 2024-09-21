
var mapImage;
var mapX = 0;
var mapY = 0;
var mapSong;

var spriteImage;
var spriteX;
var spriteY;

var midgarLink;
var midgarSong;

var chocoboLink;
var chocoboSong;

var goldLink;
var goldSong;

var costaLink;
var costaSong;

var iceLink;
var iceSong;

var wutaiLink;
var wutaiSong;

var clickSound;

var canvas;
var canvasX;
var canvasY;
var canvasHeight;
var canvasWidth;

var clickCount = 1;

var font;

function preload(){
  mapImage = loadImage('../media/images/ffvii_map_filter.jpg');
  mapSong = loadSound('../media/audio/25-Main Theme of Final Fantasy VII.mp3');
  mapSong.setVolume(0.03);

  spriteImage = createImg('../media/images/cloud_sprite.png'); 
 
  clickSound = loadSound('../media/audio/clicking.mp3');
  clickSound.setLoop(false);
  clickSound.setVolume(0.1);

  midgarSong = loadSound("../media/audio/05-Anxious Heart.mp3");
  midgarSong.setVolume(0.03);
  chocoboSong = loadSound("../media/audio/29-Farm Boy.mp3");
  chocoboSong.setVolume(0.03);
  goldSong = loadSound("../media/audio/43-Gold Saucer.mp3");
  goldSong.setVolume(0.03);
  costaSong = loadSound("../media/audio/40-Costa del Sol.mp3");
  costaSong.setVolume(0.03);
  iceSong = loadSound("../media/audio/66-Buried in the Snow.mp3");
  iceSong.setVolume(0.03);
  wutaiSong = loadSound("../media/audio/55-Wutai.mp3");
  wutaiSong.setVolume(0.03);

  font = loadFont('../media/font/Reactor7.ttf');
  
}
function setup() {
  midgarLink = createA('#midgarInfo', '_____________');
  midgarLink.position(-1, -1);
  chocoboLink = createA('#chocoboInfo', '__________');
  chocoboLink.position(-1, -1);
  goldLink = createA('#goldInfo', '____________________');
  goldLink.position(-1, -1);
  costaLink = createA('#costaInfo', '_____________');
  costaLink.position(-1, -1);
  iceLink = createA('#iceInfo', '____________');
  iceLink.position(-1, -1);
  wutaiLink = createA('#wutaiInfo', '___________');
  wutaiLink.position(-1, -1);

  canvasWidth = windowWidth*0.8;
  canvasHeight = windowHeight;
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvasX = windowWidth*0.07;
  canvasY = windowHeight*0.14;
  canvas.parent('sketch-holder');
  mapSong.play();
  

}

function draw() {
  background(220);
  
  
  image(mapImage, mapX, mapY, canvasWidth, canvasHeight);
  push();
    textFont(font);
    textSize(30);
    textAlign(CENTER, TOP);
    //text("PRESS W,A,S,or D TO NAVIGATE THE MAP. HOVER OVER A PLACE AND CLICK ON IT TO EXPLORE FURTHER. ", 0, 20, canvasWidth); 
    text("Canvas (" + canvasX +  ", " + canvasY + ")", 0, 20, canvasWidth);  
   
    pop();
  
  //midgar
  push();
  var rectX = canvasWidth*0.595;
  var rectY = canvasHeight*0.45;
  var rectWidth = canvasWidth*0.13;
  var rectHeight = canvasHeight*0.1;

  textFont(font);
  textSize(30);
  text("Window (" + windowWidth + ", " + windowHeight + ")", 0, 20, canvasWidth);
  text("Mouse (" + spriteX + ", " + mouseY + ")", 0, 80, canvasWidth);
  
    noFill();
    
  
    rect(rectX, rectY, rectWidth, rectHeight);
   
    
    
    if(onRectangle(rectX, rectY, rectWidth, rectHeight)){
      midgarLink.show();
      midgarLink.position(rectX, rectY);
      if(mouseIsPressed){
          clickSound.play();
          midgarSong.setLoop(false);
          midgarSong.play();
          mapSong.stop();
      }
    }

    else{
      midgarSong.stop();
      midgarLink.hide();      
    }

    

  pop();

  //CHOCOBO
  push();
    noFill();
    //noStroke();
   var rectX = canvasWidth*0.79;
   var rectY = canvasHeight*0.54;
   var rectWidth = canvasWidth*0.13;
   var rectHeight = canvasHeight*0.1;
    rect(rectX, rectY, rectWidth, rectHeight);

    if(onRectangle(rectX, rectY, rectWidth, rectHeight)){
      chocoboLink.show();
      chocoboLink.position(rectX+50, rectY+210);
      if(mouseX > 0 && mouseX < canvasWidth && mouseY > 0 && mouseY < canvasHeight){
        if(mouseIsPressed){
          clickSound.play();
          chocoboSong.play();
          mapSong.stop();
        }
      }
    }

    else{
      chocoboSong.stop();
      chocoboLink.hide();
    }

  pop();
  
  //gold saucer
  push();
    noFill();
   
    //noStroke();

var rectX = canvasWidth*0.38;
var rectY = canvasHeight*0.61;
var rectWidth = canvasWidth*0.13;
var rectHeight = canvasHeight*0.1;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight)){
      goldLink.show();
      goldLink.position(rectX-5, rectY+50);
     
        if(mouseIsPressed){
          clickSound.play();
          goldSong.play();
          mapSong.stop();
        }
      
    }
    else{
      goldSong.stop();
      goldLink.hide();
    }
  pop();

  //costa del sol
  push();
    noFill();
 // noStroke();
 
  var rectX = canvasWidth*0.445;
  var rectY = canvasHeight*0.485;
  var rectWidth = canvasWidth*0.13;
  var rectHeight = canvasHeight*0.1;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight)){
      costaLink.show();
      costaLink.position(rectX+120, rectY+158);
      
        if(mouseIsPressed){
          clickSound.play();
          costaSong.play();
          mapSong.stop();
        }
      
    }
    else{
      costaSong.stop();
      costaLink.hide();
    }
  pop();

  //icicle village
  push();
    noFill();
   // noStroke();
   
    var rectX = canvasWidth*0.325;
    var rectY = canvasHeight*0.25;
    var rectWidth = canvasWidth*0.13;
    var rectHeight = canvasHeight*0.1;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight)){
      iceLink.show();
      iceLink.position(rectX+115, rectY+180);
      
        if(mouseIsPressed){
          clickSound.play();
          iceSong.play();
          mapSong.stop();
        }
      
    }
    else{
      iceSong.stop();
      iceLink.hide();
    }
  pop();

  //wutai
  push();
    noFill();
   // noStroke();
   
    var rectX = canvasWidth*0.08;
    var rectY = canvasHeight*0.315;
    var rectWidth = canvasWidth*0.13;
    var rectHeight = canvasHeight*0.1;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight)){
      wutaiLink.show();
      wutaiLink.position(rectX+80, rectY+138);
        if(mouseIsPressed){
          clickSound.play();
          wutaiSong.play();
          mapSong.stop();
        }
    }
    else{
      wutaiSong.stop();
      wutaiLink.hide();
    }
  pop();
  
  //sprite movement
  push(); 
    if(mouseX > 0 && mouseX < canvasWidth && mouseY > 0 && mouseY < canvasHeight){
      noCursor();
      spriteImage.size(windowWidth/49.83, windowHeight/20)
      image(spriteImage, mouseX, mouseY);
    }
  pop();
  
  
}
  

function onRectangle(rectX, rectY, rectWidth, rectHeight){
  if(mouseX > rectX && mouseX < rectX+rectWidth && mouseY > rectY && mouseY < rectY+rectHeight){
    return true;
  }
  else{
   
    return false;
  }
}

