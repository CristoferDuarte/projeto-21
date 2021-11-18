var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, edges;
var music;

function preload(){
    // carregue o som aqui
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(515,580,200,30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(740,580,200,30);
    bloco4.shapeColor = "red";


    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 6
    bola.velocityY = 6


}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    bola.bounceOff(edges);

    
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        //.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityX = 6
        bola.velocityY = 6
        //escreva o código para parar a música
    }
    
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "green";
        //music.play();
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "red";
        //music.play();
    }

    drawSprites();
}