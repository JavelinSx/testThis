import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface OpponentCellState {
  isHit: boolean;
  isMiss: boolean;
}

interface opponentBoardState {
  board: OpponentCellState[][];
}
