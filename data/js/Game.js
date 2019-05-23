/**
 * 控制遊戲
 */
class Game {
    constructor() {
        this.gameDate = "";
        this.inGameSecond = 480;
        this.students = [];
        this.map = [];
        this.course = null;

        this.gui = null;
    }

    /**
     * 增加遊戲中的時間
     */
    AddInGameSec() {
		this.inGameSecond++;
        console.log("add second in game")
        let minutes = this.GetMinute();
        
        if(minutes == 5)
        {
            _CourseManager.currrentCourse++;
        }

        if(minutes < 20)
        {
            for(let student of this.students)
            {
                student.map = this.map;
                student.moveAround();
                //student.moveTo(12, 11, this.map);
            }
        }
		
		if(minutes == 20)
        {
            for(let student of this.students)
            {
                //student.moveTo(16, 6, this.map);
                student.map = this.map;
                student.moveToDesk();
            }
        }
    }
    
    /**
     * 取得目前分鐘
     */
	GetMinute()
	{
		return this.inGameSecond - (this.GetHour() * 60);
    }
    
    /**
     * 取得目前小時
     */
    GetHour()
    {
        return Math.floor(this.inGameSecond / 60);
    }
    
    /**
     * 提供隔式化過的字串
     */
    DateToString() {
        //1秒 = 遊戲1分鐘
        let hours = Math.floor(this.inGameSecond / 60);
        let minutes = this.GetMinute();
		/*
		隔日結算?
		if(hours==13 && minutes>10){
			this.inGameSecond=480;
			Framework.Game.goToNextLevel();	
		}
		*/
        return hours.toString().padStart(2, "0") + "點" + minutes.toString().padStart(2, "0") + "分";	
    }
    
}