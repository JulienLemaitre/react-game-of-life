import React, { Component } from 'react';
import ControlPanel from './components/control-panel';
import LifeArea from './components/life-area';
import OptionsPanel from './components/options-panel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nRow: 20,
      nColumn: 20,
      world: [],
      play: true
    };

    this.onStart = this.onStart.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSwitchCase = this.onSwitchCase.bind(this);
    this.BuildRandomWorld = this.BuildRandomWorld.bind(this);
    this.nextGen = this.nextGen.bind(this);
  }

  componentDidMount() {
    const firstWorld = this.BuildRandomWorld();
    console.log("componentDidMount","first world created", firstWorld);
    this.setState({world: firstWorld});
  }

  BuildRandomWorld(nRow = this.state.nRow, nColumn = this.state.nColumn) {
    let randomWorld = [];
    for (let r = 0 ; r < nRow ; r++) {
      let row = [];
      for (let c = 0 ; c < nColumn ; c++) {
        if(Math.random() > 0.5) {
          row[c] = 1;
        } else {
          row[c] = 0;
        }
      }
      randomWorld.push(row);
    }
    return randomWorld;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    /*setInterval(() => {
      this.nextGen();
    }, 200);*/
  }

  nextGen() {
    let newWorld = [], width = this.state.nColumn, height = this.state.nRow;
    for (let r = 0 ; r < height ; r++) {
      newWorld[r] = [];
      for (let c = 0 ; c < width ; c++) {
        let alive = this.destin(r,c,this.state.world);
        newWorld[r].push(alive);
      }
    }
    this.setState({world: newWorld});
  }

  destin(row, col, world) {
    let alive = world[row][col], around = 0;
    for (let c = col - 1 ; c <= col + 1 ; c++) {
      if (c >= 0 && c < this.state.nColumn) {
        for (let r = row - 1 ; r <= row + 1 ; r++) {
          if (r >= 0 && r < this.state.nRow && !(c === col && r === row) ) {
            if (this.boxValue(r,c) === 1) {
              around += 1;
            }
          }
        }
      }
    }
    if (alive === 1 && around >= 2 && around <= 3) {
      return 1;
    } else if(alive === 0 && around === 3) {
      return 1;
    } else {
      return 0;
    }
  }

  boxValue(nRows,nColumn) {
    /*let theTable = document.querySelector(".life-area table");
    let rows = theTable.getElementsByTagName("tr");
    let cells = rows[nRows].getElementsByTagName("td");
    let cell = cells[nColumn];
    let alive = cell.getElementsByTagName("input")[0].checked;
    return alive;*/
    return this.state.world[nRows][nColumn];
  }

  onStart() {
    //TODO start the life
    console.log("TODO start the life");
    this.nextGen();
  }

  onPause() {
    //TODO Pause the life
    console.log("TODO Pause the life");
  }

  onClear() {
    //TODO Clear the life
    console.log("TODO Clear the life");
  }

  onSwitchCase(event) {
      console.log("SwitchCase", event.path[1].cellIndex, event.path[2].rowIndex);
      const row = event.path[2].rowIndex;
      const col = event.path[1].cellIndex;
      let changedWorld = this.state.world;
      changedWorld[row].splice(col, 1, changedWorld[row][col] === 1 ? 0 : 1);
      this.setState({world: changedWorld});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>The Game of Life</h1>
        </div>
        <div className="App-body">
          <ControlPanel
            onStart={this.onStart}
            onPause={this.onPause}
            onClear={this.onClear}
          />
          <LifeArea
            world={this.state.world}
            onSwitchCase={this.onSwitchCase}
          />
          <OptionsPanel />
        </div>
      </div>
    );
  }
}

export default App;
