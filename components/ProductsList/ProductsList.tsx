import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import classes from '../../styles/products_list.module.scss';

export const ProductsList: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <div className={classes.products_list}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
