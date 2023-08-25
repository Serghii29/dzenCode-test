import { NextPage } from 'next';
import React from 'react';
import { Layout } from '@/components/Layout';
import { OrdersList } from '@/components/OrdersList';

const Orders: NextPage = () => {
  return (
    <Layout title={'Orders Page'}>
      <OrdersList />
    </Layout>
  );
};

export default Orders;
