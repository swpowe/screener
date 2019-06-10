import React from 'react';

const ProgressBar = (props) => {
    return (
        <div >
          <div className="progress-bar-text">
          <h1>Level {props.level} Screener</h1>
          <h2>Section {props.section} Progress:</h2>
          </div>
          <div className="progress-bar">
            <Filler percentage={props.percentage} />
          </div>
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }

  export default ProgressBar;