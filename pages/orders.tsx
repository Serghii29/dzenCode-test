import { NextPage } from 'next';
import React from 'react';
import { Layout } from '@/components/Layout';
import { OrdersList } from '@/components/OrdersList';
import classes from '../styles/orders_page.module.scss';
import addIcon from '../public/plus.png';
import { useAppSelector } from '@/store/hooks';
// import { addAllOrders } from '@/store/orderReducer';

const Orders: NextPage = () => {
  const { orders } = useAppSelector(state => state.orders);
  const ordersLength = orders.length;

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(addAllOrders(orders));
  // }, []);

  return (
    <Layout title={'Orders Page'}>
      <div className={classes.orders_page}>
        <div className={classes.orders_page__header}>
          <div className={classes.add_icon}>
            <img src={addIcon.src} alt="add icon" />
          </div>

          <span>Orders / {ordersLength}</span>
        </div>
        <OrdersList />
      </div>
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps<Props> = async() => {
//   const orders = await Service.getAllOrders();

//   return {
//     props: { orders },
//   };
// };

export default Orders;
