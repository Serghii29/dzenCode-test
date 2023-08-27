import { Order } from '@/types.ts/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { orders } from '../api';

interface OrderState {
  orders: Order[];
  selectedOrder: Order | null;
}

export const initialState: OrderState = {
  orders: orders,
  selectedOrder: null,
};

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addAllOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(({ id }) => id !== action.payload);
    },
    selectedOrder: (state, action: PayloadAction<number>) => {
      const findOrder = state.orders.find(({ id }) => id === action.payload);

      if (findOrder) {
        state.selectedOrder = findOrder;
      }
    },
    deleteSelectedOrder: (state) => {
      state.selectedOrder = null;
    },
  },
});

export const {
  addAllOrders,
  deleteOrder,
  selectedOrder,
  deleteSelectedOrder,
} = ordersSlice.actions;

export const selectCount = (state: RootState) => state.orders;

export default ordersSlice.reducer;
