import { Order, Product } from '@/types.ts/interfaces';

export const searchedOrders = (orders: Order[], query: string = '') => {
  const preparedQuery = query.trim().toLocaleLowerCase();

  return orders.filter(
    (order) =>
      order
        .title
        .toLocaleLowerCase()
        .toLocaleLowerCase()
        .includes(preparedQuery),
  );
};

export const searchedProducts = (products: Product[], query: string = '') => {
  const preparedQuery = query.trim().toLocaleLowerCase();

  return products.filter((product) =>
    product.title.toLocaleLowerCase().includes(preparedQuery));
};
