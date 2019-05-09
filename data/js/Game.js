class Game {
    constructor() {
        this.gameDate = ""
        this.inGameSecond = 480;
        this.students = [];
        this.map = [];
        this.course = [];
        this.course.push();

    }
	GetMinute()
	{
		let hours = Math.floor(this.inGameSecond / 60);
		let minutes = this.inGameSecond - hours * 60;
		return minutes;
	}
    AddInGameSec() {
		this.inGameSecond++;
        console.log("add second in game")
		let minutes = this.GetMinute();

        if(minutes == 3)
        {
            for(let student of this.students)
            {
                student.moveTo(12, 11, this.map);
            }
        }
		
		if(minutes == 11)
        {
            for(let student of this.students)
            {
                student.moveTo(16, 6, this.map);
            }
        }
    }
	


    DateToString() {
        //1秒 = 遊戲1分鐘
        let hours = Math.floor(this.inGameSecond / 60);
        let minutes = this.GetMinute();
		
		if(hours>=24){
			this.inGameSecond=0;
		}

		
        return hours.toString().padStart(2, "0") + "點" + minutes.toString().padStart(2, "0") + "分";	
    }
    
}