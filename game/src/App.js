import React, { useState, useEffect } from 'react';
import "./style/general.css"
import "./style/board.css"
import "./style/controls.css"
import Game from "./modules/game"
import SplashScreen from "./SplashScreen"

function App() {
  
  const [game, setGame] = useState(new Game())
  addArrowKeyListeners(game)
  
  useEffect(() => {
    setTimeout(() => {
      game.gameLoop()
      setGame({...game})
    }, 300)
  }, [game])

  return (
    <div className="App">
      <div className="score-display">Score: {game.score}</div>
      <Board game={game}/>
      <Controls setSnakeDirection={game.setSnakeDirection}/>

      <SplashScreen show={game.getIsPaused() ? "1" : "0"} resumeGame={() => game.resumeGame()}/>

    </div>
  )
}

function Board({game}){
  return (
    <section id="board">
    {
      getBoardPixels(game).map((pixel, index) => <div className={"board-pixel"} 
        key={index} x={pixel.x} y={pixel.y} 
        snakepiece={pixel.hasSnakePiece === true ? "1": "0"}
        treat={pixel.hasTreat === true ? "1": "0"}>

      </div>)
    }
    </section>
  )
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

function Controls({setSnakeDirection}){
  return (
    <section id="controls">
      <div></div>
      <button onClick={() => setSnakeDirection("UP")}>UP</button>
      <div></div>
      <button onClick={() => setSnakeDirection("LEFT")}>LEFT</button>
      <div></div>
      <button onClick={() => setSnakeDirection("RIGHT")}>RIGHT</button>
      <div></div>
      <button onClick={() => setSnakeDirection("DOWN")}>DOWN</button>
      <div></div>
    </section>
  )
}

function addArrowKeyListeners(game){
  document.addEventListener("keydown", (event) => {
    var keyPressed = event.key

    switch(keyPressed){
      case "ArrowUp":
        game.setSnakeDirection("UP")
        break

      case "ArrowDown":
        game.setSnakeDirection("DOWN")
        break

      case "ArrowLeft":
        game.setSnakeDirection("LEFT")
        break

      case "ArrowRight":
        game.setSnakeDirection("RIGHT")
        break

      default:
        console.log("Only arrow keys do anything here");
    }
  })

}

export default App;
