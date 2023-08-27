import { Specification, Type } from '@/types.ts/enum';
import { Product } from '@/types.ts/interfaces';

export const getFilteredProducts = (
  products: Product[],
  type: Type | string = '',
  specification: Specification | string = '',
  query: string = '',
): Product[] => {
  let filterProducts = products;

  const normalizedQuery = query.trim().toLowerCase();

  switch (type) {
    case Type.Monitor:
      filterProducts = products.filter(
        (product) => product.type === 'Monitors',
      );
      break;

    case Type.Laptop:
      filterProducts = products.filter((product) => product.type === 'Laptops');
      break;

    case Type.Printer:
      filterProducts = products.filter(
        (product) => product.type === 'Printers',
      );
      break;

    default:
      break;
  }

  switch (specification) {
    case Specification.Specification_1:
      filterProducts = filterProducts.filter(
        (product) => product.specification === 'Specification 1',
      );
      break;

    case Specification.Specification_2:
      filterProducts = filterProducts.filter(
        (product) => product.specification === 'Specification 2',
      );
      break;

    case Specification.Specification_3:
      filterProducts = filterProducts.filter(
        (product) => product.specification === 'Specification3',
      );
      break;

    default:
      break;
  }

  filterProducts = filterProducts.filter((product) =>
    product.title.toLowerCase().includes(normalizedQuery),
  );

  return filterProducts;
};
