var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

  var engine;
  var world;
  var boxes = [];

  var ground;

  var flag = [];

  var canvas;

  var title;


  function setup() {
  	video = createCapture(VIDEO);
  	video.size(640, 480);
  	video.position(450,200);

  	canvas = createCanvas(640, 480);
  	canvas.position(450,200);
  	pixelDensity(1);
  	engine = Engine.create();
  	world = engine.world;
  //Engine.run(engine);
  var options = {
  	isStatic: true
  }
  ground = Bodies.rectangle(320, height, width, 10, options);

  World.add(world, ground);

  title = createElement('h1','The Present is Disintegrating');
  title.position(450,100);



  for(var y = 0; y<height; y++){
  	for (var x = 0; x<width; x++){
  		flag[x+y*width] = 0;
  	}
  }
}

function mousePressed() {
	var x = random(10, 40);
	var y = random(10, 40);
	var index = (mouseX+mouseY*width)*4;
	r = video.pixels[index+0];
	g = video.pixels[index+1];
	b = video.pixels[index+2];
	a = video.pixels[index+3];
	boxes.push(new Box(mouseX, mouseY, x, y,r,g,b));
	var index = (mouseX+mouseY*width)*4;
	flag[index + 0] = 1;
	flag[index + 1] = x;
	flag[index + 2] = y;

}

function draw() {
	background(51);

	video.loadPixels();
	loadPixels();

	for(var y = 0; y<height; y++){
		for (var x = 0; x<width; x++){
			var index = (x+(y*width))*4;
			var r = video.pixels[index+0];
			var g = video.pixels[index+1];
			var b = video.pixels[index+2];

			if(flag[index] == 1){
				pixels[index+0] = 0;
				pixels[index+1] = 0;
				pixels[index+2] = 0;
				pixels[index+3] = 255;
			}
			else{

				pixels[index+0] = r;
				pixels[index+1] = g;
				pixels[index+2] = b;
				pixels[index+3] = 255;
			}
		}
	}
	updatePixels();

	for(var y = 0; y<height; y++){
		for (var x = 0; x<width; x++){
			var index = (x+y*width)*4;
			if(flag[index + 0] == 1){
				noStroke();
				fill(random(0,50));
				rect(x,y,flag[index + 1],flag[index + 2]);
			}
		}
	}

	Engine.update(engine);
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].show();
		console.log(boxes[i]);
	}
	noStroke(255);
	fill(0);
	rectMode(CENTER);
	rect(ground.position.x, ground.position.y, width, 10);

}
