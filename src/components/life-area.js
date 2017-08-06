import React from 'react';

const LifeArea = ({ world, onSwitchCase, sizeHasToChange }) => {

  const displayWorld = () => {
    if (sizeHasToChange) {
      cleanGrid(".life-area");
      buildGrid(".life-area", world);
    } else {
      changeGrid(".life-area", world);
    }
  };

  const cleanGrid = (targetContainer) => {
    let element = document.querySelector(targetContainer);
    if (element) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
  };

  const buildGrid = (targetContainer,world) => {
    if (world.length < 1) {
      return;
    }
    const height = world.length;
    const width = world[0].length;
    let container = document.querySelector(targetContainer);
    let grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
    for(let r = 0; r<height ; r++) {
      let row = document.createElement("div");
      row.className = "line";
      for(let c = 0 ; c<width ; c++) {
        let cell = document.createElement("div");
        cell.setAttribute("id",`cell-${r}-${c}`);
        if (world[r][c] === 1) {
          cell.className = "cell alive";
        } else if (world[r][c] === 2) {
          cell.className = "cell alive born";
        } else if (world[r][c] === -1) {
          cell.className = "cell died";
        } else {
          cell.className = "cell";
        }
        cell.addEventListener("click", onSwitchCase);
        row.appendChild(cell);
      }

      grid.appendChild(row);
    }
  };

  const changeGrid = (targetContainer,world) => {
    if (world.length < 1) {
      return;
    }
    const height = world.length;
    const width = world[0].length;
    for(let r = 0; r<height ; r++) {
      for(let c = 0 ; c<width ; c++) {
        let cell = document.getElementById(`cell-${r}-${c}`);
        if (world[r][c] === 1) {
          cell.className = "cell alive";
        } else if (world[r][c] === 2) {
          cell.className = "cell alive born";
        } else if (world[r][c] === -1) {
          cell.className = "cell died";
        } else {
          cell.className = "cell";
        }
      }
    }
  };

  return (
    <div className="life-area">
      {displayWorld()}
    </div>
  );
};

export default LifeArea;