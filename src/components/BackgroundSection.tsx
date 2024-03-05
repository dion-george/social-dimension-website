import React from 'react';
import './BackgroundSection.css';

const BackgroundSection: React.FC = () => {
  return (
    <div className="background-section">
      <h1>social dimension by seesaw</h1>
      <div className="tagline-container">
        <p className="tagline-small">Come for the chatty games ...</p>
        <div className="tagline-large-wrapper">
          <p className="tagline-large">stay for captivating conversations.</p>
        </div>
      </div>
    </div>
  );
}

export default BackgroundSection;
