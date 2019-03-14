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
		[3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,4,0,0,5,6,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,4,0,0,5,6,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,4,0,0,5,6,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,0,0,0,5,6,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	];
	
	
	this.load = function()
	{
		this.white_floor = new Framework.Sprite(define.imagePath + 'floor3.png');
		this.wall_dark_left = new Framework.Sprite(define.imagePath + 'build/wall_dark_left.png');
		this.wall_dark_right = new Framework.Sprite(define.imagePath + 'build/wall_dark_right.png');
		this.full_light_wall = new Framework.Sprite(define.imagePath + 'build/full_light_wall.png');
		this.wood_board_left = new Framework.Sprite(define.imagePath + 'build/wood_board_left.png');
		this.chair_left = new Framework.Sprite(define.imagePath + 'build/chair_left.png');
		this.desk_right = new Framework.Sprite(define.imagePath + 'build/desk_right.png');
		
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
						this.wall_dark_right.position = picPosition;
						this.wall_dark_right.draw(ctx)
						
						break;
					case 3:
						this.full_light_wall.position = picPosition;
						this.full_light_wall.draw(ctx)
						
						break;
					case 4:
						this.wood_board_left.position = picPosition;
						this.wood_board_left.draw(ctx)
						
						break;
					case 5:
						this.desk_right.position = picPosition;
						this.desk_right.draw(ctx)
						
						break;
					case 6:
						this.chair_left.position = picPosition;
						this.chair_left.draw(ctx)
						
						break;
				}
			}
		}
	};
	
};