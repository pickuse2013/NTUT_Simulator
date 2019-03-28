/*
console.log(e.x, e.y);
if (!this.rectPosition) {
    return;
}  

if(e.x >= this.rectPosition.x && e.x <= this.rectPosition.x + 260 && e.y >= this.rectPosition.y && e.y <= this.rectPosition.y + 90) {
    if(!this.isClockStop) {
        this.secondHandRotationRate = 0;
        this.isClockStop = true;
        //Audio可以一次暫停所有的音樂
        this.audio.pauseAll();
    } else {
        this.isClockStop = false;
        this.secondHandRotationRate = 0.3;
        //Audio也可以針對一首歌進行操作(繼續播放)
        this.audio.resume('song2');
    }
} else if(e.x >= this.clock.upperLeft.x && e.x <= this.clock.lowerRight.x && e.y >= this.clock.upperLeft.y && e.y <= this.clock.lowerRight.y) {
    //由於Click Me在太小的螢幕的情況下會蓋到Clock, 導致點擊Click Me時, 會回到前一個Level,
    //故使用else if, 並優先選擇Click Me會觸發的條件
    this.audio.stopAll();
    Framework.Game.goToPreviousLevel();            
    return;
}*/