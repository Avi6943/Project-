var student1
function setup() {
  createCanvas(400,400);
  student1=new Student ("James",11,6)
}

function draw() 
{
  background(30);
  student1.show()
}