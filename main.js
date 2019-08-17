var s = 20;
var W = 30;
var H = 30;

var pixels = [];
var last_update;

function setup() {
  createCanvas(s*W, s*H);
  pixels = [];
  for (var i = 0; i < W; i++) {
    var row = [];
    for (var j = 0; j < H; j++) {
      if (i < W/2)
        row.push(0);
      else
        row.push(1);
    }
    pixels.push(row);
  }
  last_update = Date.now();
}

function draw() {
  for (var i = 0; i < pixels.length; i++) {
    var row = pixels[i];
    for (var j = 0; j < row.length; j++) {
      if (row[j]) {
        fill(0,255,0);
      } else {
        fill(0,0,255);
      }
      rect(i*s, j*s, s, s);
    }
  }

  for (var i = 0; i < pixels.length; i++) {
    row = pixels[i];
    for (var j = 0; j < row.length; j++) {
      var neighbors = [[(i-1+W)%W, j], [i, (j+1+H)%H], [(i+1+W)%W, j], [i, (j-1+H)%H]];
      for (var k = 0; k < neighbors.length; k++) {
        var n = neighbors[k];
        if (pixels[i][j] != pixels[n[0]][n[1]]) {
          if (Math.random() < 0.5) {
            pixels[i][j] = pixels[n[0]][n[1]];
            break;
          } else {
            pixels[n[0]][n[1]] = pixels[i][j];
          }
        }
      }
    }
  }
  //last_update = Date.now();
}

/*function neighbors (i, j) {
  console.log(i + "," + j);
  var num_neighbors = 0;
  if (i > 0) {
    num_neighbors += pixels[i-1][j];
    if (j > 0)
      num_neighbors += pixels[i-1][j-1];
    if (j < H-1)
      num_neighbors += pixels[i-1][j+1];
  }
  if (i < W-1) {
    num_neighbors += pixels[i+1][j];
    if (j > 0)
      num_neighbors += pixels[i+1][j-1];
    if (j < H-1)
      num_neighbors += pixels[i+1][j+1];
  }
  if (j > 0)
    num_neighbors += pixels[i][j-1];
  if (j < H-1)
    num_neighbors += pixels[i][j+1];
  return num_neighbors;
}*/

function start () {
  started = true;
}
