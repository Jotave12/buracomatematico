
let rate=30;
let cont=910;
let contS=0;

var x = 255;
var y = 225;
var xjogador = 340;
var yjogador = 440;

var xObstaculo1 = 120;
var yObstaculo1 = 140;
var rObstaculo1 = 90;
var valorObstaculo1;
    
var xObstaculo2 = 350;
var yObstaculo2 = 140;
var rObstaculo3 = 90;
var valorObstaculo2;
    
var xObstaculo3 = 580;
var yObstaculo3 = 140;
var rObstaculo3 = 90;
var valorObstaculo3;
    
var rjogador = 30;

var opcao = 1;
var tela = 0;

var n1;
var n2;

var pontos=0;
var certo=0;

function reset(){
  xjogador=340;
  yjogador=440;
  fill(0)
  image( img3, xjogador, yjogador, 50, 50);
}
function sorteio() {
  n1 = parseInt(random(1,20));
  n2 = parseInt(random(-20,20));
  certo = parseInt(random(1,3.9));
  
  if(certo==3) {
     valorObstaculo3=n1+n2;
     valorObstaculo2=parseInt(random(-20,50));
     valorObstaculo1=parseInt(random(-20,50));
  }
  if(certo==2) {
     valorObstaculo2=n1+n2;
     valorObstaculo1=parseInt(random(-20,50));
     valorObstaculo3=parseInt(random(-20,50));
    }
  if(certo==1) {
      valorObstaculo1=n1+n2;
      valorObstaculo3=parseInt(random(-20,50));
      valorObstaculo2=parseInt(random(-20,50));
    }
}

