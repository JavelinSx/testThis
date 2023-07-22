import React from 'react';
import Menu from '../Menu/Menu';
import Board from '../Board/Board';
import { useAppSelector } from '../../hooks/hooks';

function App() {
  const start = useAppSelector((state) => state.game.start);
  return <div className='App'>{start ? <Board></Board> : <Menu></Menu>}</div>;
}

export default App;
