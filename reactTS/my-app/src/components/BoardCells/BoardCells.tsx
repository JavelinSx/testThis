import React from 'react';
import CellsOpponent from '../CellsOpponent/CellsOpponent';
import CellsPlayer from '../CellsPlayer/CellsPlayer';

const BoardCells: React.FC = () => {
  return (
    <div className='board-cells'>
      <CellsPlayer />
      <CellsOpponent />
    </div>
  );
};

export default BoardCells;
