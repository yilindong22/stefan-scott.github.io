// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let video;
function setup() {
  createCanvas(200  , 140);
  video = createCapture(VIDEO);
  video.size(200,180);
  video.hide();
}

function draw() {
  background(220);
  image(video,0,0);
  loadPixels();
  for (let i = 0; i < pixels.length; i+=4){
    let avg = avgPixel(i);
    if (avg > 500){
      setWhite(i);
    }
    else if (avg >300){
      setPixelColor(i,30,40,240);
    }
    else if (avg >140){
      setPixelColor(i,20,80,30);
    }
  }
  updatePixels();
}

function setWhite(i){
  pixels[i]=255;
  pixels[i+1]=255;
  pixels[i+2]=255;
}

function setPixelColor(pos,r,g,b){
  pixels[pos]=r;
  pixels[pos+1]=g;
  pixels[pos+2]=b;
}

function setBlack(i){
  pixels[i]=0;
  pixels[i+1]=0;
  pixels[i+2]=0;
}

function avgPixel(pos){
  return pixels[pos] + pixels[pos+1] + pixels[pos+2];
}
