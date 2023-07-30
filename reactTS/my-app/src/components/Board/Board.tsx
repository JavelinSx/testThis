import React from 'react';
import BoardCells from '../BoardCells/BoardCells';
import ShipMenu from '../ShipMenu/ShipMenu';

const Menu: React.FC = () => {
  return (
    <div className='board-wrapper'>
      <BoardCells></BoardCells>
      <ShipMenu></ShipMenu>
    </div>
  );
};

export default Menu;
