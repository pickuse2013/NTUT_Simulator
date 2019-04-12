class TickManager {
    constructor() {
        this.canvas = document.getElementsByTagName("canvas");
        this.ctx = canvas.getContext('2d');
    }

    StartTicker() {
        setInterval(function () {

        }, 1000);
    }

    Tick() {

        this.gui.draw(this.ctx);
        console.log("tick");
    }
}