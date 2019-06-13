var endGame = Framework.exClass(Framework.GameMainMenu , {
	//初始化loadingProgress需要用到的圖片
    initializeProgressResource: function() {
        //this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        
        //this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};

        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)                  
    },

    //在initialize時會觸發的事件
    loadingProgress: function(ctx, requestInfo) {
        //console.log(Framework.ResourceManager.getFinishedRequestPercent())
        //this.loading.draw(ctx);
        //ctx.font ='90px Arial';
        //ctx.textAlign = 'center';
        //ctx.fillStyle = 'white';
        //ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },

	load: function(){
		//this.gameOver = new Framework.Sprite(define.imagePath + 'GameOver.png');
		//this.gameOver.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};
		
		//Animation Sprite會用到的圖片資源  
		this.menu = new Framework.Sprite(define.imagePath + 'GameOver.png');
        //this.scrollBar = new Framework.Sprite(define.imagePath + 'scrollBar.png');
        //this.rightArrow = new Framework.Sprite(define.imagePath + 'rightArrow.png');
        //this.photo = new Framework.AnimationSprite({url: photoLink, loop: true, speed: 0.05});
		
		this.isTouchArrow = false;
        this.previousTouch = { x: 0, y: 0 };
        this.currentTouch = { x: 0, y: 0 };

        //為了讓之後的位置較好操控, new出一個位於中心點且可以黏貼任何東西的容器
        //注意, Position都是用中心點
        this.center = new Framework.Scene();
        this.center.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };

        //由於scrollBar將會被attach到this.center上
        //故x設為0, 表示x也是要正中心
		/*
        this.scrollBar.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 4 * 3
        };*/
		/*
        this.photo.position = {
            x: 0,
            y: 0
        };*/

        //Framework支援scale, rotation等功能
        /*this.rightArrow.scale = 1;
        this.rightArrow.position = {
            x: Framework.Game.getCanvasWidth() / 2 - 500,
            y: Framework.Game.getCanvasHeight() / 4 * 3
        };*/
		
        //this.center.attach(this.photo);
        //this.center.attach(new Framework.Sprite(define.imagePath + 'ntut_bg.jpg'));

        //rootScene為系統預設的容器, 由於其他東西都被attach到center上
        //將物件attach到center上, 順序是會影響繪製出來的效果的
        this.rootScene.attach(this.center);
        //this.rootScene.attach(this.scrollBar);
        //this.rootScene.attach(this.rightArrow);

        //讓AnimationSprite開始被播放
        //this.photo.start();
		setTimeout(function(){
			$("#start-menu").fadeIn(800);
		}, 700);
	},
	
    initialize: function() {
		
		/*TESTTTTTTTTTTTT*/
		this.menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.rootScene.attach(this.menu);
		this.rectPosition = { 
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            y: Framework.Game.getCanvasHeight() / 2
        };
    },

    update:function(){     
        this.rootScene.update();
        //this.rootScene.update(); 

        //目前的Framework, 當任何一個GameObject不做attach時, 則必須要自行update
        // this.center.update();        
        //this.scrollBar.update();
    },

    draw: function(parentCtx) { 
        //this.rootScene.draw();一定要在第一行
       // this.rootScene.draw(parentCtx);
        /*TESTTTTTT*/
		//this.menu.draw(parentCtx);
		//parentCtx.font = '90px Microsoft JhengHei ';
		//parentCtx.fontWeight ='bolder';
       // parentCtx.fillStyle = 'gray';
       // parentCtx.textBaseline = 'top';
        //parentCtx.textAlign = 'center';
        //parentCtx.fillText('開學', this.rectPosition.x + 130, this.rectPosition.y, 260);
    },

    mouseup: function(e) {
        this.isTouchArrow = false;
    },

    mousedown: function(e) {
        //console.log為Browser提供的function, 可以在debugger的console內看到被印出的訊息    
        //Framework.Game.goToNextLevel();	
        /*	
        if (e) {
            console.log(e.x, e.y);
        }
        
        this.previousTouch = { x: e.x, y: e.y };
        if (this.previousTouch.x > this.rightArrow.upperLeft.x && this.previousTouch.x < this.rightArrow.upperRight.x && this.previousTouch.y > this.rightArrow.upperLeft.y && this.previousTouch.y < this.rightArrow.lowerLeft.y) {
            this.isTouchArrow = true;
        }*/
    }
});