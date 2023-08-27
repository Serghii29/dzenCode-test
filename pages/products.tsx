import { NextPage } from 'next';
import React from 'react';
import { Layout } from '@/components/Layout';
import classes from '../styles/products_page.module.scss';
import { ProductsList } from '@/components/ProductsList';

const Products: NextPage = () => {
  return (
    <Layout title="Products Page">
      <div className={classes.products_page}>
        <ProductsList />
      </div>
    </Layout>
  );
};

export default Products;
