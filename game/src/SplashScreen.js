import React from 'react';
import "./splash-screen.css";

function SplashScreen(props){
    return (
      <div className="splash-screen" show={props.show}>
          <div className="container">
            <h1>Neon Snake</h1>
            <div className="controls">
                <button onClick={() => props.setSplashScreenIsVisible(false)}>Play</button>
            </div>
          </div>
      </div>
      
    )
  }

  export default SplashScreen;
