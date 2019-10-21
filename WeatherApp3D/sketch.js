var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var city = 'London';
var apiKey = '&APPID=8e4575aa9f11331ed843842479e9ae79'
var units = '&units=metric';

var windSpeed = 0;
var temperature = 0;
var weather = "";

let text;

var json;

let angle = 0;

function gotData(data){
	json = data;
}

function setup() {
	createCanvas(860, 860, WEBGL);
	colorMode(RGB);

	let lang = 'en-US';
	let speechRec = new p5.SpeechRec(lang,gotSpeech);
	// speechRec.start();
	let continuous = true;
	let interim = false;
	speechRec.start(continuous, interim);
	input = speechRec.resultString;

	function gotSpeech(){
		if(speechRec.resultValue){
			createP(speechRec.resultString);
		}
		console.log(speechRec.resultString);
		console.log(speechRec);
		var url = api + speechRec.resultString + apiKey + units;
		loadJSON(url, gotData);
		console.log(url);
	}

	// text = createGraphics(400,400);
	// text.fill(255);
	// text.textAlign(CENTER);
	// text.textSize(50);
	// text.text('Shenzhen',150,150);

	// loadJSON('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=8e4575aa9f11331ed843842479e9ae79&units=metric', gotData);

	createP('Say a city name:');
}



function draw() {
	if(json){
		temperature = json.main.temp;
		weather = json.weather[0].description;
		windSpeed = json.wind.speed;
	}

	background(255);

	let dx = mouseX - width / 2;
	let dy = mouseY - height / 2;
	let v = createVector(dx, dy, 0);
	v.div(100);

	ambientLight(100, 0, 255);
	directionalLight(255, 0, 0, v);
  // pointLight(255, 0, 0, 200, 0, 0);


  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);

  noStroke();
  ambientMaterial(255);
  torus(250, 30,8,4);

  text = createGraphics(400,400);
  text.fill(255);
  text.textAlign(CENTER);
  text.textSize(50);

  if(weather){
  text.text(weather,200,150);
  text.text(temperature+"℃",200,250);
  texture(text);
  plane(400, 400);
}

  angle += 0.02;

  console.log(weather);

}