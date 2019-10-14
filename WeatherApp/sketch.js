//This code is modified by the example code of The Coding Train-Coding Challenge #24 written by Daniel Shiffman.

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

var inc = 0.03;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

var windSpeed;
var temperature = 0;
var weather = "";

var json;

function setup() {
  createCanvas(400, 860);
  colorMode(RGB);
  cols = floor(width/scl);
  rows = floor(height/scl);
  fr = createP('');

  flowfield = new Array(cols*rows);

  for(var i = 0; i<800; i++){
    particles[i] = new Particle();
  }

  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Shenzhen&APPID=4ebd5047269be6133861dde91cf7b702&units=metric', gotData);

  background(255);
}

function gotData(data){
	json = data;
}

function draw() {
  if(json){
    temperature = json.main.temp;

    weather = json.weather[0].description;

    windSpeed = json.wind.speed;
  }

  var yoff = 0;
  for(var y = 0; y<rows; y++){
    var xoff = 0;
    for(var x = 0; x<cols; x++){
      var index = x+y*cols;
      var angle = noise(xoff,yoff,zoff)*TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0,50);
    }
    yoff += inc;

    zoff += 0.0001;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].wind(windSpeed);
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  noStroke();
  colorMode(RGB);
  fill(255,255,255,8);
  rect(0,0,width,height);

  // fr.html(floor(frameRate()));


  fill(51);

  textAlign(CENTER);
  textFont('Turret Road');
  textSize(25);
  text("City: Shenzhen", width/2, 150);
  text("Temperature: " + temperature, width/2, 200);
  text("Weather: " + weather, width/2, 250);
  text("Wind speed: " + windSpeed, width/2, 300);
}