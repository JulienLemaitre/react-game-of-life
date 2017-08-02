import React from 'react';

const ControlPanel = (props) => {

  return (
    <div className="control-panel">
      <button type="button" onClick={props.onStart}>Start</button>
    </div>
  );
};

export default ControlPanel;