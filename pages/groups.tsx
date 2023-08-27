import { NextPage } from 'next';
import React from 'react';
import { Layout } from '@/components/Layout';
import { OrdersList } from '@/components/OrdersList';
import classes from '../styles/orders_page.module.scss';
import { useAppSelector } from '@/store/hooks';

const Groups: NextPage = () => {
  const { orders } = useAppSelector(state => state.orders);

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

export default Groups;
