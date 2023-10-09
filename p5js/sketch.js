
var mapImage;
var spriteImage;
var mapX = 0;
var mapY = 0;
var spriteX = mapX+900;//900
var spriteY= mapY+400;//400

var midgarLink;
var chocoboLink;
var goldLink;
var costaLink;
var iceLink;
var wutaiLink;

var rectColor = "yellow"; 


function preload(){
  mapImage = loadImage('../media/images/ffvii_map.jpg');
  spriteImage = createImg('../media/images/cloud_sprite.png');
}
function setup() {
  midgarLink = createA('#midgarInfo', '_____________');
  midgarLink.position(-1, -1);
  chocoboLink = createA('#chocoboInfo', '__________');
  chocoboLink.position(-1, -1);
  goldLink = createA('#goldInfo', '______________________');
  goldLink.position(-1, -1);
  costaLink = createA('#costaInfo', '_____________');
  costaLink.position(-1, -1);
  iceLink = createA('#iceInfo', '____________');
  iceLink.position(-1, -1);
  wutaiLink = createA('#wutaiInfo', '___________');
  wutaiLink.position(-1, -1);

  windowWidth-=100;
  windowHeight-=150;
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  
  
}

function draw() {
  background(220);
  
  image(mapImage, mapX, mapY, windowWidth, windowHeight);
  
  //midgar
  push();
    noFill();
    noStroke();
    var rectX = windowWidth-775;
    var rectY = windowHeight-480;
    var rectWidth = windowWidth-1795;
    var rectHeight = windowHeight-825;
   
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      midgarLink.show();
      midgarLink.position(rectX+63, rectY+105);
      
    }
    else{
      midgarLink.hide();
      
    }
    
  pop();

  //CHOCOBO
  push();
    noFill();
    noStroke();
    var rectX = windowWidth-390;
    var rectY = windowHeight-400;
    var rectWidth = windowWidth-1760;
    var rectHeight = windowHeight-820;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      chocoboLink.show();
      chocoboLink.position(rectX+60, rectY+117);
    }
    else{
      chocoboLink.hide();
    }
  pop();
  
  //gold saucer
  push();
    noFill();
    noStroke();
    var rectX = windowWidth-1220;
    var rectY = windowHeight-347;
    var rectWidth = windowWidth-1695;
    var rectHeight = windowHeight-825;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      goldLink.show();
      goldLink.position(rectX+55, rectY+105);
    }
    else{
      goldLink.hide();
    }
  pop();

  //costa del sol
  push();
    noFill();
    noStroke();
    var rectX = windowWidth-1080;
    var rectY = windowHeight-458;
    var rectWidth = windowWidth-1780;
    var rectHeight = windowHeight-820;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      costaLink.show();
      costaLink.position(rectX+66, rectY+117);
    }
    else{
      costaLink.hide();
    }
  pop();

  //icicle village
  push();
    noFill();
    noStroke();
    var rectX = windowWidth-1300;
    var rectY = windowHeight-660;
    var rectWidth = windowWidth-1800;
    var rectHeight = windowHeight-820;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      iceLink.show();
      iceLink.position(rectX+51, rectY+119);
    }
    else{
      iceLink.hide();
    }
  pop();

  //wutai
  push();
    noFill();
    noStroke();
    var rectX = windowWidth-1790;
    var rectY = windowHeight-597;
    var rectWidth = windowWidth-1820;
    var rectHeight = windowHeight-840;
    rect(rectX, rectY, rectWidth, rectHeight);
    if(onRectangle(rectX, rectY, rectWidth, rectHeight) == false){
      wutaiLink.show();
      wutaiLink.position(rectX+60, rectY+95);
    }
    else{
      wutaiLink.hide();
    }
  pop();
  
  push(); 
    
    spriteImage.position(spriteX+25, spriteY+25);
    spriteImage.size(30,45);
    if(keyIsDown(87)){
      spriteY-=7;
    }
    if(keyIsDown(83)){
      spriteY+=7;
    }
    if(keyIsDown(68)){
      spriteX+=7;
    }
    if(keyIsDown(65)){
      spriteX-=7;
    }
  pop();

  
}
  

function onRectangle(rectX, rectY, rectWidth, rectHeight){
  if(spriteX > rectX && spriteX < rectX+rectWidth && spriteY > rectY && spriteY < rectY+rectHeight){
    return false;
  }
  else{
    return true;
  }
  
}
