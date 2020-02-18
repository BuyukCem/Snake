class Fruit {
    constructor(scale,  bord) {
        this.color = "RED";
        this.board = bord;
        this.randomLocation();
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, board.scale, board.scale)
    }
    randomLocation() {
        this.x = (Math.floor(Math.random() * board.columns - 1) + 1) * board.scale;
        this.y = (Math.floor(Math.random() * board.rows - 1) + 1) * board.scale;
    }
}
