/* eslint-disable max-len */
import { Order } from '@/types.ts/interfaces';

export const searchedOrders = (orders: Order[], query: string = '') => {
  const preparedQuery = query.trim().toLocaleLowerCase();

  return orders.filter((order) =>
    order.title.toLocaleLowerCase().toLocaleLowerCase().includes(preparedQuery),
  );
};
