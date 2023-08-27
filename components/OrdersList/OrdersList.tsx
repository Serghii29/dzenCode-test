import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { OrderItem } from '../OrderItem';
import classes from '../../styles/order_list.module.scss';
import { useRouter } from 'next/router';
import { searchedOrders } from '@/utils/searched';

export const OrdersList: React.FC = () => {
  const { orders } = useAppSelector((state) => state.orders);
  const { query } = useRouter();
  const searchParams = query.searchParams;

  const preparedOrders = searchedOrders(orders, searchParams as string);

  return (
    <div className={classes.order_list}>
      {preparedOrders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};
