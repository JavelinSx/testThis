import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface CellState {
  hasShip: boolean;
  isHit: boolean;
}

interface ShipState {
  all: number;
  alive: number;
  die: number;
  hit: number;
}

interface AllShipsState {
  smallShip: ShipState & { all: 4 };
  middleShip: ShipState & { all: 3 };
  largeShip: ShipState & { all: 2 };
  bigShip: ShipState & { all: 1 };
}

interface playerBoardState {
  board: CellState[][];
  ships: AllShipsState;
}
