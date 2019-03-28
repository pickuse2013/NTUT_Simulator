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
		this.max = 200;
		this.min = -200;
		this.position.x = Math.random() * (this.max - this.min) + this.min;
		this.position.y = Math.random() * (this.max - this.min) + this.min;
	}

	this.draw = function(ctx)
	{
		let studentPosition = {
			x: this.position.x + (this.SW * 1) * this.studentPos[0][0],
			y: this.position.y + (this.SH * 1) * this.studentPos[0][1]
		}

		this.student.position = studentPosition;
		this.student.draw(ctx)
	};
	
};