x1 = -50;
y1 = -50;

x2 = 50;
y2 = -50;

x3 = 50;
y3 = 50;

x4 = -50;
y4 = 50;

let skalar = 0.1;

let vektorFlyt = [100,100];

function setup() 
{
  createCanvas(400, 400);
  slider = createSlider(0, 5, 1, 0.1);
  slider.position(300, 10);

}

function draw() 
{
  background(220);

  skalar = slider.value();

  point(x1 * skalar + vektorFlyt[0], y1 * skalar + vektorFlyt[1]);
  point(x2 * skalar + vektorFlyt[0], y2 * skalar + vektorFlyt[1]);
  point(x3 * skalar + vektorFlyt[0], y3 * skalar + vektorFlyt[1]);
  point(x4 * skalar + vektorFlyt[0], y4 * skalar + vektorFlyt[1]);

  line(x1 * skalar + vektorFlyt[0], y1 * skalar + vektorFlyt[1], x4 * skalar + vektorFlyt[0], y4 * skalar + vektorFlyt[1]);
  line(x4 * skalar + vektorFlyt[0], y4 * skalar + vektorFlyt[1], x3 * skalar + vektorFlyt[0], y3 * skalar + vektorFlyt[1]);
  line(x3 * skalar + vektorFlyt[0], y3 * skalar + vektorFlyt[1], x2 * skalar + vektorFlyt[0], y2 * skalar + vektorFlyt[1]);
  line(x1 * skalar + vektorFlyt[0], y1 * skalar + vektorFlyt[1], x2 * skalar + vektorFlyt[0], y2 * skalar + vektorFlyt[1]);

  

}
