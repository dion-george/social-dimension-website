import React from 'react';
import ReactGA from "react-ga4";
import './ButtonSection.css';

const ButtonSection: React.FC = () => {


  const trackPlayer1Click = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click',
      label: 'Session for Player 1',
    });
    window.open("https://dune-teller-0b2.notion.site/Player-A-Social-Dimension-e76b51204b7d48daa072b06e314ba3a0", '_blank');
  };

  const trackPlayer2Click = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click',
      label: 'Session for Player 2',
    });
    window.open("https://dune-teller-0b2.notion.site/Player-B-Social-Dimension-5cb6d61c17df484eaed0b5cde0ae17fb?pvs=4", '_blank');
  };

  return (
    <div className="content-section">
      <h2>A carefully crafted experience to connect on a deeper level.</h2>
      <div className="btn-container"> {/* New wrapper for buttons */}
        <button className="btn btn-player1" onClick={trackPlayer1Click}>Player 1 Guidebook</button>
        <button className="btn btn-player2" onClick={trackPlayer2Click}>Player 2 Guidebook</button>
      </div>
    </div>
  );
}

export default ButtonSection;
