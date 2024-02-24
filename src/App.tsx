import React from 'react';
import './App.css'; // Importing the CSS for styles

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        {/* Text container */}
        <div className="text-container">
          <h1>Welcome to Social Dimension by Seesaw</h1>
          <p>Engage in meaningful conversations and fun activities with your partner.</p>
        </div>
        
        {/* Hero Image */}
        <img src={`${process.env.PUBLIC_URL}/images/hero.png`} className="hero-image" alt="Hero" />
        
        {/* Buttons container */}
        <div className="buttons-container">
          <a href="/player1" className="btn">Session for Player 1</a>
          <a href="/player2" className="btn">Session for Player 2</a>
        </div>
      </div>
    </div>
  );
}

export default App;
