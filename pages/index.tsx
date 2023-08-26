import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Service } from '@/services/service';
import { Order, Product } from '@/types.ts/interfaces';
import { useAppDispatch } from '@/store/hooks';
import { addAllOrders } from '@/store/orderReducer';
import { addAllProducts } from '@/store/productReducer';

type Props = {
  orders: Order[];
  products: Product[]
};

const Home: NextPage<Props> = ({ orders, products }) => {
  const despatch = useAppDispatch();

  useEffect(() => {
    despatch(addAllOrders(orders));
    despatch(addAllProducts(products));
  }, []);

  return (
    <Layout title={'Home Page'}>
      { }
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async() => {
  const orders = await Service.getAllOrders();
  const products = await Service.getAllProducts();

  return {
    props: {
      orders,
      products,
    },
  };
};

export default Home;
