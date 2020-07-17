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

        moveSnake()
        if(snakeHasReachedTreat()){
            changeTreatPosition()
            expandSnake()
            this.score = this.score + 1
        }
        if(snakeHasExitedTheBoard()){
            alert("Final score: " + this.score)
            window.location.reload()
        }
    }

    function moveSnake(){
        var frontPieceMovement = {
            "LEFT": {
                x: -1,
                y: 0
            },
            "RIGHT": {
                x: 1,
                y: 0
            },
            "UP": {
                x: 0,
                y: -1
            },
            "DOWN": {
                x: 0,
                y: 1
            }
        }

        var frontPixel = board.snake.coordinates[0]
        var movedFrontPixel = {
            x: frontPixel.x + frontPieceMovement[board.snake.direction].x,
            y: frontPixel.y + frontPieceMovement[board.snake.direction].y
        }
        board.snake.coordinates.unshift(movedFrontPixel)
        board.snake.coordinates.pop()
    }

    function snakeHasReachedTreat(){
        var snakeHead = board.snake.coordinates[0]
        return snakeHead.x === board.treat.coordinates.x && snakeHead.y === board.treat.coordinates.y
    }

    function snakeHasExitedTheBoard(){
        var snakeHead = board.snake.coordinates[0]
        return (snakeHead.x > 20 || snakeHead.x < 1 || snakeHead.y > 20 || snakeHead.y < 1)
    }

    function changeTreatPosition(){
        board.treat.coordinates = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
        }
    }

    function expandSnake(){
        var lastPixel = board.snake.coordinates[board.snake.coordinates.length - 1]
        board.snake.coordinates.push({
            x: lastPixel.x,
            y: lastPixel.y
        })
    }

    function setSnakeDirection(direction){
        board.snake.direction = direction
    }

    

    return {
        score,
        board,
        gameLoop,
        setSnakeDirection
    }
}