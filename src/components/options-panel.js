import React from 'react';
import SplitButton from 'react-bootstrap/lib/SplitButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const OptionsPanel = (props) => {

  const figures = props.famousFigures.map((figure) => {
      return (
        <MenuItem eventKey={figure.name} key={figure.name}>{figure.name}</MenuItem>
      );
    }
  );
  const userFigures = props.userFigures.map((figure) => {
    return (
      <MenuItem eventKey={figure.name} key={figure.name}>{figure.name}</MenuItem>
    );
  });

  return (
    <div className="panel-area options-panel">
      <div className="central">
        <div className="option">
          <div className="type">Board :</div>
          <div className="btn-group">
            <button className="btn btn-default" type="button" onClick={props.onSetBoard(50,30)}>50 &times; 30</button>
            <button className="btn btn-default" type="button" onClick={props.onSetBoard(70,50)}>70 &times; 50</button>
            <button className="btn btn-default" type="button" onClick={props.onSetBoard(100,80)}>100 &times; 80</button>
          </div>
          <SplitButton bsStyle="primary" title="Load figures" dropup pullRight id="split-button-dropup-pull-right" onSelect={props.onSetFigure}>
            <MenuItem header>Famous Figures</MenuItem>
            {figures}
            <MenuItem divider />
            <MenuItem header>User Figures</MenuItem>
            {userFigures}
          </SplitButton>
        </div>
        <div className="option">
          <div className="type">Speed :</div>
          <div className="btn-group">
            <button className="btn btn-default" type="button" onClick={props.onSetSpeed(300)}>Slow</button>
            <button className="btn btn-default" type="button" onClick={props.onSetSpeed(150)}>Middle</button>
            <button className="btn btn-default" type="button" onClick={props.onSetSpeed(10)}>Fast</button>
          </div>
        </div>
        <div className="option">
          <Form inline onSubmit={props.onSave}>
            <FormGroup controlId="formInlineName">
              <FormControl
                type="text"
                placeholder="Figure name"
                onChange={props.onFigureNameChange}
                value={props.figureName}
              />
            </FormGroup>
            {' '}
            <Button type="submit">
              Save my figure
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OptionsPanel;