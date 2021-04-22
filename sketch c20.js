var cat, catImg
var mouse, mouseImg


function preload() {
 cat = loadAnimation("cat1.png")
 cat2 = loadAnimation("cat4.png")
 mouse2 = loadAnimation("mouse4.png")
  mouse = loadImage("mouse1.png", mouseImg)
 catimg1 = loadAnimation("cat2.png", "cat3.png")
 mouseimg2 = loadAnimation("mouse2.png", "mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    catSprite = createSprite
    mouseSprite=createSprite

    if(catSprite.istouching(mouseSprite)){
        catSprite.changeAnimation(cat4.png,"cat2")
        mouseSprite.changeAnimation(mouse4.png, "mouse2")
    }

}

function draw() {

    background("garden.png");

   

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_AARROW){
        mouse.addAnimation("mouse3.png", mouseImg2)
        mouse.changeAnimation("mouse3.png")
        mouse.frameDelay=25

    }

}

