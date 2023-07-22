import React from 'react';
import Button from '../bootstrap/Button/Button';
import { useAppDispatch } from '../../hooks/hooks';
import { start, end } from '../../store/slices/game';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleStart = () => {
    dispatch(start());
  };

  return (
    <div className='menu-wrapper'>
      <Button
        className='button-start'
        variant='success'
        customProp='Начать игру'
        onClick={handleStart}
        size='lg'
      ></Button>
    </div>
  );
};

export default Menu;
