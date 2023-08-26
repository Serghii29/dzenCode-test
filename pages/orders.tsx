import { NextPage } from 'next';
import React from 'react';
import { Layout } from '@/components/Layout';
import { OrdersList } from '@/components/OrdersList';
import classes from '../styles/orders_page.module.scss';

const Orders: NextPage = () => {
  return (
    <Layout title={'Orders Page'}>
      <div className={classes.orders_page}>
        <OrdersList />
      </div>
    </Layout>
  );
};

export default Orders;
