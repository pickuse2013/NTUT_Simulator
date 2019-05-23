class TickManager {
    constructor() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.ctx = this.canvas.getContext('2d');
        this.game = null;
        this.gui = null;
		this.money = 200000;
    }

    StartTicker() {
        //setInterval(function () {
        //    
        //}, 1000);
    }

    Tick() {
        this.UpdateGui();
        this.game.AddInGameSec();
		if(this.game.GetMinute()==4)
			{
				this.money=this.money-3600;
			}

        //console.log("tick");
    }

    UpdateGui()
    {
        this.gui.UpdateGameDate(this.game);
    }

}