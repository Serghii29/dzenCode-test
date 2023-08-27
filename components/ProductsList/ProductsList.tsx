import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import classes from '../../styles/products_list.module.scss';
import { useRouter } from 'next/router';
import { searchedProducts } from '@/utils/searched';

export const ProductsList: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);

  const { query } = useRouter();
  const searchParams = query.searchParams;

  const preparedOrders = searchedProducts(products, searchParams as string);

  return (
    <div className={classes.products_list}>
      {preparedOrders.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
