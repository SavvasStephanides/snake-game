import Snake from "../modules/snake"

test("Snake direction is LEFT on initialisation", () => {
    var snake = new Snake()
    expect(snake.direction).toBe("LEFT")
})

test("Snake gets coordinates",() => {
    var snake = new Snake()
    snake.coordinates = [
        {
            x: 4,
            y: 5
        },
        {
            x: 5,
            y: 5
        },
        {
            x: 6,
            y: 5
        }
    ]

    expect(snake.coordinates.length).toBe(3)
    expect(snake.coordinates[0].x).toBe(4)
    expect(snake.coordinates[0].y).toBe(5)
})

test("Snake moves left when direction is LEFT", () => {
    var snake = new Snake()
    snake.coordinates = [
        {
            x: 4,
            y: 5
        },
        {
            x: 5,
            y: 5
        },
        {
            x: 6,
            y: 5
        }
    ]
    snake.direction = "LEFT"
    snake.moveSnake()

    expect(snake.coordinates[0].x).toBe(3)
    expect(snake.coordinates[0].y).toBe(5)

    expect(snake.coordinates[1].x).toBe(4)
    expect(snake.coordinates[1].y).toBe(5)

    expect(snake.coordinates[2].x).toBe(5)
    expect(snake.coordinates[2].y).toBe(5)

    expect(snake.coordinates.length).toBe(3)
})

test("Snake expands when expandSnake() is called",() => {
    var snake = new Snake()

    snake.coordinates = [
        {
            x: 4,
            y: 5
        },
        {
            x: 5,
            y: 5
        },
        {
            x: 6,
            y: 5
        }
    ]

    snake.expandSnake()
    expect(snake.coordinates.length).toBe(4)
})