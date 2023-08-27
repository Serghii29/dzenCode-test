import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterReducer';
import ordersReducer from './orderReducer';
import productsReducer from './productReducer';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
