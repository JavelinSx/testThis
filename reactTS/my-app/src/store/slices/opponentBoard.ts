import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardState, Ship, Cell } from '../../types/types';

const initialState: BoardState = {
  cells: [],
  ships: [],
  boardHits: [],
};

const opponentBoardSlice = createSlice({
  name: 'plauerBoard',
  initialState,
  reducers: {
    handleBoardHit: (state, action: PayloadAction<Cell>) => {
      const { x, y } = action.payload;
      state.boardHits[y][x] = true; // Устанавливаем флаг попадания на доске по соответствующей клетке
    },
  },
});
