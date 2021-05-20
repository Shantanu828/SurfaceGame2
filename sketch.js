var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
   music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(5,570,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(250,570,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(500,570,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(750,570,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 3;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(isTouching(block1,ball) && bounceOff(block1,ball)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(isTouching(block2,ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
    
    }

    //write code to bounce off ball from the block3
    if(isTouching(block3,ball) && bounceOff(block3,ball)){
        ball.shapeColor = "red";
        music.play();
     }

    //write code to bounce off ball from the block4
    if(isTouching(block4,ball) && bounceOff(block4,ball)){
        ball.shapeColor = "green";
        music.play();
     
    }
    drawSprites();
    }
