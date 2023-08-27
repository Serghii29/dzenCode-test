import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import classes from '../styles/products_page.module.scss';
import { ProductsList } from '@/components/ProductsList';
import { Service } from '@/services/service';
import { Product } from '@/types.ts/interfaces';
import { useAppDispatch } from '@/store/hooks';
import { addAllProducts } from '@/store/productReducer';

type Props = {
  products: Product[];
}

const Products: NextPage<Props> = ({ products }) => {
  const despatch = useAppDispatch();

  useEffect(() => {
    despatch(addAllProducts(products));
  }, []);

  return (
    <Layout title="Products Page">
      <div className={classes.products_page}>
        <ProductsList />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async() => {
  const products = await Service.getAllProducts();

  return {
    props: { products },
  };
};

export default Products;
