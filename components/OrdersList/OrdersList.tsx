import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { OrderItem } from '../OrderItem';
import classes from '../../styles/order_list.module.scss';
import { useRouter } from 'next/router';
import { searchedOrders } from '@/utils/searched';
import { getOrderWhithProduct } from '@/utils/getOrderWhithProduct';
import { GroupPopUp } from '../GroupsPopUp';

export const OrdersList: React.FC = () => {
  const { orders, selectedOrder } = useAppSelector((state) => state.orders);
  const { products } = useAppSelector((state) => state.products);

  const { query, asPath } = useRouter();
  const searchParams = query.searchParams;

  const isGroups = asPath === '/groups';

  const preparedOrders = searchedOrders(orders, searchParams as string);

  const matchOrderWithProducts = getOrderWhithProduct(
    selectedOrder?.id,
    products,
  );

  return (
    <div className={classes.order_wrapper}>
      <div className={classes.order_list}>
        {preparedOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>

      {matchOrderWithProducts.length > 0 && isGroups && (
        <GroupPopUp
          order={selectedOrder}
          matchOrderWithProducts={matchOrderWithProducts}
        />
      )}
    </div>
  );
};
