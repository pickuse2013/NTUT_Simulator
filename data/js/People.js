var People = function(){
	this.MW = 64;
	this.MH = 64;
	
	this.position = {
		x: 64,
		y: 64
	};
	this.count=1;
	this.SW=450;
	this.SH=150;

	this.studentPos =[
		[5,3]
	];
	
	this.bubblePos={
		x:64,
		y:64	
	};
	

	this.load = function()
	{
		this.student=new Framework.Sprite(define.imagePath + 'student.png');
		this.b1=new Framework.Sprite(define.imagePath + 'build/bubble1.png');
		this.b2=new Framework.Sprite(define.imagePath + 'build/bubble2.png');
		this.b3=new Framework.Sprite(define.imagePath + 'build/bubble3.png');
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
	};
	
	
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
		
		/*
		if(this.count==1){
		
			this.b1.position=this.bubblePos;
			this.count+=1;
			
			this.b1.draw(ctx)
		}
		else if(this.count==2){
		
			this.b2.position=this.bubblePos;
			this.count+=1;
			
			this.b2.draw(ctx)
		}
		else{
			this.b3.position=this.bubblePos;
			this.count=1;
			
			this.b3.draw(ctx)
		
		}		*/
		
	};
	
};