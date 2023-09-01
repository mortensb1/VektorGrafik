x1 = 100;
y1 = 100;

x2 = 200;
y2 = 100;

x3 = 200;
y3 = 200;

x4 = 100;
y4 = 200;

let skalar = 0.1;

function setup() 
{
  createCanvas(400, 400);
  slider = createSlider(0, 5, 1, 0.1);
  slider.position(300, 10);

  // x1 = x1 * skalar;
  // x2 = x2 * skalar;
  // x3 = x3 * skalar;
  // x4 = x4 * skalar;

  // y1 = y1 * skalar;
  // y2 = y2 * skalar;
  // y3 = y3 * skalar;
  // y4 = y4 * skalar;
}

function draw() 
{
  background(220);

  // skalar = 1;

  skalar = slider.value();

  point(x1 * skalar,y1 * skalar);
  point(x2 * skalar,y2 * skalar);
  point(x3 * skalar,y3 * skalar);
  point(x4 * skalar,y4 * skalar);

  line(x1 * skalar,y1 * skalar,x4 * skalar,y4 * skalar);
  line(x4 * skalar,y4 * skalar,x3 * skalar,y3 * skalar);
  line(x3 * skalar,y3 * skalar,x2 * skalar,y2 * skalar);
  line(x1 * skalar,y1 * skalar,x2 * skalar,y2 * skalar);
}
