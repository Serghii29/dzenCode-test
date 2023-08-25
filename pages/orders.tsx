import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { OrdersList } from '@/components/OrdersList';
import { Order } from '@/types.ts/interfaces';
import { Service } from '@/services/service';
import { useAppDispatch } from '@/store/hooks';
import { addAllOrders } from '@/store/orderReducer';

type Props = {
  orders: Order[];
};

const Orders: NextPage<Props> = ({ orders }) => {
  const despatch = useAppDispatch();

  useEffect(() => {
    despatch(addAllOrders(orders));
  }, []);

  return (
    <Layout title={'Orders Page'}>
      <OrdersList />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async() => {
  const orders = await Service.getAll();

  return {
    props: { orders },
  };
};

export default Orders;
