class Student {
	
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

		this.sprite = new Framework.Sprite(define.imagePath + 'student.png');

		this.count = 1;
		this.teacherStep = 5;
		this.teacherup=0;

		this.name = "test";
	}
	/*
	this.MW = 64;
	this.MH = 64;
	
	this.position = {
		x: 64,
		y: 64
	};

	this.count=1;
	this.SW=450;
	this.SH=150;

	this.studentPos =[
		[5,3]
	];
	
	this.bubblePos={
		x:64,
		y:64	
	};
	

	this.load = function()
	{
		this.student=new Framework.Sprite(define.imagePath + 'student.png');
		this.b1=new Framework.Sprite(define.imagePath + 'build/bubble1.png');
		this.b2=new Framework.Sprite(define.imagePath + 'build/bubble2.png');
		this.b3=new Framework.Sprite(define.imagePath + 'build/bubble3.png');
	};
	
	this.initialize = function()
	{
		
	};
	
	this.update = function()
	{
		
	};
	
	this.doRandomMove = function()
	{
		this.max = 64;
		this.min = -64;
		this.position.x += Math.random() * (this.max - this.min) + this.min;
		this.position.y += Math.random() * (this.max - this.min) + this.min;
	};
	
	
	this.draw = function(ctx)
	{
		let studentPosition = {
			x: this.position.x + (this.SW * 1) ,
			y: this.position.y + (this.SH * 1) 
		}
		ran=Math.random();
		if(ran>=0.5){
			this.student.position.x=studentPosition.x;
			this.studentPos[0][0]=studentPosition.x;
		}
		else{
			this.student.position.y=studentPosition.y;
			this.studentPos[0][1]=studentPosition.y;
		}
		this.student.draw(ctx)
	};*/


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

	draw(ctx) {
		
		let newPosition = this.getCurrPos();

		//console.log("畫圖至x:y :" + newPosition.x + ":" + newPosition.y)

		this.sprite.position = newPosition;
		
	
		
		this.sprite.draw(ctx);
		

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
			console.log("teacher");
			let blackScreen = document.getElementById('blackScreen');
			blackScreen.style.display = "block";

			let favDialog = document.getElementById('favDialog');
			favDialog.style.display = "block";
			

			let html = `
			<table border="1" align="center" width="100%">
				<tr>
					<th><img src="data/image/wkc.jpg" style="max-width: 130px;"></th>
					<th>某學生<small></small><br/> <small></small></th>
				</tr>
				<tr>
					<td></td>
					<td></td>
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
			favDialog.getElementsByClassName("content")[0].innerHTML = html;
		}

		
		console.log(event);
		console.log(currentPosition)
		
	}
	
};