function setup(){
  createCanvas(700, 500);
  frameRate(rate);
  sorteio();
  reset();
    let img;
}
function preload() {
  img = loadImage('IMG_0548.jpg');
  img1 = loadImage('WhatsApp Image 2020-07-20 at 09.21.56.jpeg');
  //som1= loadSound('som1.wav.wav');
  img2= loadImage('IMG_0584.gif');
  img3= loadImage('kisspng-astronaut-space-suit-clip-art-arena-of-valor-5b2f170bebf4f9.7103384115298127479665.png');
  //jogo1= loadSound('jogo.wav');
  som2=loadSound('win.mp3');
  img4=loadImage('IMG_0572.jpg');
  img5=loadImage('IMG_0581.gif');
  img6=loadImage('IMG9.jpg');
}
function draw(){
  background(img);
  if(tela == 0){
    menu();
  }
  if(tela == 1){
    
    fase1();
    tempo();
    
  }
  if(tela == 2){
    instrucoes();
  }
  if(tela == 3){
    creditos();
  }
  if(tela==4){
   gameover(); 
  }
  if(tela==5){
    win();
  }
}
function menu(){
  stroke(255);
  fill(0,0,0,0);
  rect(x, y, 175, 50);
  
  textSize(25);
  fill(240);
  text('INICIAR', 297, 258);
  textSize(25);
  fill(240);
  text('INSTRUÇÕES', 262, 330);
  textSize(25);
  fill(240);
  text('CRÉDITOS', 278, 400);
}
 function keyPressed(){
  
   if(tela == 0){
     if(key == "ArrowUp" && y>225){
    y=y-70
  opcao=opcao-1;
  console.log(opcao)
  }
if(key == "ArrowDown" && y<300){
  y=y+70
  opcao=opcao+1;
  console.log(opcao)
}
if (key == "Enter"){
    //som1.play();
    tela=opcao;
    }
 }
   if(tela == 4 || tela == 2 || tela == 3 || tela == 1 || tela == 5){
      if(key == "Escape"){
        tela = 0;
        sorteio();
        reset();
        cont=910;
        pontos=0;
        img2= loadImage('IMG_0584.gif');
     } 
  }
}
function fase1(){
  
  background(img4);
  fill(255);
  text('Pontos: '+pontos, 500, 30);
  stroke(255);
  fill(0);
  ellipse(xObstaculo1, yObstaculo1, 180,180);
  
  fill(255);
  text(valorObstaculo1,105,148);
  fill(0)
  ellipse(xObstaculo2, yObstaculo2, 180,180);
  
  fill(255);
  text(valorObstaculo2,335,148);
  fill(0)
  ellipse(xObstaculo3, yObstaculo3, 180,180);
  
  fill(255);
  text(valorObstaculo3,565,148);
  
  noStroke();
  textSize(32);
  fill(255);
  if(n2<0){
  text(n1+" "+n2+" = ?", 30, 30);
  }
  if(n2>0){
    text(n1+" + "+n2+" = ?", 30, 30);
  }
  fill(0)
  image(img3, xjogador, yjogador,50,50);
  
     if(keyIsDown(UP_ARROW) && yjogador>=70){
     yjogador=yjogador-15;
     }
  if(keyIsDown(DOWN_ARROW) && yjogador<=435){
     yjogador=yjogador+15;
     }
  if(keyIsDown(LEFT_ARROW) && xjogador>=20){
     xjogador=xjogador-15;
   }
   if(keyIsDown(RIGHT_ARROW)&& xjogador<650){
     xjogador=xjogador+15;
   }
  
  
  if(dist(xObstaculo3, yObstaculo3, xjogador, yjogador) < 78 + 30 ){
    if(certo==3){
        pontos=pontos+10;
       fill(255);
       ellipse(xObstaculo3, yObstaculo3, 180,180);
       sorteio();
       reset();
      cont=910;
    }else{
       tela = 4;
    }
  }
  if(dist(xObstaculo2, yObstaculo2, xjogador, yjogador) < 78 + 30 ){
    if(certo==2){
        pontos=pontos+10;
       fill(255);
       ellipse(xObstaculo2, yObstaculo2, 180,180);
       sorteio();
       reset();
      cont=910;
       }else{
         tela = 4;
    }
    
    }
  if(dist(xObstaculo1, yObstaculo1, xjogador, yjogador) < 78 + 30 ){
    if(certo==1){
        pontos=pontos+10;
       fill(255);
       ellipse(xObstaculo1, yObstaculo1, 180,180);
       sorteio();
       reset();
      cont=910;
       }else{
         tela = 4;
      }
    }
  
  if(pontos == 150){

    tela= 5;
    
  }
  
}
  function instrucoes(){
  background(img4);
    
  textSize(32);
  fill(255);
  text('Instruções', 280, 30);
  textSize(22);
  fill(255);
  text(' Este jogo foi feito para alunos do 4º ano do Fundamental.\n Com o intuito de instigar o aluno a resolver problemas matemáticos \n contra o tempo, utilizando sua coordenação motora.\n\n Use a setas do seu teclado para movimentar seu personagem\n para Direita, Esquerda, Cima ou Baixo. Resolva o desafio com a\n resposta do buraco correto e se divirta!',10, 100);
    text('Pressione "ESC" para voltar ao menu', 30, 480);
}
function creditos(){
  background(img4);
  textSize(32);
  fill(255);
  text('Créditos', 280, 30);
  textSize(20);
  fill(255);
  image(img1, 20, 50, 200, 200);
  image(img6, 380, 50, 200, 200);
  text('Ilustração: Jorânia Mendonça', 350, 270);
  text('Instragram: @Ilustrariscando', 350, 300);
  text('Instragram: @jotaconcepcoescriativas', 350, 330);
  text('Progamador: João Victor Santos',20, 270);
  text('Instagram: @jv_santos12\nFacebook: João Victor Santos', 20, 300);
  text('Pressione "ESC" para voltar ao menu', 30, 480);
  
}
function gameover(){
  background(img2);
    fill(255);
    //text('VOCÊ FOI SUGADO!', 235, 200);
    //text('PONTUÇÃO: ', 280, 250);
  
  if(pontos>=0 && pontos<=10){
    textSize(50);
    text(pontos, 335, 300);
  }
  if(pontos>10 && pontos<=99){
     textSize(50);
    text(pontos, 325, 300)
  }if(pontos>=100){
    textSize(50);
    text(pontos, 310, 300)
  }
    textSize(23);
    fill(0);
    stroke(0);
    text('Pressione "ESC" para voltar ao menu', 160, 490);
  }
function win(){

    background(img5);
  fill(255);
  textSize(50);
  
  textSize(23);
  text('Pressione "ESC" para voltar ao menu', 30, 480);
  
}

function tempo(){
  cont = cont -1;
  textSize(32);
  contS = parseInt(cont/rate);
  fill(255);
  text('Tempo: '+" "+contS, 270, 30);
  if(contS == 0){
   tela = 4;
  }
}
