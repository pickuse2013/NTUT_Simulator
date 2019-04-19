class Game {
    constructor() {
        this.gameDate = ""
        this.inGameSecond = 0;
    }

    AddInGameSec() {
        this.inGameSecond++;
    }

    DateToString() {
        //1秒 = 遊戲1分鐘
        let hours = Math.floor(this.inGameSecond / 60);
        let minutes = this.inGameSecond - hours * 60;

        return hours.toString().padStart(2, "0") + "點" + minutes.toString().padStart(2, "0") + "分";
    }

    
}