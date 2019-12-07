class Tesla{

	constructor(engine){
		this.engine = engine;
		this.color = 'red';
	}

	get engine(){
		return this._engine + ' л.с.'
	}

	set engine(engine){
		if (engine > 1000){
			console.log('This is not electrocar');
			return;
		}
		this._engine = engine
	}
}

let myTesla = new Tesla(100)

var rectArr = []

class Rect{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.width  = 25;
		this.height = 25;
		this.direction = 1;
		this.speed = 3;
	}

	move(){
		switch(this.direction){
			case 0:
				this.y -= this.speed;
				if(this.y <=0){
					this.direction = 2
				};
			break
			case 1:
				this.x += this.speed;
				if(this.x >=500){
					this.direction = 3
				};
			break
				
			case 2:
				this.y += this.speed;
				if(this.y>=500){
					this.direction = 0
				};
			break
				
			case 3:
				this.x -= this.speed;
				if(this.x <=0){
					this.direction = 1
				};
			break

		};

		this.x++;
	}

	draw(){
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

function keyPressHandler(event){
	switch(event.code){
		case 'KeyW':
		rectArr.forEach(item=>item.direction = 0);
		break
		case 'KeyD':
		rectArr.forEach(item=>item.direction = 1);
		break
		case 'KeyS':
		rectArr.forEach(item=>item.direction = 2);
		break
		case 'KeyA':
		rectArr.forEach(item=>item.direction = 3);
		break
		case 'Space':
		rectArr.push(new Rect(10, 10));
		break						
	};
	
}

var canvasElem = document.getElementById('canvas');
canvasElem.width = 500;
canvasElem.height = 500;
var ctx = canvasElem.getContext('2d');
var x = 10;
var y = 10;

//ctx.fillStyle = '#654321';

function draw() {
	ctx.clearRect(0, 0, 500, 500);
	rectArr.forEach(item=>item.move());
	rectArr.forEach(item=>item.draw());
}

setInterval(draw, 10);

document.addEventListener('keypress', event=>keyPressHandler(event));

//ctx.strokeRect(50, 50, 25, 50);

//ctx.clearRect(0, 30, 100, 30);