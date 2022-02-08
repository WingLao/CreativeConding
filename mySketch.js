var gongSound 
var washSound
var a4Sound, c5Sound,e5Sound,g5Sound
var noiseTexture
function easeOutElastic(x) {
const c4 = (2 * Math.PI) / 3;

return x === 0
  ? 0
  : x === 1
  ? 1
  : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
}

function preload(){
	gongSound = loadSound("gong.mp3")
	washSound = loadSound("wash.mp3")
	a4Sound = loadSound("A4.mp3")
	c5Sound = loadSound("C5.mp3")
	e5Sound = loadSound("E5.mp3")
	g5Sound = loadSound("G5.mp3")
	noiseTexture = loadImage("noise.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	// background(255,10)
	// blendMode(SCREEN)
	noStroke()
	fill(0, 85, 164)
	rect(0,0,width/3,height)
	fill(255, 255, 255)
	rect(width/3,0,width/3,height)
	fill(239, 65, 53)
	rect(width/3*2,0,width/3,height)
	
	// background(0,20)
	let delta = frameCount- gongTs
	let ratio = map(delta,0,50,1,0,true)
	
	fill(255*easeOutElastic(1-ratio),255,255)
	print(ratio)
	push()
		translate(width/2,height/2)
		rectMode(CENTER)
		rect(0,0,easeOutElastic(1-ratio)*180+180)
		
		for(var i=-5;i<5;i++){
			rotate(ratio)
			fill((255)-(i*ratio)*40,255*easeOutElastic(1-ratio),255)
			rect((1-easeOutElastic(1-ratio))*100*i,0,
							200)
		}
		for(var i=-10;i<10;i++){
			rotate(ratio*10)
			fill(255*easeOutElastic(1-ratio),(i+5)*20,255)
			rect((1-easeOutElastic(1-ratio))*100*i,0,
							100)
		}
	pop()


	
	
	
	push()
		blendMode(MULTIPLY)
		image(noiseTexture,0,0,width,height)
	pop()
	// ellipse(mouseX, mouseY, 20, 20);
}
var gongTs = 0

function mousePressed(){
	washSound.play()
	background(255)
	gongTs = frameCount
	fill(255,0,0)
	if (mouseX<width/4){
		a4Sound.play()
		background("#f24646")
	}else if (mouseX<width/4*2){
		c5Sound.play()
		background("#edff2d")
	}else if (mouseX<width/4*3){
		e5Sound.play()
		background("#3161e2")
	}else if (mouseX<width/4*4){
		g5Sound.play()
		background("#40ce3d")
	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)


}


