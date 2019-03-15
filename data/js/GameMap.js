var GameMap = function(){
	this.MW = 64;
	this.MH = 64;

	this.position = {
		x: 100,
		y: 100
	};
	
	this.map = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	];
	
	this.map2 = [
		[7,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[7,4,0,0,5,6,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[7,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,4,0,0,5,6,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[3,4,0,0,5,6,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[3,0,0,0,5,6,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
	];
	
	
	this.load = function()
	{
		this.white_floor = new Framework.Sprite(define.imagePath + 'floor3.png');
		this.wall_dark_left = new Framework.Sprite(define.imagePath + 'build/wall_dark_left.png');
		this.wall_light_left = new Framework.Sprite(define.imagePath + 'build/wall_light_left.png');
		this.wall_dark_right = new Framework.Sprite(define.imagePath + 'build/wall_dark_right.png');
		this.wall_light_right = new Framework.Sprite(define.imagePath + 'build/wall_light_right.png');
		this.full_light_wall = new Framework.Sprite(define.imagePath + 'build/full_light_wall.png');
		this.wood_board_dark = new Framework.Sprite(define.imagePath + 'build/wood_board_dark.png');
		this.wood_board_light = new Framework.Sprite(define.imagePath + 'build/wood_board_light.png');
		this.chair = new Framework.Sprite(define.imagePath + 'build/chair.png');
		this.desk = new Framework.Sprite(define.imagePath + 'build/desk.png');
		
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
						this.white_floor.position = picPosition;
						this.white_floor.draw(ctx)
						
						break;
				}
			}
		}
		
		/*1右牆暗 2右牆淺 3左牆暗 7左牆淺*/
		for(let i in this.map2)
		{
			for(let j in this.map2[i])
			{
				var picPosition = {
					x: this.position.x + (this.MW * j) + this.MW /2,
					y: this.position.y + (this.MH * i) + this.MH/2
				}
				switch(this.map2[i][j])
				{
					case 0:
						break;
					case 1:
						this.wall_dark_right.position = picPosition;
						this.wall_dark_right.draw(ctx)
						
						break;
					case 2:
						this.wall_light_right.position = picPosition;
						this.wall_light_right.draw(ctx)
						
						break;
					case 3:
						this.wall_dark_left.position = picPosition;
						this.wall_dark_left.draw(ctx)
						
						break;
					case 4:
						this.wood_board_left.position = picPosition;
						this.wood_board_left.draw(ctx)
						
						break;
					case 5:
						this.desk.position = picPosition;
						this.desk.draw(ctx)
						
						break;
					case 6:
						this.chair.position = picPosition;
						this.chair.draw(ctx)
					
						break;
					case 7:
						this.wall_light_left.position = picPosition;
						this.wall_light_left.draw(ctx)
						
						break;
					
				}
			}
		}
	};
	
};