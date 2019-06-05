import React from 'react';
import VocabQuestion from './components/VocabQuestion';

import logo from './Assets/Art/Logo.png';
import header_bottom from './Assets/Art/header_bottom.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alegra Learning Screener
        </a>
        <img src={header_bottom} className="Header-Bottom-Bar" alt="header_bottom" />
      </header>
      
      <VocabQuestion />
    </div>
  );
}

export default App;
