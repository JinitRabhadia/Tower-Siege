const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform1, platform2;
var base;
var polygon_img;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18, box19, box20, box21, box22;
var polygon;
var sling;


function preload(){
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    base = new Ground(600,375,1200,50);

    platform1 = new Ground(600,295,400,20);

    box1 = new Block(600,260,30,40);
    box2 = new Block(570,260,30,40);
    box3 = new Block(540,260,30,40);
    box4 = new Block(630,260,30,40);
    box5 = new Block(660,260,30,40);



    box6= new Block(585,220,30,40);
    box7 = new Block(555,220,30,40);
    box8 = new Block(615,220,30,40);
    box9= new Block(645,220,30,40);



    box10 = new Block(600,170,30,40);
    box11 = new Block(570,180,30,40);
    box12 = new Block(630,180,30,40);


    box13 = new Block(600,140,30,40);


  box14 = new Block(900,170,30,40);
  box15 = new Block(930,170,30,40);
  box16 = new Block(870,170,30,40);
  box17 = new Block(840,170,30,40);
  box18 = new Block(960,170,30,40);

  box19 = new Block(900,140,30,40);
  box20 = new Block(930,140,30,40);
  box21 = new Block(870,140,30,40);

  box22 = new Block(900,110,30,40);

    polygon = new Polygon(200,200,20);

    sling = new SlingShot(polygon.body,{x:200,y:200});





}

function draw(){
    Engine.update(engine);
    background("grey");

    base.display();

    platform1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();


    
    polygon.display();

    
    text("Drag And Release Your Mouse",600,400)
    sling.display();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}