import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface FilterState {
  filterByType: string;
  filterBySpecification: string;
}

export const initialState: FilterState = {
  filterByType: '',
  filterBySpecification: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addfilterByType: (state, action: PayloadAction<string>) => {
      state.filterByType = action.payload;
    },
    addfilterBySpecification: (state, action: PayloadAction<string>) => {
      state.filterBySpecification = action.payload;
    },
  },
});

export const { addfilterByType, addfilterBySpecification } =
  filterSlice.actions;

export const selectCount = (state: RootState) => state.orders;

export default filterSlice.reducer;
