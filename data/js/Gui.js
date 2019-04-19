// Gui
class Gui {
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

		//this.sprite = new Framework.Sprite(define.imagePath + 'teacher.png');

		this.gameDate = null;
	}

	moveScreen()
	{

	}

	initialize() {

	}

	UpdateGameDate(game)
	{
		//this.drawDate(ctx, );
		this.gameDate = game.DateToString();
	}

	update() {

	}
	
	draw(ctx) {
		//ctx.fillStyle = (this.secondHandRotationRate > 0)?'green':'red'; 
		//ctx.fillRect(this.rectPosition.x , this.rectPosition.y, 260, 90);  
		ctx.font = '20pt 微軟正黑體';
		ctx.fillStyle = 'white';
		ctx.textBaseline = 'top';
		ctx.textAlign = 'center';
		//ctx.fillText('000年4月11日 11點00分', 130, 855);
		ctx.fillText(this.gameDate, 130, 855);
	}
}