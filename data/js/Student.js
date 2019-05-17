class Student {

	constructor() {
		let self = this;
		this.minWidth = 64;
		this.minHeight = 64;
		this.time=500;
		this.basePosition = {
			x: 0,
			y: 0
		}
		this.position = {
			x: 5,
			y: 5
		};

		this.sprite = new Framework.Sprite(define.imagePath + 'student.png');

		this.count = 1;
		this.teacherStep = 5;
		this.teacherup = 0;

		this.name = "test";

		this.doingList = [];

		this.moveingPath = [];

		this.moveInterval = setInterval(function () {
			let current = self.moveingPath.shift();
			if (typeof (current) != "undefined") {
				self.position.x = current.x;
				self.position.y = current.y;
			}
		}, this.time);

		this.desk = {x: 14, y: 7};
		this.map = [];
	}

	moveToDesk()
	{
		this.moveingPath = [];
		this.moveTo(this.desk.x, this.desk.y, this.map);
	}

	getRandom(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}
	moveAround()
	{
		this.moveingPath = [];
		let newX = this.getRandom(this.position.x - 1,this.position.x + 1);
		let newY = this.getRandom(this.position.y - 1,this.position.y + 1);
		if(newY < 5) return;
		if(typeof this.map.map[newX] == "undefined" || typeof this.map.map[newX][newY] == "undefined") return;
		if(this.map.map[newX][newY] != 1) return;
		console.log(newX,newY);
		this.moveTo(
			newX,
			newY,
			this.map
		);
		
	}

	moveScreen() {

	}

	load() {

	}

	initialize() {

	}

	update() {

	};



	getCurrPos() {
		//公式: 起始位置 + (目前格子位置 * 最小格子寬度) + 置中偏移
		return {
			x: this.basePosition.x + (this.position.x * this.minWidth) + this.minWidth / 2,
			y: this.basePosition.y + (this.position.y * this.minHeight) + this.minHeight / 2
		};
	}

	getCurrPosWithoutPosFix() {
		//公式: 起始位置 + (目前格子位置 * 最小格子寬度)
		return {
			x: this.basePosition.x + (this.position.x * this.minWidth),
			y: this.basePosition.y + (this.position.y * this.minHeight)
		};
	}

	findDesk(map) {

	}

	draw(ctx) {

		let newPosition = this.getCurrPos();

		//console.log("畫圖至x:y :" + newPosition.x + ":" + newPosition.y)

		this.sprite.position = newPosition;



		this.sprite.draw(ctx);


	}

	moveTo(x, y, map) {
		let tempmap = map.map2.deepclone();
		let tempmap2 = map.map.deepclone();

		for (var i = 0; i < tempmap.length; i++) {

			for (var j = 0; j < tempmap[i].length; j++) {
				if (tempmap2[i][j] == 1 && tempmap[i][j] == 0){
					tempmap[i][j] = 0;
				} else{
					tempmap[i][j] = 2;
				}
				
			}
		}

		for (var i = 0; i < tempmap.length; i++) {

			for (var j = 0; j < tempmap[i].length; j++) {
				if (tempmap[i][j] == 0) tempmap[i][j] = 1;
				
			}
		}


		for (var i = 0; i < tempmap.length; i++) {

			for (var j = 0; j < tempmap[i].length; j++) {
				if (tempmap[i][j] != 1) tempmap[i][j] = 0;
				
			}
		}

		


		var graph = new Graph(
			tempmap
		);
		var start = graph.grid[this.position.x][this.position.y];
		var end = graph.grid[x][y];
		var result = astar.search(graph, start, end);

		for(let node of result)
		{
			console.log(node);
			this.moveingPath.push({x: node.x, y: node.y});
		}
	}


	//判斷點擊位置
	isInClickArea(event) {
		let currentPosition = this.getCurrPosWithoutPosFix();

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

			var patient="40";
			

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
						知識點: <progress max="100" value="80"></progress><br/>
						體力值: <progress max="100" value=${patient}></progress><br/>
						有趣度: <progress max="100" value="30"></progress>
					
					</td>
				</tr>
			</table>
			`;
			//修改標題
			$(".windowTitle").text("學生");
			favDialog.getElementsByClassName("content")[0].innerHTML = html;
		}


		console.log(event);
		console.log(currentPosition)

	}

};