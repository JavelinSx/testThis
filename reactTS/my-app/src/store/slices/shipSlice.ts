import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ship, Cell, generateShipId } from '../../types/types';

const initialState: Ship[] = [];

const shipSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {
    addShip: (state, action: PayloadAction<Ship>) => {
      const newShip = action.payload;
      newShip.id = generateShipId();
      state.push(newShip);
    },
    handleHit: (state, action: PayloadAction<{ ship: Ship; cell: Cell }>) => {
      const { ship, cell } = action.payload;
      const existingShip = state.find((s) => s.id === ship.id);
      if (existingShip) {
        // Находим индекс клетки корабля в массиве location
        const cellIndex = existingShip.location.findIndex((c) => c.x === cell.x && c.y === cell.y);
        if (cellIndex !== -1) {
          existingShip.isHit[cellIndex][0] = true; // Устанавливаем флаг попадания в соответствующей клетке корабля
        }
      }
    },
  },
});

export default shipSlice.reducer;
