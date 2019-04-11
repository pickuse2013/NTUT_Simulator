var GameMap = function(){
	this.MW = 64;
	this.MH = 64;

	this.position = {
		x: 100,
		y: 100
	};
	
	this.map = [
		[7,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,9],
		[7,14,14,10,12,14,14,10,12,14,14,10,12,14,14,10,12,14,14,14,14,9],
		[7,14,14,11,13,14,14,11,13,14,14,11,13,14,14,11,13,14,14,14,14,9],
		[7,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
		[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
		[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
		[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
		[6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
		[6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
		[6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8],
	];
	
	this.map2 = [
		[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
		[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
		[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[4,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[4,0,0,0,2,3,0,2,3,0,2,3,0,2,3,0,2,3,0,0,0,0],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[4,0,0,0,2,3,0,2,3,0,2,3,0,2,3,0,2,3,0,0,0,0],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[4,0,0,0,2,3,0,2,3,0,2,3,0,2,3,0,2,3,0,0,0,0],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[4,0,0,0,2,3,0,2,3,0,2,3,0,2,3,0,2,3,0,0,0,0],
		[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,2,3,0,2,3,0,2,3,0,2,3,0,2,3,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	];
	
	
	this.load = function()
	{
		this.white_floor = new Framework.Sprite(define.imagePath + 'floor3.png');
		this.wall_dark_left = new Framework.Sprite(define.imagePath + 'build/wall_dark_left.png');
		this.wall_light_left = new Framework.Sprite(define.imagePath + 'build/wall_light_left.png');
		this.wall_dark_right = new Framework.Sprite(define.imagePath + 'build/wall_dark_right.png');
		this.wall_light_right = new Framework.Sprite(define.imagePath + 'build/wall_light_right.png');
		this.wall_top = new Framework.Sprite(define.imagePath + 'build/wall_top.png');
		this.full_light_wall = new Framework.Sprite(define.imagePath + 'build/full_light_wall.png');
		this.wood_board_dark = new Framework.Sprite(define.imagePath + 'build/wood_board_dark_right.png');
		this.wood_board_light = new Framework.Sprite(define.imagePath + 'build/wood_board_light.png');
		this.chair = new Framework.Sprite(define.imagePath + 'build/chair.png');
		this.desk = new Framework.Sprite(define.imagePath + 'build/desk.png');
		
		this.podium_mic = new Framework.Sprite(define.imagePath + 'build/podium-mic.png');
		
		this.left_wall_full_dark = new Framework.Sprite(define.imagePath + 'build/left_wall_full_dark.png');
		this.left_wall_full_light = new Framework.Sprite(define.imagePath + 'build/left_wall_full_light.png');
		this.right_wall_full_dark = new Framework.Sprite(define.imagePath + 'build/right_wall_full_dark.png');
		this.right_wall_full_light = new Framework.Sprite(define.imagePath + 'build/right_wall_full_light.png');
		this.top_left = new Framework.Sprite(define.imagePath + 'build/top_left.png');
		this.top_right = new Framework.Sprite(define.imagePath + 'build/top_right.png');
		
		this.window_lu = new Framework.Sprite(define.imagePath + 'build/window_lu.png');
		this.window_ld = new Framework.Sprite(define.imagePath + 'build/window_ld.png');
		this.window_ru = new Framework.Sprite(define.imagePath + 'build/window_ru.png');
		this.window_rd = new Framework.Sprite(define.imagePath + 'build/window_rd.png');
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
					/*54 32   */
					case 0:
						break;
					case 1:
						this.white_floor.position = picPosition;
						this.white_floor.draw(ctx)
						
						break;
					case 2:
						this.wall_dark_right.position = picPosition;
						this.wall_dark_right.draw(ctx)
						
						break;
					case 3:
						this.wall_light_right.position = picPosition;
						this.wall_light_right.draw(ctx)
						
						break;
					case 4:
						this.wall_dark_left.position = picPosition;
						this.wall_dark_left.draw(ctx)
						break;		
					case 5:
						this.wall_light_left.position = picPosition;
						this.wall_light_left.draw(ctx)
						
						break;
					case 6:
						this.left_wall_full_dark.position = picPosition;
						this.left_wall_full_dark.draw(ctx)
						
						break;				
					case 7:
						this.left_wall_full_light.position = picPosition;
						this.left_wall_full_light.draw(ctx)
						
						break;				
					case 8:
						this.right_wall_full_dark.position = picPosition;
						this.right_wall_full_dark.draw(ctx)
						
						break;				
					case 9:
						this.right_wall_full_light.position = picPosition;
						this.right_wall_full_light.draw(ctx)
						
						break;	

						
						
					case 10:
						this.window_lu.position = picPosition;
						this.window_lu.draw(ctx)
						
						break;	
					case 11:
						this.window_ld.position = picPosition;
						this.window_ld.draw(ctx)
						
						break;	
					case 12:
						this.window_ru.position = picPosition;
						this.window_ru.draw(ctx)
						
						break;	
					case 13:
						this.window_rd.position = picPosition;
						this.window_rd.draw(ctx)
						
						break;	
					case 14:
						this.wall_top.position = picPosition;
						this.wall_top.draw(ctx)
						
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
						this.wood_board_dark.position = picPosition;
						this.wood_board_dark.draw(ctx)
						
						break;
					case 2:
						this.desk.position = picPosition;
						this.desk.draw(ctx)
						
						break;
					case 3:
						this.chair.position = picPosition;
						this.chair.draw(ctx)
					
						break;

					case 4:
						this.wood_board_light.position = picPosition;
						this.wood_board_light.draw(ctx)
						break;
					case 5:
						this.podium_mic.position=picPosition;
						this.podium_mic.draw(ctx)
						break;
					case 6:
						this.top_left.position=picPosition;
						this.top_left.draw(ctx)
						break;						
					case 7:
						this.top_right.position=picPosition;
						this.top_right.draw(ctx)
						break;				}
			}
		}
	};
	
};