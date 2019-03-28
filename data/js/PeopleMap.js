var PeopleMap = function(){
	this.MW = 64;
	this.MH = 64;

	this.position = {
		x: 64,
		y: 64
	};

	this.teacherPos = [
		[1.5,3]
	];
	this.studentPos = [
		[1.5,3]
	];
	this.load = function()
	{
		this.teacher=new Framework.Sprite(define.imagePath + 'teacher_left.png');
		this.student=new Framework.Sprite(define.imagePath + 'treeStone.png');
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
		
		
		var studentPosition={
			var x = this.student.offsetLeft
			var y = this.student.offsetTop;
			max=20;
			min=-20;
			x += Math.random() * (max - min) + min;
			y += Math.random() * (max - min) + min;
			this.studentPos.x = x;
			this.studentPos.y = y;
			
			
		}

		this.student.position=studentPosition;
		this.student.draw(ctx)

	};

};