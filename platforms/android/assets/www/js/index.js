
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        makeSketch();
    }
};

app.initialize();

function makeSketch(){
  console.log('device ready, making sketch');
	
var PuertoRico = {
  x: 398,
  y: 26,
  sizeX: 12,
  sizeY: 12,
  threshhold: 100
};
var Colombia = {
  x: 180,
  y: 210,
  sizeX: 20,
  sizeY: 20,
  threshhold: 100
}
var Cuba = {
  x: 260,
  y: 35,
  sizeX: 20,
  sizeY: 20,
  threshhold: 100
}
var Panama = {
  x: 167,
  y: 165,
  sizeX: 20,
  sizeY: 20,
  threshhold: 100
}
var Jamaica = {
  x: 260,
  y: 70,
  sizeX: 10,
  sizeY: 10,
  threshhold: 100
}

var Rio= {
  x:403,
  y:275,
  sizeX:20,
  sizeY:20,
  threshhold:100
}

var SantoDomingo={
  x:390,
  y:119,
  sizeX:15,
  sizeY:15,
  threshhold:100
}

var Montevideo={
  x:265,
  y:442,
  sizeX:20,
  sizeY:20,
  threshhold:100
}

var Haiti= {
  x:450,
  y:150,
  sizeX:12,
  sizeY:12,
  threshhold:100
}

// function preload() {
//   console.log("loading sounds");
//   mySound1 = loadSound('music/Candombe.mp3');
//   mySound2 = loadSound('music/colombia.mp3');
//   mySound3 = loadSound('music/pr.mp3');
//   mySound4 = loadSound('music/jamaica.mp3');
//   mySound5 = loadSound('music/brasil.mp3');
//   mySound6 = loadSound('music/Panama.mp3');
//   mySound7 = loadSound('music/Haiti.mp3');
//   mySound8 = loadSound('music/DR.mp3');
  
// }
  
 function setup() {
  mySound1 = loadSound('music/Candombe.mp3');
  mySound2 = loadSound('music/colombia.mp3');
  mySound3 = loadSound('music/pr.mp3');
  mySound4 = loadSound('music/jamaica.mp3');
  mySound5 = loadSound('music/brasil.mp3');
  mySound6 = loadSound('music/Panama.mp3');
  mySound7 = loadSound('music/Haiti.mp3');
  mySound8 = loadSound('music/DR.mp3');
  console.log("canvas created");
  createCanvas (480,800);
}

function draw() {
  background(2, 122, 222);
  fill(3, 222, 00);
  noStroke();
 

  
  
  
  triangle(170, 175, 420, 270, 170, 575); //continent   

  triangle(150, 180, 190, 170, 160, 140); //panama

  triangle(120, 150, 200, 135, 140, 80); //costa rica

  triangle(200, 70, 110, 5, 80, 90); //mexico

  triangle(230, 40, 265, 20, 400, 75); //cuba

  triangle(250, 75, 260, 65, 340, 80); //jamaica

  triangle(400, 35, 410, 20, 380, 20); //PR

  triangle(380, 100, 380, 130, 490, 170); //DR/Haiti

  fill(222, 33, 22);

  ellipse(Montevideo.x,Montevideo.y,Montevideo.sizeX,Montevideo.sizeY); //montevideo

  ellipse(Rio.x,Rio.y,Rio.sizeX,Rio.sizeY); //rio

  ellipse(Colombia.x, Colombia.y, Colombia.sizeX, Colombia.sizeY); //colombia

  ellipse(Panama.x, Panama.y, Panama.sizeX, Panama.sizeY); //panama

  ellipse(Cuba.x, Cuba.y, Cuba.sizeX, Cuba.sizeY); //habana

  ellipse(Jamaica.x, Jamaica.y, Jamaica.sizeX, Jamaica.sizeY); //kingston

  //Port Rico
  ellipse(PuertoRico.x, PuertoRico.y, PuertoRico.sizeX, PuertoRico.sizeY); //san juan


  ellipse(SantoDomingo.x, SantoDomingo.y,SantoDomingo.sizeX,SantoDomingo.sizeY); //santo domingo

  ellipse(Haiti.x,Haiti.y,Haiti.sizeX,Haiti.sizeY); // port-au-prince

}

function mousePressed() {
      if (int(dist(mouseX, mouseY, PuertoRico.x, PuertoRico.y)) < 20) {
        //Triggered when the mouse is clicked, and it's close enough to san juan
        print("Puerto Rico chosen");
        mySound3.setVolume(0.1);
        mySound3.play();
      }        //Porto Rico volume to 1
      
      if (int(dist(mouseX, mouseY, Colombia.x, Colombia.y)) < 20) {
        // Triggered when the mouse is clicked, and it's close enough to san juan
        print("Colombia chosen");
        mySound2.setVolume(0.1);
        mySound2.play();
      }
      
      if (int(dist(mouseX, mouseY, Cuba.x, Cuba.y)) < 20) {
        //Triggered when the mouse is clicked, and it's close enough to san juan
        print("Cuba chosen");
      }
      
      if (int(dist(mouseX, mouseY, Panama.x, Panama.y)) < 20) {
        // Triggered when the mouse is clicked, and it's close enough to san juan
        print("Panama chosen");
        mySound6.setVolume(0.2);
        mySound6.play();
      }

      if (int(dist(mouseX, mouseY, Jamaica.x, Jamaica.y)) < 20) {
        // Triggered when the mouse is clicked, and it's close enough to san juan
        print("Jamaica chosen");
        mySound4.setVolume(0.3);
        mySound4.play();
      }      
  
      if (int(dist(mouseX, mouseY, Rio.x, Rio.y)) < 20) {
            // Triggered when the mouse is clicked, and it's close enough to san juan
            print("Rio chosen");
            mySound5.setVolume(0.2);
            mySound5.play();
      }
  
      if (int(dist(mouseX, mouseY,Haiti.x,Haiti.y)) < 20) {
            // Triggered when the mouse is clicked, and it's close enough to san juan
            print("SantoDomingo chosen");
            //mySound8.setVolume(0.2);
            //mySound8.play();
      }

       if (int(dist(mouseX, mouseY,Montevideo.x,Montevideo.y)) < 20) {
              // Triggered when the mouse is clicked, and it's close enough to san juan
              print("Montevideo chosen");
              mySound1.setVolume(0.4);
              mySound1.play();
       }

      if (int(dist(mouseX, mouseY,SantoDomingo.x,SantoDomingo.y)) < 20) {
              // Triggered when the mouse is clicked, and it's close enough to san juan
              print("Haiti chosen");
              mySound7.setVolume(0.2);
              mySound7.play();
      }
}
        
        
        
  function mouseMoved() {
    var PRdist = int(dist(mouseX, mouseY, PuertoRico.x, PuertoRico.y));
    var mappedPRvol = map(PRdist, 0, 600, 1, 0);

    //Another mapped value for a country

  }
}