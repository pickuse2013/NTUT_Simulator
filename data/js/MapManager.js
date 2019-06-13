class MapManager {

    constructor() {

        this.MW = 64;
        this.MH = 64;
		
		this.minWidth = 64;
		this.minHeight = 64;
		
        this.position = {
            x: 100,
            y: 100
        };
        
        this.defaultMap();

        this.loadAssets();
    }

    // 意義不明的function
    initialize() { }

    update() { }

    
    /**
     * 地圖繪製
     * @param {*} ctx 
     */
    draw(ctx) {
        this.drawLayerBase(ctx);
        this.drawLayerObject(ctx);
    }

    loadAssets()
    {
        this.white_floor = new Framework.Sprite(define.imagePath + 'build/floor3.png');
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
        this.roof = new Framework.Sprite(define.imagePath + 'build/roof.png');
		this.roof._tmpContext.fillStyle = "rgba(0, 0, 200, 0.5)";
        this.roof._tmpContext.fillRect (0, 0, 55, 50);
		
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

        this.toilet = new Framework.Sprite(define.imagePath + 'build/toilet.png');
        this.urinal = new Framework.Sprite(define.imagePath + 'build/urinal.png');
		this.eq1= new Framework.Sprite(define.imagePath + 'build/eq1.png');
		this.eq2= new Framework.Sprite(define.imagePath + 'build/eq2.png');
		this.eq3= new Framework.Sprite(define.imagePath + 'build/eq3.png');
		this.eqa1= new Framework.Sprite(define.imagePath + 'build/eqa1.png');
		this.eqa2= new Framework.Sprite(define.imagePath + 'build/eqa2.png');
		this.eqa3= new Framework.Sprite(define.imagePath + 'build/eqa3.png');
		this.Leq1= new Framework.Sprite(define.imagePath + 'build/Leq1.png');
		this.Leq2= new Framework.Sprite(define.imagePath + 'build/Leq2.png');
		this.Leq3= new Framework.Sprite(define.imagePath + 'build/Leq3.png');
		
		this.T1= new Framework.Sprite(define.imagePath + 'build/T1.png');
		this.T2= new Framework.Sprite(define.imagePath + 'build/T2.png');
		this.T3= new Framework.Sprite(define.imagePath + 'build/T3.png');
    }

    defaultMap(ctx)
    {
        // wall and floor in this layer
        this.layerBase = [
            [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            [7, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 9],
            [7, 14, 14, 10, 12, 14, 14, 10, 12, 14, 14, 10, 12, 14, 14, 10, 12, 14, 14, 14, 14, 9],
            [7, 14, 14, 11, 13, 14, 14, 11, 13, 14, 14, 11, 13, 14, 14, 11, 13, 14, 14, 14, 14, 9],
            [7, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 9],
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
            [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
            [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
            [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
        ];

        // object in this layer. etc: table, chair
        this.layerObject = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
            [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
            [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0],
            [4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 0, 0, 0], //9
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			//                     6
        ];
    }

    /**
     * 繪製地板層
     */
    drawLayerBase(ctx){
        for (let i in this.layerBase) {
            for (let j in this.layerBase[i]) {

                //這張圖片的位置
                let picPosition = {
                    x: this.position.x + (this.MW * j) + this.MW / 2,
                    y: this.position.y + (this.MH * i) + this.MH / 2
                }
                switch (this.layerBase[i][j]) {
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
                        this.wall_dark_left.draw(ctx);
                        break;
                    case 5:
                        this.wall_light_left.position = picPosition;
                        this.wall_light_left.draw(ctx);
                        break;
                    case 6:
                        this.left_wall_full_dark.position = picPosition;
                        this.left_wall_full_dark.draw(ctx);
                        break;
                    case 7:
                        this.left_wall_full_light.position = picPosition;
                        this.left_wall_full_light.draw(ctx);
                        break;
                    case 8:
                        this.right_wall_full_dark.position = picPosition;
                        this.right_wall_full_dark.draw(ctx);
                        break;
                    case 9:
                        this.right_wall_full_light.position = picPosition;
                        this.right_wall_full_light.draw(ctx);
                        break;
                    case 10:
                        this.window_lu.position = picPosition;
                        this.window_lu.draw(ctx);
                        break;
                    case 11:
                        this.window_ld.position = picPosition;
                        this.window_ld.draw(ctx);
                        break;
                    case 12:
                        this.window_ru.position = picPosition;
                        this.window_ru.draw(ctx);
                        break;
                    case 13:
                        this.window_rd.position = picPosition;
                        this.window_rd.draw(ctx);
                        break;
                    case 14:
                        this.wall_top.position = picPosition;
                        this.wall_top.draw(ctx);
                        break;
                    case 15:
                        this.roof.position = picPosition;
                        this.roof.draw(ctx);
                        break;
                }
            }
        }

        return 0;
    }

    /**
     * 繪製物件層
     */
    drawLayerObject(ctx){

        /*1右牆暗 2右牆淺 3左牆暗 7左牆淺*/
        for (let i in this.layerObject) {
            for (let j in this.layerObject[i]) {
                let picPosition = {
                    x: this.position.x + (this.MW * j) + this.MW / 2,
                    y: this.position.y + (this.MH * i) + this.MH / 2
                }
                switch (this.layerObject[i][j]) {
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
                        this.podium_mic.position = picPosition;
                        this.podium_mic.draw(ctx)
                        break;
                    case 6:
                        this.top_left.position = picPosition;
                        this.top_left.draw(ctx)
                        break;
                    case 7:
                        this.top_right.position = picPosition;
                        this.top_right.draw(ctx)
                        break;
                    case 8:
                        this.toilet.position = picPosition;
                        this.toilet.draw(ctx)
                        break;
                    case 9:
                        this.urinal.position = picPosition;
                        this.urinal.draw(ctx)
                        break;
						//地震
					case 10:
						this.eq1.position=picPosition;
						this.eq1.draw(ctx)
						break;
					case 11:
						this.eq2.position=picPosition;
						this.eq2.draw(ctx)
						break;			
					case 12:
						this.eq3.position=picPosition;
						this.eq3.draw(ctx)
						break;
					case 13:
						this.eqa1.position=picPosition;
						this.eqa1.draw(ctx)
						break;
					case 14:
						this.eqa2.position=picPosition;
						this.eqa2.draw(ctx)
						break;			
					case 15:
						this.eqa3.position=picPosition;
						this.eqa3.draw(ctx)
						break;	
					case 16:
						this.Leq1.position=picPosition;
						this.Leq1.draw(ctx)
						break;
					case 17:
						this.Leq2.position=picPosition;
						this.Leq2.draw(ctx)
						break;			
					case 18:
						this.Leq3.position=picPosition;
						this.Leq3.draw(ctx)
						break;	
					case 19:
						this.T1.position=picPosition;
						this.T1.draw(ctx)
						break;	
					case 20:
						this.T2.position=picPosition;
						this.T2.draw(ctx)
						break;	
					case 21:
						this.T3.position=picPosition;
						this.T3.draw(ctx)
						break;	
					
						
                }
            }
        }

        return 0;
    }
		
	getMouseClickBlock(e) {
		//公式: 起始位置 + (目前格子位置 * 最小格子寬度)
		/*
		return {
			x: (this.position.x * this.minWidth),
			y: (this.position.y * this.minHeight)
		};*/
	}
	
	build(e){
		let clickX = Math.floor((e.x - this.position.x - 30) / 64);
		let clickY = Math.floor((e.y - this.position.y - 30)  / 64);
		
		if(typeof this.layerBase[clickY] != "undefined" && typeof this.layerBase[clickY][clickX] != "undefined")
		{
			this.layerBase[clickY][clickX] = 14;
			
		}
		console.log(clickX, clickY);
		//let currentPosition = this.getCurrPosWithoutPosFix();
		//console.log(currentPosition)
		return;
		if (event.x >= currentPosition.x &&
			event.x <= currentPosition.x + this.minWidth &&
			event.y >= currentPosition.y &&
			event.y <= currentPosition.y + this.minHeight
		) {
			console.log("teacher");
			let blackScreen = document.getElementById('blackScreen');
			blackScreen.style.display = "block";

			let favDialog = document.getElementById('favDialog');
			favDialog.style.display = "block";

			
			

			let html = `
			<table border="1" align="center" width="100%">
				<tr>
					<th>學生OOO</th>
					<th>學生<small></small><br/> <small></small></th>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>能力值</td>
					<td>
						體力值: <progress max="100" value="50"></progress><br/>
						耐心值: <progress max="100" value=${this.patient}></progress>
					
					</td>
				</tr>
			</table>
			`;
			//修改標題
			$(".windowTitle").text("學生");
			favDialog.getElementsByClassName("content")[0].innerHTML = html;
		}
	}
}