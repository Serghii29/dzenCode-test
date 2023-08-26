import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './orderReducer';
import productsReducer from './productReducer';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
