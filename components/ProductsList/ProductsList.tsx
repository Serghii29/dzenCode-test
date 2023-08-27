import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { ProductItem } from '../ProductItem';
import classes from '../../styles/products_list.module.scss';
import { useRouter } from 'next/router';
import { FilterBar } from '../FilterBar';
import { getFilteredProducts } from '@/utils/getFilteredProducts';

export const ProductsList: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);

  const router = useRouter();
  const { searchParams } = router.query;

  const { filterByType, filterBySpecification } = useAppSelector(
    (state) => state.filter,
  );

  const preparedProducts = getFilteredProducts(
    products,
    filterByType,
    filterBySpecification,
    searchParams as string,
  );

  return (
    <div className={classes.products_list}>
      <div className={classes.products_list__header}>
        <p>Products/ {preparedProducts.length}</p>

        <FilterBar />
      </div>

      {preparedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
