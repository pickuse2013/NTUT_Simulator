var People = function(){
	this.MW = 64;
	this.MH = 64;

	this.position = {
		x: 64,
		y: 64
	};

	this.teacherPos = [
		[1.5,3]
	];
	this.sudentPos =[
		[1.5,3]
	];

	this.load = function()
	{
		this.teacher=new Framework.Sprite(define.imagePath + 'teacher.png');
		this.student=new Framework.Sprite(define.imagePath + 'treeStone.png');
	};
	
	this.initialize = function()
	{
		
	};
	
	this.update = function()
	{
		this.dianwo();
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
    this.dianwo = function(ctx){
		
        var xx = 64;
        var yy = 64;
		max=200;
		min=-200;
        xx += Math.random() * (max - min) + min;
		if(xx<10){
		
			xx+=100;
		}
        yy += Math.random() * (max - min) + min;
		if(yy<10){
		
			yy+=100;
		}		
		
		
		var stuPosition ={
			
			x:xx,
			y:yy
		}
		this.student.position=this.sudentPos;
		this.student.draw(ctx)
            
    };
	/*
		this.student=new Framework.Sprite(define.imagePath + 'treeStone.png');
        var x = this.student.offsetLeft
        var y = this.student.offsetTop;
		max=20;
		min=-20;
        x += Math.random() * (max - min) + min;
        y += Math.random() * (max - min) + min;
        this.student.position.x = x;
        this.student.position.y = y;
		this.student.draw(ctx)
            
        }
	
	*/
	
};