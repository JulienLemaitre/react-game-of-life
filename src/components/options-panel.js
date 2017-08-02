import React from 'react';

const OptionsPanel = (props) => {

  return (
    <div className="options-panel">
      <div className="board">Board : </div>
      <button type="button" onClick={props.onSetBoard(50,30)}>50 &times; 30</button>
      <button type="button" onClick={props.onSetBoard(70,50)}>70 &times; 50</button>
      <button type="button" onClick={props.onSetBoard(100,80)}>100 &times; 80</button>
      <div className="speed">Speed : </div>
      <button type="button" onClick={props.onSetSpeed(600)}>Slow</button>
      <button type="button" onClick={props.onSetSpeed(250)}>Middle</button>
      <button type="button" onClick={props.onSetSpeed(50)}>Fast</button>
    </div>
  );
};

export default OptionsPanel;