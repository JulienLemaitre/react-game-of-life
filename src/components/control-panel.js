import React from 'react';

const ControlPanel = (props) => {

  return (
    <div className="panel-area control-panel">
      <div className="btn-group">
        <button className="btn" type="button" onClick={props.onStart}>Start</button>
        <button className="btn" type="button" onClick={props.onPause}>Pause</button>
        <button className="btn" type="button" onClick={props.onClear}>Clear</button>
        <button className="btn" type="button" onClick={props.onRandom}>Randomize</button>
      </div>
      <div className="generation">Generation {props.generation}</div>
    </div>
  );
};

export default ControlPanel;