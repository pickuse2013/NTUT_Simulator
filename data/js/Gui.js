// Gui
class Gui {
	constructor() {

		this.minWidth = 64;
		this.minHeight = 64;
		
		//上下課
		this.dis = new Framework.Sprite(define.imagePath + 'UI/下課.png');
		this.dis.position = {
			x:780,
			y:150
		};
		this.dur = new Framework.Sprite(define.imagePath + 'UI/上課.png');
		this.dur.position = {
			x:780,
			y:150
		};		
		
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
		this.gameMinute = null;

		this.game = null;
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
		this.gameMinute = game.GetMinute();
		this.gameHour = game.GetHour();
	}

	update() {

	}
	
	draw(ctx) {
		
		if(this.gameMinute>=4 && this.gameMinute<=6){
			this.dis.draw(ctx);
		}
		if(this.gameMinute>=20 && this.gameMinute<=21){
			this.dur.draw(ctx);
		}
		
		ctx.fillText(this.gameDate, 130, 855);
	
		ctx.font = '20pt 微軟正黑體';
		ctx.fillStyle = 'white';
		ctx.textBaseline = 'top';
		ctx.textAlign = 'center';
		//ctx.fillText('000年4月11日 11點00分', 130, 855);
		ctx.fillText(this.gameDate, 130, 855);
	}
}