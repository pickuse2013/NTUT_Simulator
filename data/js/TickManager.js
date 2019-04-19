class TickManager {
    constructor() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.ctx = this.canvas.getContext('2d');
        this.game = null;
        this.gui = null;
    }

    StartTicker() {
        //setInterval(function () {
        //    
        //}, 1000);
    }

    Tick() {
        this.UpdateGui();
        this.game.AddInGameSec();
        console.log("tick");
    }

    UpdateGui()
    {
        this.gui.UpdateGameDate(this.game);
    }
}