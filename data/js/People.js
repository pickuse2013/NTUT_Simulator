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
	
	this.bell = 0;
	this.stroll=1;

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
		this.ma=0;
		this.mi=0;
		this.ra=Math.random();
		if(this.ra>=0.75){
			this.ma=32;
		}
		else if(this.ra >=0.5) {
			this.ma=-32;
		}
		if(this.ra >=0.25) {
			this.mi=32;
		}
		else if(this.ra >=0.0) {
			this.mi=-32
		}
		if(this.stroll==1)
		{
			this.position.x += this.ma;
			this.position.y += this.mi;
		}
	};
	
	this.draw = function(ctx)
	{
		if(this.stroll==1)
		{
			let studentPosition = {
				x: this.position.x + (this.SW * 1) ,
				y: this.position.y + (this.SH * 1) 
			}

			this.student.position=studentPosition;

			this.student.draw(ctx)				
			this.bell+=1;
			
			if(this.bell==500){
				this.stroll=0;
				this.bell=0;
			}
		}
		else if(this.stroll==0) 
		{	
			let studentPosition = {
				x: this.position.x + (this.SW * 1) ,
				y: this.position.y + (this.SH * 1) 
			}
			
			if(studentPosition.x <384){
				this.position.x+=32;
			}
			else if(studentPosition.x >384){
				this.position.x-=32;
			}
			if(studentPosition.y <512){
				this.position.y+=32;
			}
			else if(studentPosition.y >512){
				this.position.y-=32;

			}
			this.student.position=studentPosition;

			this.student.draw(ctx)
			this.bell+=1;
			if(this.bell==50){
				this.stroll=1;
				this.bell=0;
			}
		}
	};
	
};