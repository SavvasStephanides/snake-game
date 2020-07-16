import React, { useState, useEffect } from 'react';
import "./style/general.css"
import "./style/board.css"
import "./style/controls.css"
import Game from "./modules/game"

function App() {
  const [game, setGame] = useState(new Game())
  
  useEffect(() => {
    setTimeout(() => {
      game.moveSnake()
      setGame({...game})
    }, 500)
  }, [game])

  return (
    <div className="App">
      <section id="board">
      {
        getBoardPixels(game).map((pixel, index) => <div className={"board-pixel"} 
          key={index} x={pixel.x} y={pixel.y} 
          snakepiece={pixel.hasSnakePiece === true ? "1": "0"}
          treat={pixel.hasTreat === true ? "1": "0"}>

        </div>)
      }
      </section>
      <section id="controls">
        <div></div>
        <button onClick={() => game.setSnakeDirection("UP")}>UP</button>
        <div></div>
        <button onClick={() => game.setSnakeDirection("LEFT")}>LEFT</button>
        <div></div>
        <button onClick={() => game.setSnakeDirection("RIGHT")}>RIGHT</button>
        <div></div>
        <button onClick={() => game.setSnakeDirection("DOWN")}>DOWN</button>
        <div></div>
      </section>
    </div>
  );
}

function getBoardPixels(game){
  var pixels = []
  for(var y = 0 ; y < 20 ; y++){
    for(var x = 0 ; x < 20 ; x++){
      pixels.push({
        x,
        y, 
        hasSnakePiece: game.board.snake.coordinates.some((pixel) => pixel.x === x && pixel.y === y),
        hasTreat: game.board.treat.coordinates.x === x && game.board.treat.coordinates.y === y
      })
    }
    
  }
  return pixels
          
}

export default App;
