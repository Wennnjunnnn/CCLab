class MAN {
  float headx, heady;
  float headsize;

  float necklength;

  float lshoulderx, lshouldery, rshoulderx, rshouldery;
  float jointsize;

  float chestlength;

  float lelbowx, lelbowy, relbowx, relbowy;

  float lhandx, lhandy, rhandx, rhandy;

  float lcrotchx, lcrotchy, rcrotchx, rcrotchy;

  float lkneex, lkneey, rkneex, rkneey;

  float lfootx, lfooty, rfootx, rfooty;

  MAN() {
    headx = 250;
    heady = 140;
    headsize = 20;

    necklength = 30;

    lshoulderx = 205;
    lshouldery = 180;
    rshoulderx = 295;
    rshouldery = 180;

    jointsize = 10;

    chestlength = 85;

    lelbowx = 145;
    lelbowy = 180;
    relbowx = 355;
    relbowy = 180;

    lhandx = 105;
    lhandy = 180;
    rhandx = 395;
    rhandy = 180;

    lcrotchx = 225;
    lcrotchy = 265;
    rcrotchx = 275;
    rcrotchy = 265;

    lkneex = 225;
    lkneey = 365;
    rkneex = 275;
    rkneey = 365;

    lfootx = 225;
    lfooty = 465;
    rfootx = 275;
    rfooty = 465;
  }

  void drawman(float a) {

    heady +=a;

    necklength-=a/8;

    lshouldery = heady+headsize/2+necklength+a/4;//-n[205]/2;
    rshouldery =heady+headsize/2+necklength-a/4;//-n[295]/2;

    lelbowy = 240+n[145]+a/5;
    relbowy = 240+n[355]+a/5;
    
    lhandy = 240+n[105]+a/5;
    rhandy = 240+n[395]+a/5;

    chestlength -=a/8;

    lcrotchy +=a*3/4-a/6;
    rcrotchy +=a*3/4+a/6;

    lkneey +=a/2-a/8;
    rkneey +=a/2+a/8;

    if (a>0) {
      lkneex -=a;
      rkneex +=a;
    }



    
    stroke(0,200);
    strokeWeight(3);
    noFill();
    ellipse(headx, heady, headsize, headsize);//head

    line(headx, heady+headsize/2, headx, heady+headsize/2+necklength);//neck

    line(lshoulderx+jointsize/2, lshouldery, rshoulderx-jointsize/2, rshouldery);//shoulder


    line(headx, heady+headsize/2+necklength, headx, heady+headsize/2+necklength+chestlength);//chest

    line(lshoulderx, lshouldery, lelbowx, lelbowy);//arm

    line(lelbowx, lelbowy, lhandx, lhandy);
    
    line(rshoulderx, rshouldery, relbowx, relbowy);
    
    line(relbowx, relbowy, rhandx, rhandy);
    
    fill(255);
    
    ellipse(lshoulderx, lshouldery, jointsize, jointsize);
    ellipse(rshoulderx, rshouldery, jointsize, jointsize);
    
    ellipse(lelbowx, lelbowy, jointsize, jointsize);
    ellipse(lhandx, lhandy, jointsize, jointsize);
    ellipse(relbowx, relbowy, jointsize, jointsize);
    ellipse(rhandx, rhandy, jointsize, jointsize);
    

    line(lcrotchx+jointsize/2, lcrotchy, rcrotchx-jointsize/2, rcrotchy);//crotch
    ellipse(lcrotchx, lcrotchy, jointsize, jointsize);
    ellipse(rcrotchx, rcrotchy, jointsize, jointsize);

    line(lcrotchx, lcrotchy+jointsize/2, lkneex, lkneey-jointsize/2);//leg
    ellipse(lkneex, lkneey, jointsize, jointsize);
    line(lkneex, lkneey+jointsize/2, lfootx, lfooty-jointsize/2);
    ellipse(lfootx, lfooty, jointsize, jointsize);
    line(rcrotchx, rcrotchy+jointsize/2, rkneex, rkneey-jointsize/2);
    ellipse(rkneex, rkneey, jointsize, jointsize);
    line(rkneex, rkneey+jointsize/2, rfootx, rfooty-jointsize/2);
    ellipse(rfootx, rfooty, jointsize, jointsize);

    setman();
  }

  void setman() {
    headx = 250;
    heady = 140;
    headsize = 20;

    necklength = 30;

    lshoulderx = 205;
    lshouldery = 180;
    rshoulderx = 295;
    rshouldery = 180;

    jointsize = 10;

    chestlength = 85;

    lelbowx = 145;
    lelbowy = 180;
    relbowx = 355;
    relbowy = 180;

    lhandx = 85;
    lhandy = 180;
    rhandx = 415;
    rhandy = 180;

    lcrotchx = 225;
    lcrotchy = 265;
    rcrotchx = 275;
    rcrotchy = 265;

    lkneex = 225;
    lkneey = 365;
    rkneex = 275;
    rkneey = 365;

    lfootx = 225;
    lfooty = 465;
    rfootx = 275;
    rfooty = 465;
  }
}
