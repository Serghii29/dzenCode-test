import { Order, Product } from '@/types.ts/interfaces';
import axios from 'axios';

const API_URL = 'http://localhost:5454';

axios.defaults.baseURL = API_URL;

export const Service = {
  async getAllOrders() {
    const { data } = await axios.get<Order[]>('/orders');

    return data;
  },

  async getAllProducts() {
    const { data } = await axios.get<Product[]>('/products');

    return data;
  },
};
