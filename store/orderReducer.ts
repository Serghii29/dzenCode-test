import { Order } from '@/types.ts/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface OrderState {
  orders: Order[]
}

export const initialState: OrderState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addAllOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { addAllOrders } = ordersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.orders;

export default ordersSlice.reducer;
