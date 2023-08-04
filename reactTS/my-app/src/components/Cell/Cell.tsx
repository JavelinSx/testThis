import React from 'react';

interface CellProps {
  id: number;
  onClick: (id: number) => void;
}

const Cell: React.FC<CellProps> = ({ id, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return <div className='cell' onClick={handleClick}></div>;
};

export default Cell;
