const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  Engine.update(engine);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
}

var particles=[];
var plinkos=[];
var divisions=[];

function draw() {
  background(255,255,255);  
  drawSprites();
}

for(var k=0; k <= width; k = k + 80){
  divisions.push(new divisions(k,height-dividionHeight/2,10,divisionHeight))
}