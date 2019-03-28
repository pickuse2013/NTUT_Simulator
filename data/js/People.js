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
	
	this.draw = function(ctx)
	{
		//this.dianwo(ctx);
	};

    this.dianwo = function(ctx){
        var xx = this.position.x + (this.SW * 1)*this.studentPos[0][0];
        var yy = this.position.y + (this.SH * 1)*this.studentPos[0][1];
		max=200;
		min=-200;
        xx += Math.random() * (max - min) + min;
		if(xx<10){
		
			xx+=100;
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