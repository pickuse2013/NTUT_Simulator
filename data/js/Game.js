class Game {
    constructor() {
        this.gameDate = ""
        this.inGameSecond = 0;
        this.students = [];
        this.map = [];
    }

    AddInGameSec() {
        this.inGameSecond++;
        console.log("add second in game")

        if(this.inGameSecond == 3)
        {
            for(let student of this.students)
            {
                student.moveTo(12, 11, this.map);
            }
        }
		
		if(this.inGameSecond == 40)
        {
            for(let student of this.students)
            {
                student.moveTo(12, 16, this.map);
            }
        }
    }

    DateToString() {
        //1秒 = 遊戲1分鐘
        let hours = Math.floor(this.inGameSecond / 60);
        let minutes = this.inGameSecond - hours * 60;
		
		if(hours>=24){
			this.inGameSecond=0;
		}
		
        return hours.toString().padStart(2, "0") + "點" + minutes.toString().padStart(2, "0") + "分";
    }
    
}