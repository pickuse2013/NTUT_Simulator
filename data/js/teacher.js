//老師專用Class
//變更前請務必洽詢作者
class Teacher {
	constructor() {

		this.minWidth = 64;
		this.minHeight = 64;

		this.basePosition = {
			x: 0,
			y: 0
		}

		this.position = {
			x: 1,
			y: 5
		};

		this.sprite = new Framework.Sprite(define.imagePath + 'teacher.png');
	}

	moveScreen()
	{

	}

	load() {

	}

	initialize() {

	}

	update() {

	};
	
	move(newX, newY){
		this.position.x = newX;
		this.position.y = newY;
	}

	getCurrPos()
	{
		//公式: 起始位置 + (目前格子位置 * 最小格子寬度) + 置中偏移
		return {
			x: this.basePosition.x + (this.position.x * this.minWidth) + this.minWidth / 2,
			y: this.basePosition.y + (this.position.y * this.minHeight) + this.minHeight / 2
		};
	}

	getCurrPosWithoutPosFix()
	{
		//公式: 起始位置 + (目前格子位置 * 最小格子寬度)
		return {
			x: this.basePosition.x + (this.position.x * this.minWidth),
			y: this.basePosition.y + (this.position.y * this.minHeight)
		};
	}

	draw(ctx) {
		
		let newPosition = this.getCurrPos();

		//console.log("畫圖至x:y :" + newPosition.x + ":" + newPosition.y)

		this.sprite.position = newPosition;
		this.sprite.draw(ctx);
	}

	//判斷點擊位置 (天快亮了
	isInClickArea(event)
	{
		let currentPosition = this.getCurrPosWithoutPosFix();

		if(event.x >= currentPosition.x && 
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
					<th><img src="data/image/wkc.jpg" style="max-width: 130px;"></th>
					<th>陳偉凱<small>教授</small><br/> <small></small></th>
				</tr>
				<tr>
					<td>職位</td>
					<td>資訊工程系教授</td>
				</tr>
				<tr>
					<td>能力值</td>
					<td>
						知識點: <progress max="100" value="80"></progress><br/>
						體力值: <progress max="100" value="30"></progress><br/>
						有趣度: <progress max="100" value="30"></progress>
					
					</td>
				</tr>
				<tr>
					<td>專長</td>
					<td>物件導向分析與設計、物件導向程式設計</td>
				</tr>
				<tr>
					<td>薪水</td>
					<td>每天 -3900.00</td>
				</tr>
			</table>
			`;
			favDialog.getElementsByClassName("content")[0].innerHTML = html;
		}

		
		console.log(event);
		console.log(currentPosition)
		
	}
}