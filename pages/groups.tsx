import { GetServerSideProps, NextPage } from 'next';
import { Service } from '@/services/service';
import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { OrdersList } from '@/components/OrdersList';
import classes from '../styles/orders_page.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { Order, Product } from '@/types.ts/interfaces';
import { addAllOrders } from '@/store/orderReducer';
import { addAllProducts } from '@/store/productReducer';

type Props = {
  orders: Order[];
  products: Product[];
};

const Groups: NextPage<Props> = ({ orders, products }) => {
  const despatch = useAppDispatch();

  useEffect(() => {
    despatch(addAllOrders(orders));
    despatch(addAllProducts(products));
  }, []);

  const ordersLength = orders.length;

  return (
    <Layout title={'Groups Page'}>
      <div className={classes.orders_page}>
        <div className={classes.orders_page__header}>
          <span>Orders / {ordersLength}</span>
        </div>
        <OrdersList />
      </div>
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

export default Groups;
