var People = function(){
	this.MW = 64;
	this.MH = 64;
	
	this.position = {
		x: 64,
		y: 64
	};
	
	this.SW=450;
	this.SH=150;

	this.studentPos =[
		[1.5,3]
	];

	this.load = function()
	{
		this.student=new Framework.Sprite(define.imagePath + 'student.png');
	};
	
	this.initialize = function()
	{
		
	};
	
	this.update = function()
	{
		
	};
	
	this.doRandomMove = function()
	{
		this.max = 64;
		this.min = -64;
		this.position.x += Math.random() * (this.max - this.min) + this.min;
		this.position.y += Math.random() * (this.max - this.min) + this.min;
	}

	this.draw = function(ctx)
	{
		let studentPosition = {
			x: this.position.x + (this.SW * 1) ,
			y: this.position.y + (this.SH * 1) 
		}
		ran=Math.random();
		if(ran>=0.5){
			this.student.position.x=studentPosition.x;
			this.studentPos[0][0]=studentPosition.x;
		}
		else{
			this.student.position.y=studentPosition.y;
			this.studentPos[0][1]=studentPosition.y;
		}
		this.student.draw(ctx)
		
	};
	
};