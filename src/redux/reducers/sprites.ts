import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/index.ts';

export const spritesSlice = createSlice({
  name: 'sprites',
  initialState: {
    hasSeenSprites: false,
  },
  reducers: {
    setHasSeenSprites: (state, action) => {
      state.hasSeenSprites = action.payload;
    },
  },
});

export const selectHasSeenSprites = (state: RootState) => state.sprites.hasSeenSprites;

export const { setHasSeenSprites } = spritesSlice.actions;

export default spritesSlice.reducer;
