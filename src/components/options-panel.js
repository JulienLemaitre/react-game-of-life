import React from 'react';

const OptionsPanel = (props) => {


  return (
    <div className="panel-area options-panel">
      <div className="option">
        <div className="type">Board</div>
        <div className="btn-group-vertical">
          <button className="btn" type="button" onClick={props.onSetBoard(50,30)}>50 &times; 30</button>
          <button className="btn" type="button" onClick={props.onSetBoard(70,50)}>70 &times; 50</button>
          <button className="btn" type="button" onClick={props.onSetBoard(100,80)}>100 &times; 80</button>
        </div>
      </div>
      <div className="option">
        <div className="type">Speed</div>
        <div className="btn-group-vertical">
          <button className="btn" type="button" onClick={props.onSetSpeed(300)}>Slow</button>
          <button className="btn" type="button" onClick={props.onSetSpeed(150)}>Middle</button>
          <button className="btn" type="button" onClick={props.onSetSpeed(10)}>Fast</button>
        </div>
      </div>
    </div>
  );
};

export default OptionsPanel;