var PeopleMap = function(){
	this.MW = 64;
	this.MH = 64;

	this.position = {
		x: 64,
		y: 64
	};

	this.teacherPos = [
		[10,10]
	];
	
	
	this.load = function()
	{
		this.teacher=new Framework.Sprite(define.imagePath + 'teacher_left.png');
	};
	
	this.initialize = function()
	{
		
	};
	
	this.update = function()
	{
		
	};
	
	this.draw = function(ctx)
	{
		
		var picPosition = {
			x: this.position.x + (this.MW * 1) * this.teacherPos[0][0] + this.MW /2,
			y: this.position.y + (this.MH * 1) * this.teacherPos[0][1] + this.MH/2
		}
		
		this.teacher.position = picPosition;
		this.teacher.draw(ctx)
					
	};
	
};