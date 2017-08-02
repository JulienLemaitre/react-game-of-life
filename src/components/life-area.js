import React from 'react';

const LifeArea = ({ world, onSwitchCase }) => {

  const displayWorld = () => {
    cleanGrid(".life-area");
    buildGrid(".life-area", world);
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
      console.log("error: no world given to build");
      return;
    }
    const height = world.length;
    const width = world[0].length;
    let container = document.querySelector(targetContainer);
    let grid = document.createElement("table");
    container.appendChild(grid);
    for(let l = 0; l<height ; l++) {
      let row = document.createElement("tr");
      for(let c = 0 ; c<width ; c++) {
        let cell = document.createElement("td");
        cell.setAttribute("class","square");
        let box = document.createElement("input");
        box.setAttribute("type","checkbox");
        // box.addEventListener("click", onSwitchCase);
        if (world[l][c] === 1) {
          box.setAttribute("checked",true);
        }
        let label = document.createElement("label");
        label.addEventListener("click", onSwitchCase);
        cell.appendChild(box);
        cell.appendChild(label);
        row.appendChild(cell);
      }

      grid.appendChild(row);
    }
  };

  return (
    <div className="life-area">
      {displayWorld()}
    </div>
  );
};

export default LifeArea;