import React, { useState, useEffect } from 'react';
import "./style/general.css"
import "./style/board.css"
import "./style/controls.css"
import Game from "./modules/game"

function App() {
  const [game, setGame] = useState(new Game())
  
  useEffect(() => {
    setTimeout(() => {
      game.gameLoop()
      setGame({...game})
    }, 300)
  }, [game])

  return (
    <div className="App">
      Score: {game.score}
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
  for(var y = 1 ; y <= 20 ; y++){
    for(var x = 1 ; x <= 20 ; x++){
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
