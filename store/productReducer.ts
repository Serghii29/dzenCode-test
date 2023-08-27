import { Product } from '@/types.ts/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { products } from '../api';

interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: products,
};

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addAllProducts, deleteProduct } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.orders;

export default productsSlice.reducer;
