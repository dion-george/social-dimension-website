import React, { useEffect } from 'react';
import BackgroundSection from './components/BackgroundSection';
import ButtonSection from './components/ButtonSection';
import initializeAnalytics from './analytics';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);


  return (
    <div className="App">
      <BackgroundSection />
      <ButtonSection />
    </div>
  );
}

export default App;
