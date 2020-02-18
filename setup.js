board = new Board();

snake = new Snake(board);
fruit = new Fruit(board);

(function setup() {
    window.setInterval(() => {
        board.ctx.clearRect(0, 0, board.canvas.width, board.canvas.height);
        fruit.draw(board.ctx);
        snake.update();
        snake.draw(board.ctx);
        if (snake.eat(fruit)) {
            fruit.randomLocation(board);
        }
    }, 250);
}());
window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}));