import React from 'react';
import "./style/splash-screen.css"

function SplashScreen({show, resumeGame}){
    return (
        <div id="splash-screen" show={show}>
            <h1>Snake</h1>
            <button onClick={() => {
                resumeGame()
            }}>Start game</button>
        </div>
    )
}

export default SplashScreen;