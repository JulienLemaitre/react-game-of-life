import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { Form, FormControl, Button } from 'react-bootstrap';


const FiguresPanel = (props) => {

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
    <div className="panel-area figures-panel">

      <Form inline onSubmit={props.onSave}>
        <FormControl
          type="text"
          placeholder="Figure name"
          onChange={props.onFigureNameChange}
          value={props.figureName}
        />
        <Button type="submit">
          Save
        </Button>
      </Form>
      <DropdownButton bsStyle="life" title="Load figures" dropup pullRight id="dropdown-basic-dropup-pull-right" onSelect={props.onSetFigure}>
        <MenuItem header>Famous Figures</MenuItem>
        {figures}
        <MenuItem divider />
        <MenuItem header>User Figures</MenuItem>
        {userFigures}
      </DropdownButton>
    </div>
  );
};

export default FiguresPanel;