function setup() {
  createCanvas(400, 400);
  for (x = 25; x < 400; x += 25) {
    line(x, 0, x, 400)

  }
  for (y = 25; y < 400; y += 25) {
    line(0, y, 400, y)
  }
  for (c1 = 25; c1 < 400; c1 += 50) {
    for (c2 = 25; c2 < 400; c2 += 50) {
      noStroke();
      fill(0,100,255)
      ellipse(c1,c2,10);
      fill(255,100,50);
      ellipse(c1+25, c2+25, 10)
    }
  }
}





function draw() {

}