import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface GameState {
  start: boolean;
}

const initialState: GameState = {
  start: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: (state) => {
      state.start = true;
    },
    end: (state) => {
      state.start = false;
    },
  },
});

export const { start, end } = gameSlice.actions;
export default gameSlice.reducer;
