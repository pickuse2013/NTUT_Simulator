//老師專用Class
//變更前請務必洽詢作者
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
			y: 5
		};

		this.sprite = new Framework.Sprite(define.imagePath + 'teacher.png');

		this.b1=new Framework.Sprite(define.imagePath + 'build/bubble1.png');
		this.b2=new Framework.Sprite(define.imagePath + 'build/bubble2.png');
		this.b3=new Framework.Sprite(define.imagePath + 'build/bubble3.png');

		this.count = 1;
		this.teacherStep = 5;
		this.teacherup=0;

		this.name = "test";
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
	bubble_Animation(){
		let newPosition = this.getCurrPos();
		
		if(this.count<=10){
			this.b1.position=newPosition;
			this.b1.position.y-=64;
			this.count+=1;
			return 1;
		}
		else if(this.count>=10 && this.count<=30){
			this.b2.position=newPosition;
			this.b2.position.y-=64;
			this.count+=1;
			return 2;		
		}
		else if(this.count>=20 && this.count<=40) {
			this.b3.position=newPosition;
			this.b3.position.y-=64;
			this.count+=1;
			
			if(this.count>=40){
				this.count=1;
			}
			return 3;
		}
	
	}
	

	draw(ctx) {
		
		let newPosition = this.getCurrPos();

		//console.log("畫圖至x:y :" + newPosition.x + ":" + newPosition.y)

		this.sprite.position = newPosition;
		
		
		this.sprite.draw(ctx);
		
		if(this.bubble_Animation()==1){
			this.b1.draw(ctx);		
		}
		else if (this.bubble_Animation()==2){
			this.b2.draw(ctx);		
		}
		else if (this.bubble_Animation()==3){
			this.b3.draw(ctx);		
		}
		

	}
	move(){
		
		if(this.teacherup==0){
			this.position.y=this.teacherStep;
			this.teacherStep+=1;
			if(this.teacherStep==15){
				this.teacherup=1;			
			}
		}
		else{
			this.position.y=this.teacherStep;
			this.teacherStep-=1;
			if(this.teacherStep==5){
				this.teacherup=0;			
			}	
		
		}
		
	}


	//判斷點擊位置
	isInClickArea(event)
	{
		let currentPosition = this.getCurrPosWithoutPosFix();

		if(event.x >= currentPosition.x && 
		   event.x <= currentPosition.x + this.minWidth &&
	       event.y >= currentPosition.y &&
		   event.y <= currentPosition.y + this.minHeight
		) {
			//console.log("teacher");
			let blackScreen = document.getElementById('blackScreen');
			blackScreen.style.display = "block";

			let favDialog = document.getElementById('favDialog');
			favDialog.style.display = "block";
			

			let html = `
			<table border="1" align="center" width="100%">
				<tr>
					<th><img src="data/image/wkc.png" style="max-width: 130px;"></th>
					<th>OOXX<small>教授</small><br/> <small></small></th>
				</tr>
				<tr>
					<td>職位</td>
					<td>資訊工程系教授</td>
				</tr>
				<tr>
					<td>能力值</td>
					<td>
						知識點: <progress max="100" value="80"></progress><br/>
						體力值: <progress max="100" value="30"></progress><br/>
						有趣度: <progress max="100" value="30"></progress>
					
					</td>
				</tr>
				<tr>
					<td>專長</td>
					<td>物件導向分析與設計、物件導向程式設計</td>
				</tr>
				<tr>
					<td>薪水</td>
					<td>每天 -3900.00</td>
				</tr>
			</table>
			`;
			$(".windowTitle").text("老師");
			favDialog.getElementsByClassName("content")[0].innerHTML = html;
		}

		
		//console.log(event);
		//console.log(currentPosition)
		
	}
}