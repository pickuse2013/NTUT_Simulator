var People = function(){
	this.MW = 64;
	this.MH = 64;
	
	this.position = {
		x: 64,
		y: 64
	};
	
	this.SW=450;
	this.SH=150;

	this.teacherPos = [
		[1.5,3]
	];
	this.studentPos =[
		[1.5,3]
	];

	this.load = function()
	{
		this.teacher=new Framework.Sprite(define.imagePath + 'teacher.png');
		this.student=new Framework.Sprite(define.imagePath + 'student.png');
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
			x: this.position.x + (this.MW * 1) * this.teacherPos[0][0] + this.MW/2,
			y: this.position.y + (this.MH * 1) * this.teacherPos[0][1] + this.MH/2
		}

		this.teacher.position = picPosition;
		this.teacher.draw(ctx)
		this.dianwo(ctx);
		
	};
    this.dianwo = function(ctx){
		c=0;
		if(c==0){
			var xx = this.position.x + (this.SW * 1)*this.studentPos[0][0];
			var yy = this.position.y + (this.SH * 1)*this.studentPos[0][1];
			c++;
		}
		else{
			var xx = this.student.position;
			var yy = this.student.position;
		}
		max=300;
		min=-300;		
		ra1=Math.random();
		ra2=Math.random();
		if(ra1>=0.5){
			xx += (Math.random() * (max - min) + min)*0.8;
			if(ra2>=0.5){
				yy += (Math.random() * (max - min) + min)*0.8;
			}	

		}
		else{
			yy += (Math.random() * (max - min) + min)*0.8;		
			if(ra2>=0.5){
				xx += (Math.random() * (max - min) + min)*0.8;
			}
		}
		
		var stuPosition ={
			
			x: xx,
			y: yy
		}
		this.student.position=stuPosition;
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