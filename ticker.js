var speed;
var frame;
var obj;


function setup(){
		createCanvas(window.innerWidth,80);
		frame = 0;
		obj = 0;
		speed = 0;
}

function draw(){
	background(0);
	speed = speed + .2;
	fill(200)
	frame = rect(speed , -1, 100 ,100);
	//if(frame == end)
	//frame = (
	
}