import Board from "./board"

export default function Game(){
    var board = new Board()
    var score = 0
    var isPaused = true

    board.snake.coordinates = [
        {x: 10, y: 10},
        {x: 11, y: 10},
        {x: 12, y: 10},
        {x: 13, y: 10}
    ]

    board.treat.coordinates = {x: 3, y: 3}

    function gameLoop(){
        if(isPaused === true){
            return
        }

        board.snake.moveSnake()
        if(snakeHasReachedTreat()){
            board.treat.changeTreatPosition()
            board.snake.expandSnake()
            this.score = this.score + 1
        }

        if(playerHasLost()){
            alert("Final score: " + this.score)
            window.location.reload()
        }
    }

    function snakeHasReachedTreat(){
        var snakeHead = board.snake.coordinates[0]
        return snakeHead.x === board.treat.coordinates.x && snakeHead.y === board.treat.coordinates.y
    }

    function playerHasLost(){
        return !board.snake.snakeIsWithinBoundaries({x: 20, y: 20}) 
                || board.snake.snakeHasRunIntoItself()
    }

    function setSnakeDirection(direction){
        board.snake.direction = direction
    }

    function resumeGame(){
        isPaused = false
    }

    function pauseGame(){
        isPaused = true
    }

    function getIsPaused(){
        return isPaused
    }

    return {
        score,
        board,
        gameLoop,
        setSnakeDirection,
        resumeGame,
        pauseGame,
        getIsPaused,
        isPaused
    }
}