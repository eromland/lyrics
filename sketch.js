var lyrics = [];
var counts = {};
lyrics.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

var words = [];
const palette = ['#037F8C', '#205459', '#F2E7C4', '#F28F38', '#F25757'];
var last = 0;

for (word in counts) {
  words.push(word);
}

words = shuffle(words);

var rects = Object.keys(counts).length;

function setup() {
  createCanvas(1000, 1000);
  background(255);
  noLoop();
  noFill(); 
  //noStroke();
}

function draw() {
  let h = (7*height/8)/rects;
  //stroke(0);
  //rect(width/16, height/16, width/2 - 3*width/(16*2), height - height/8);
  //rect(width/2 + width/(16*2), height/16, width/2 - 3*width/(16*2), height - height/8);
  let y = height/16;
  for (let i = 0; i < words.length; i++){
    let pick = getRandomColorFromPalette();
    fill(palette[pick]);
    stroke(palette[pick]);
    let w = counts[words[i]]*(width/2 - 3*width/(16*2))/50;
    rect(width/2 - width/(16*2) - w, y, w, h);
    rect(width/2 + width/(16*2), y, w, h);
    y += h;
  }
  
}

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

function getRandomColorFromPalette(){
  let pick = floor(random(palette.length));
  while (pick == last){
    pick = floor(random(palette.length));
  }
  last = pick;
  return pick;
}