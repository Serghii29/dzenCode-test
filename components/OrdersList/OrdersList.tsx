import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { OrderItem } from '../OrderItem';
import classes from '../../styles/order_list.module.scss';

export const OrdersList: React.FC = () => {
  const { orders } = useAppSelector((state) => state.orders);

  return (
    <div className={classes.order_list}>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};
