class Snake {
    tail = [];
    xSpeed = board.scale * 1;
    ySpeed = 0;
    total = 0;

    constructor(color, Bord) {
        this.x = 0;
        this.y = 0;
        this.color = color;
        this.board= Bord;

    }

    draw(ctx) {
        ctx.fillStyle = "#FFFFFF";
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, board.scale, board.scale);
        }
        ctx.fillRect(this.x, this.y, board.scale, board.scale);
    }

    update() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = {x: this.x, y: this.y};
        console.log("------");
        console.log(this.total);
        console.log({x: this.x, y: this.y});

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > board.canvas.width) {
            this.x = 0;
        }
        if (this.y > board.canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = board.canvas.width;
        }
        if (this.y < 0) {
            this.y = board.canvas.height;
        }
    }

    changeDirection(direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -board.scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = board.scale * 1;
                break;
            case 'Left':
                this.xSpeed = -board.scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = board.scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    eat(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }
        return false;
    }
}