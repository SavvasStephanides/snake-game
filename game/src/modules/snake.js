export default function Snake(){
    var coordinates = []
    var direction = "LEFT"

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

        var frontPixel = this.coordinates[0]
        var movedFrontPixel = {
            x: frontPixel.x + frontPieceMovement[this.direction].x,
            y: frontPixel.y + frontPieceMovement[this.direction].y
        }
        this.coordinates.unshift(movedFrontPixel)
        this.coordinates.pop()
    }

    function expandSnake(){
        var lastPixel = this.coordinates[this.coordinates.length - 1]
        this.coordinates.push({
            x: lastPixel.x,
            y: lastPixel.y
        })
    }

    function snakeHasRunIntoItself(){
        var snakeCoordinates = [...this.coordinates]
        var head = snakeCoordinates.shift()
        return snakeCoordinates.filter((coordinates) => coordinates.x === head.x && coordinates.y === head.y).length > 0
    }

    return {
        coordinates,
        direction,
        moveSnake,
        expandSnake,
        snakeHasRunIntoItself
    }
}