/**
 * 老師的class簡化版
 * 未經同意請勿變更!
 * 2019/03/29
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

	draw(ctx) {
		//公式: 起始位置 + (目前格子位置 * 最小格子寬度) + 置中偏移
		let newPosition = {
			x: this.basePosition.x + (this.position.x * this.minWidth) + this.minWidth / 2,
			y: this.basePosition.y + (this.position.y * this.minHeight) + this.minHeight / 2
		};

		console.log("畫圖至x:y :" + newPosition.x + ":" + newPosition.y)

		this.sprite.position = newPosition;
		this.sprite.draw(ctx);
	}
}