/**
 * 老師專用Class
 * 變更前請務必洽詢作者
 **/
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
			y: 2
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
			let blackscreen = document.getElementById('blackscreen');
			blackscreen.style.display = "block";

			let favDialog = document.getElementById('favDialog');
			favDialog.style.display = "block";
			favDialog.getElementsByClassName("content")[0].innerHTML = "1234";

			
		}

		
		console.log(event);
		console.log(currentPosition)
		
	}
}