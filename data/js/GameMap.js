var GameMap = function(){
	this.MW = 64;
	this.MH = 64;

	this.position = {
		x: 200,
		y: 500
	};
	
	this.map = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
		];
	
	
	this.load = function()
	{
		this.greenPic = new Framework.Sprite(define.imagePath + 'floor3.png');
		this.bluePic = new Framework.Sprite(define.imagePath + 'floor1.png');
		
	};
	
	this.initialize = function()
	{
		
	};
	
	this.update = function()
	{
		
	};
	
	this.draw = function(ctx)
	{
		for(let i in this.map)
		{
			for(let j in this.map[i])
			{
				var picPosition = {
					x: this.position.x + (this.MW * j) + this.MW /2,
					y: this.position.y + (this.MH * i) + this.MH/2
				}
				switch(this.map[i][j])
				{
					case 0:
						break;
					case 1:
						this.greenPic.position = picPosition;
						this.greenPic.draw(ctx)
						
						break;
						
					case 2:
						this.bluePic.position = picPosition;
						this.bluePic.draw(ctx)

						break;
				}
			}
		}
		/*
		for(let i = 0;i<5;i++)
		{
			for(let j = 0; j< 4;j++){
				
			}
		}*/
	};
	
};