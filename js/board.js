class Board {
    constructor() {
        this.canvas = document.querySelector(".canvas");
        this.ctx = this.canvas.getContext("2d");
        this.scale = 10;
        this.rows = this.canvas.height / this.scale;
        this.columns = this.canvas.width / this.scale;
    }

}

