import React from 'react';
import Cell from '../Cell/Cell';

const Cells: React.FC = () => {
  const rows = 10;
  const columns = 10;
  const grid = [];

  const cellHandler = (id: number) => {
    console.log(id);
  };

  let idNum = 0;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      idNum++;
      grid.push(<Cell key={idNum} id={idNum} onClick={cellHandler}></Cell>);
    }
  }

  return <div className='cells'>{grid}</div>;
};

export default Cells;