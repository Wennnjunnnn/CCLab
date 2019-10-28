MAN sineman;

float []m;
float []n;

int x;
float y;

void setup() {
  size(500, 500);

  frameRate(60);

  sineman = new MAN();

  m = new float[width+1];
  n = new float[width+1];
}

void draw() {
  background(255);

  stroke(68, 202, 235, 255);
  strokeWeight(10);
  noFill();
  rect(5, 5, 490, 490);

  y = -sin(cos(radians(x))*PI)*50;
  sineman.drawman(y);

  int q = 270;
  for (int i =0; i<=width; i+=5) {
    pushMatrix();
    translate(0, q);
    stroke(68, 202, 235, 10);
    strokeWeight(5);
    //point(m[i], n[i]);
    line(width/2, 230, m[i], n[i]);
    popMatrix();
  }

  if (x<width) {
    m[x] = x;
    n[x] = y/50*70;
  } else {
    for (int i = 1; i<=width; i++) {

      n[i-1] = n[i];
    }
    m[width] = width;
    n[width] = y/50*70;
  }

  x++;
}
