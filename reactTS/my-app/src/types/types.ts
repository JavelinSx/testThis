import { v4 as uuidv4 } from 'uuid';

export type ShipType = 'small' | 'middle' | 'large' | 'big';

export interface Cell {
  x: number;
  y: number;
  isHit: boolean;
}

export interface Ship {
  id: string;
  type: ShipType;
  health: number;
  length: number;
  location: Cell[];
  isHit: boolean[][];
}

export interface BoardState {
  cells: Cell[][];
  ships: Ship[];
  boardHits: boolean[][];
}

export interface PlayerBoardState {
  playerBoard: BoardState;
  opponentBoard: BoardState;
}

export function generateShipId(): string {
  return uuidv4();
}
