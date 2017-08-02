import React from 'react';

const ControlPanel = (props) => {

  return (
    <div className="control-panel">
      <button type="button" onClick={props.onStart}>Start</button>
      <button type="button" onClick={props.onPause}>Pause</button>
      <button type="button" onClick={props.onClear}>Clear</button>
      <button type="button" onClick={props.onRandom}>Create Random</button>
      <div className="generation">Generation {props.generation}</div>
    </div>
  );
};

export default ControlPanel;