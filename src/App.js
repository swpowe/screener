import React from 'react';
import VocabQuestion from './components/VocabQuestion';
import StudentInfo from './components/StudentInfo';

import logo from './Assets/Art/Logo.png';
import header_bottom from './Assets/Art/header_bottom.png';
import background from './Assets/Art/background.png'
import './App.css';


function App() {
  const style = {
    // backgroundImage: 'url(/Assets/Art/background.png)',
    // opacity: '.5'
  }
  return (
    <div className="App" style={style}> 
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
        <div style={{color:"pink"}}>
          <h1>student name</h1>
        </div>
        <img src={header_bottom} className="Header-Bottom-Bar" alt="header_bottom" />
        
      </header>
      {/* <StudentInfo /> */}
      <VocabQuestion />
    </div>
  );
}

export default App;
