import Board from "./board"

export default function Game(){
    var board = new Board()

    board.snake.coordinates = [
        {x: 10, y: 10},
        {x: 11, y: 10},
        {x: 12, y: 10},
        {x: 13, y: 10}
    ]

    board.treat.coordinates = {x: 3, y: 3}

    function setSnakeDirection(direction){
        board.snake.direction = direction
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

    function expandSnake(){
        var lastPixel = board.snake.coordinates[board.snake.coordinates.length - 1]
        board.snake.coordinates.push({
            x: lastPixel.x + 1,
            y: lastPixel.y
        })
    }

    function changeTreatPosition(){
        board.treat.coordinates = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
        }
    }

    return {
        board,
        setSnakeDirection,
        moveSnake,
        expandSnake,
        changeTreatPosition

    }
}