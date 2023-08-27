import { Product } from '@/types.ts/interfaces';

export const getOrderWhithProduct = (
  orderId: number | undefined,
  products: Product[],
) => {
  if (orderId !== undefined) {
    const matchProducts = products.filter(
      (product) => product.order === orderId,
    );

    return matchProducts;
  }

  return [];
};
