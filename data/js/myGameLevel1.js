

var MyGame = Framework.Class(Framework.Level, {
    load: function () {
        let self = this;
        console.log(this);
        this.isKeyPress = false;
        //this.gameMap = new GameMap();
        this.gameMap = new MapManager();
        //this.gameMap.load();
        this.rootScene.attach(this.gameMap);
        this.timeControl = 800;
        this.ticker = new TickManager();
        this.game = new Game();
		this.eq=1;
        this.buildMode = false;

        this.buildTest = new Framework.Sprite(define.imagePath + '教室/地板.png');
        this.buildTest.position = {
            x: 2000,
            y: 2000
        }
        this.rootScene.attach(this.buildTest);


        //載入老師
        this.teacher = new Teacher();

        //強制更新基礎起始畫圖位置
        this.teacher.basePosition = this.gameMap.position;
        this.rootScene.attach(this.teacher);

        //載入學生
        this.student = new Student();
        this.student2 = new Student();
        this.student3 = new Student();
        //強制更新基礎起始畫圖位置
        this.student.basePosition = this.gameMap.position;
        this.student2.basePosition = this.gameMap.position;
        this.student2.desk = { x: 14, y: 9 };
        this.student3.basePosition = this.gameMap.position;
        this.student3.desk = { x: 11, y: 9 };
        this.rootScene.attach(this.student);
        this.rootScene.attach(this.student2);
        this.rootScene.attach(this.student3);

        this.buildIcon = new Framework.Sprite(define.imagePath + 'UI/build.png');
        this.buildIcon.position = {
            x: 1570,
            y: 870
        }
        this.rootScene.attach(this.buildIcon);


        this.people = new People();
        this.people.load();
        this.rootScene.attach(this.people);


        this.set0 = setInterval(function () {
            self.teacher.move();
            self.people.doRandomMove();
        }, this.timeControl * 0.5);

        //螢幕底下的黑板
        let UI_Board_StartAt = 30;
        this.pic2 = new Framework.Sprite(define.imagePath + 'UI/左.png');
        this.pic2.position = {
            x: UI_Board_StartAt,
            y: 870
        }
        this.rootScene.attach(this.pic2);

        for (let i = 0; i <= 4; i++) {
            this.pic3 = new Framework.Sprite(define.imagePath + 'UI/中.png');
            UI_Board_StartAt += 64;
            this.pic3.position = {
                x: UI_Board_StartAt,
                y: 870
            }
            this.rootScene.attach(this.pic3);
        }
        this.pic5 = new Framework.Sprite(define.imagePath + 'UI/stop.png');
        this.pic5.position = {
            x: (UI_Board_StartAt + 64),
            y: 870
        }
        this.rootScene.attach(this.pic5);
        UI_Board_StartAt += 64;

        this.pic6 = new Framework.Sprite(define.imagePath + 'UI/continue.png');
        this.pic6.position = {
            x: (UI_Board_StartAt + 64),
            y: 870
        }
        this.rootScene.attach(this.pic6);
        UI_Board_StartAt += 64;

        this.pic7 = new Framework.Sprite(define.imagePath + 'UI/hurry.png');
        this.pic7.position = {
            x: (UI_Board_StartAt + 64),
            y: 870
        }
        this.rootScene.attach(this.pic7);
        UI_Board_StartAt += 64;
        this.pic8 = new Framework.Sprite(define.imagePath + 'UI/money.png');
        this.pic8.position = {
            x: (UI_Board_StartAt + 64),
            y: 870
        }
        this.rootScene.attach(this.pic8);
        UI_Board_StartAt += 64;


        this.pic4 = new Framework.Sprite(define.imagePath + 'UI/右.png');
        this.pic4.position = {
            x: (UI_Board_StartAt + 64),
            y: 870
        }
        this.rootScene.attach(this.pic4);
        this.pic_course = new Framework.Sprite(define.imagePath + 'UI/course.png');
        this.pic_course.position = {
            x: (UI_Board_StartAt + 64),
            y: 870
        }
        console.log(UI_Board_StartAt);
        this.rootScene.attach(this.pic_course);
        /*emotion*/

        UI_Board_StartAt += 64;
        this.hour = 8;
        this.ChangeEMO();

        //底下黑板結束

        //this.people = new People();
        //this.people.load();
        //this.rootScene.attach(this.people);

        this.gui = new Gui();
        this.ticker.gui = this.gui;
        this.game.map = this.gameMap;
        this.game.students.push(this.student);
        this.game.students.push(this.student2);
        this.game.students.push(this.student3);
        this.game.gui = this.gui;
        this.game.course = _CourseManager;

        this.rootScene.attach(this.gui);
        this.ticker.game = this.game;

        this.set1 = setInterval(function () {
            self.ticker.Tick();
        }, this.timeControl);

        this.position = {
            x: 100,
            y: 100
        }




        this.rotation = 0;

        this.isStop = false;
        this.isPlayed = false;


        this.clock = new Framework.Sprite(define.imagePath + 'clock.png');
        this.clock.scale = 0.3;
        this.clock.position = {
            x: 0,
            y: 0
        };


        let characterPosition = {
            x: 0,
            y: -1138 * this.clock.scale
        };
        this.secondHand = new Framework.Sprite(define.imagePath + 'secondHand.jpg');
        this.firen = new Character(define.imagePath + 'firen.png', {
            position: characterPosition,
            run: {
                from: 20,
                to: 22
            },
            beHit: {
                from: 30,
                to: 35
            },
            hit: {
                from: 10,
                to: 13
            }
        });
        this.freeze = new Character(define.imagePath + 'freeze.png', {
            position: characterPosition,
            scale: 1,
            run: {
                from: 29,
                to: 27
            },
            beHit: {
                from: 39,
                to: 35
            },
            hit: {
                from: 19,
                to: 16
            }
        });

        /*
        this.clockCenter = new Framework.Scene();
        this.clockCenter.position = {
            x: -10.5 * this.clock.scale,
            y: 51 * this.clock.scale
        };

        this.clockCenterNeg = new Framework.Scene();
        this.clockCenterNeg.position = {
            x: -10.5 * this.clock.scale,
            y: 51 * this.clock.scale
        };

        this.secondHand.position = {
            x: 0,
            y: -100
        };

        this.wholeClock = new Framework.Scene();
        this.wholeClock.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };*/

        /*
                this.secondHandRotationRate = 0.3;
                this.wholeClock.attach(this.clock);
                this.clockCenter.attach(this.secondHand);
                this.clockCenter.attach(this.firen.sprite);
                this.clockCenterNeg.attach(this.freeze.sprite);
                this.wholeClock.attach(this.clockCenterNeg);
                this.wholeClock.attach(this.clockCenter);*/


        //this.rootScene.attach(this.wholeClock);

        //繪製Sprite的boundry (Debug用)
        this.firen.sprite.isDrawBoundry = true;
        this.clock.isDrawBoundry = true;

        //載入要被播放的音樂清單
        //資料夾內只提供mp3檔案, 其餘的音樂檔案, 請自行轉檔測試

        this.audio = new Framework.Audio({
            kick: {
                mp3: define.musicPath + 'kick2.mp3',
                //ogg: define.musicPath + 'kick2.ogg',
                //wav: define.musicPath + 'kick2.wav'
            },
            song1: {
                mp3: define.musicPath + 'NTUT_classic.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            },
            song2: {
                mp3: define.musicPath + 'NTUT_modern.mp3',
                //ogg: define.musicPath + 'The_Messenger.ogg',
                //wav: define.musicPath + 'The_Messenger.wav'
            }
        });

        //播放時, 需要給name, 其餘參數可參考W3C
        //this.audio.play({name: 'song2', loop: true});

        this.rectPosition = {
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            y: Framework.Game.getCanvasHeight() / 2 - 90
        };

        this.position = {
            x: 100,
            y: 100
        }
        this.rotation = 0;
    },
    //下方表情隨著學生平均耐心值改變
    ChangeEMO: function () {
        let xi = 0;
        UI_Board_StartAt = 670
        //console.log("emo");
        this.emo1 = new Framework.Sprite(define.imagePath + 'UI/emo1.png');
        this.emo2 = new Framework.Sprite(define.imagePath + 'UI/emo2.png');
        this.emo3 = new Framework.Sprite(define.imagePath + 'UI/emo3.png');


        if (this.game.GetMinute() % 10 == 0 && this.game.GetHour() == this.hour) {
            this.student.patient = this.student.patient - 12;
            this.student2.patient = this.student2.patient - 12;
            this.student3.patient = this.student3.patient - 12;
            this.hour += 1;

        }
        xi = this.student.patient + this.student2.patient + this.student3.patient;
        xi = xi / 3;
        //console.log(xi);

        if (xi >= 75) {
            this.emo1.position = {
                x: (UI_Board_StartAt + 64),
                y: 870
            }
            this.rootScene.attach(this.emo1);
        }
        else if (xi >= 50) {
            this.emo2.position = {
                x: (UI_Board_StartAt + 64),
                y: 870
            }
            this.rootScene.attach(this.emo2);
        }
        else {
            this.emo3.position = {
                x: (UI_Board_StartAt + 64),
                y: 870
            }
            this.rootScene.attach(this.emo3);
        }

    },
	 earthQuake: function () {
		if(this.eq==1)
		{
			this.gameMap.layerObject[3][6]=10;
			this.gameMap.layerObject[10][9]=13;
			this.gameMap.layerObject[13][15]=13;
			this.gameMap.layerObject[12][3]=13;
			this.eq+=1;
		}
		else if(this.eq==2)
		{
			this.gameMap.layerObject[3][6]=11;
			this.gameMap.layerObject[10][9]=14;
			this.gameMap.layerObject[13][15]=14;
			this.gameMap.layerObject[12][3]=14;
			this.eq+=1;
		}
		else if(this.eq==3){
			this.gameMap.layerObject[3][6]=12;
			this.gameMap.layerObject[10][9]=15;
			this.gameMap.layerObject[13][15]=15;
			this.gameMap.layerObject[12][3]=15;
		}
		


    },
	
    initialize: function () {


    },

    update: function () {
        this.rootScene.update();

        this.gameMap.update();

        this.isStop = false;

        this.freeze.run();

        this.isPlayed = true;

        this.ChangeEMO();
    },


    draw: function (parentCtx) {
        this.rootScene.draw();
		parentCtx.font = '10pt 微軟正黑體';
		parentCtx.fillStyle = 'black';
		parentCtx.textBaseline = 'top';
		parentCtx.textAlign = 'center';
		parentCtx.fillText(this.ticker.money, 605,870);
    },

    moveUp: function () {
        this.gameMap.position.y += 10;
        this.people.position.y += 10;
    },
    moveLeft: function () {
        this.gameMap.position.x += 10;
        this.people.position.x += 10;
    },
    moveRight: function () {
        this.gameMap.position.x -= 10;
        this.people.position.x -= 10;
    },
    moveDown: function () {
        this.gameMap.position.y -= 10;
        this.people.position.y -= 10;
    },
    keyup: function (e, list) {
        this.isKeyPress = false;
    },
    keydown: function (e, list) {
        //this.practice.keydown(e, list);
        var self = this;
        this.isKeyPress = true;
        Framework.DebugInfo.Log.warning(e.key);

        //更新基礎起始畫圖位置
        this.teacher.basePosition = this.gameMap.position;

        if (e.key === 'Up') {
            let moveUpInterval = setInterval(function () {
                if (self.isKeyPress == true) {
                    self.moveUp();
                } else {
                    clearInterval(moveUpInterval);
                }
            }, 1);

            return
        }

        if (e.key === 'Down') {
            let moveDownInterval = setInterval(function () {
                if (self.isKeyPress == true) {
                    self.moveDown();
                } else {
                    clearInterval(moveDownInterval);
                }
            }, 1);

            return
        }

        if (e.key === 'Left') {
            let moveLeftInterval = setInterval(function () {
                if (self.isKeyPress == true) {
                    self.moveLeft();
                } else {
                    clearInterval(moveLeftInterval);
                }
            }, 1);

            return
        }

        if (e.key === 'Right') {
            let moveRightInterval = setInterval(function () {
                if (self.isKeyPress == true) {
                    self.moveRight();
                } else {
                    clearInterval(moveRightInterval);
                }
            }, 1);

            return
        }

        if (e.key === 'Numpad +' || e.key === '=') {
            this.secondHandRotationRate += 0.05;
        }

        if (e.key === 'Numpad -' || e.key === '-') {
            this.secondHandRotationRate -= 0.05;
        }

        if (e.key === 'Pause/Break') {
            //AnimationSprite支援停止正在播放的圖片
            this.firen.sprite.stop();
        }

        if (e.key === 'F5') {
            //AnimationSprite可以恢復暫停正在播放的圖片
            this.firen.sprite.resume();
        }

        if (e.key === 'Enter') {
            if (!this.isFullScreen) {
                Framework.Game.fullScreen();
                this.isFullScreen = true;
            } else {
                Framework.Game.exitFullScreen();
                this.isFullScreen = false;
            }

        }
		console.log(e.key);
		/*颱風*/
		 if (e.key === 'T') {
			 
            
        }
		/*地震*/
		 if (e.key === 'E') {
			 this.eqqq = setInterval(function () {
				self.earthQuake();
				}, this.timeControl*0.7);
            
        }
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        this.click({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        });
    },

    mousemove: function (e) {
        if (this.buildMode) {
            this.buildTest.position = e;
        }
    },

    click: function (e) {
        //alert("你點了一下");
        let self = this;
        this.teacher.isInClickArea(e);
        this.student.isInClickArea(e);

        /*錢錢*/
        if (e.x >= 576 &&
            e.x <= 640 &&
            e.y >= 858 &&
            e.y <= 921
        ) {
            console.log("money");
            let blackScreen = document.getElementById('blackScreen');
            blackScreen.style.display = "block";

            let favDialog = document.getElementById('favDialog');
            favDialog.style.display = "block";

            let html = `
				<th><img src="data/image/UI/money-b.png" style="max-width: 130px;"></th>
				<td>
					目前剩餘資金：${this.ticker.money} 元
				</td>
			`;
			
			$(".windowTitle").text("校產");
			favDialog.getElementsByClassName("content")[0].innerHTML = html;
			
		}
		
		if(this.buildIcon.isInClickArea(e)){
			this.buildMode = true;
		}

		
		
		//顯示課表
		if(e.x >= 632 &&
		   e.y >= 858 &&
		   e.x <= (632 + 64) &&
		   e.y <= 921) {
			_CourseManager.ShowCurriculum();
			
		 }

		
		/*加速*/
		if(e.x >= 512 && 
		   e.x <= 576&&
	       e.y >= 858&&
		   e.y <= 921
		){	
			this.timeControl=55;	
			clearInterval(this.set0);
			clearInterval(this.set1);
			this.set0 = setInterval(function () {
				self.teacher.move();
				self.people.doRandomMove();
				}, this.timeControl*0.5);
			
			this.set1 = setInterval(function () {
				self.ticker.Tick();
				}, this.timeControl);
		}
		/*普通速度 |>*/
		if(e.x >= 432 && 
		   e.x <= 512&&
	       e.y >= 858&&
		   e.y <= 921
		){	
			this.timeControl=800;	
			clearInterval(this.set0);
			clearInterval(this.set1);
			this.set0 = setInterval(function () {
				self.teacher.move();
				self.people.doRandomMove();
				}, this.timeControl*0.5);
			
			this.set1 = setInterval(function () {
				self.ticker.Tick();
				}, this.timeControl);
		}
	/*暫停*/
		if(e.x >= 368 && 
		   e.x <= 432&&
	       e.y >= 858&&
		   e.y <= 921
		){	
			this.timeControl=1000000;	
			clearInterval(this.set0);
			clearInterval(this.set1);
			this.set0 = setInterval(function () {
				self.teacher.move();
				self.people.doRandomMove();
				}, this.timeControl);
			
			this.set1 = setInterval(function () {
				self.ticker.Tick();
				}, this.timeControl);
		}	
	},	
	

});
