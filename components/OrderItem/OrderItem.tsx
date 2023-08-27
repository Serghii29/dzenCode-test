import { Order } from '@/types.ts/interfaces';
import Link from 'next/link';
import React, { useState } from 'react';
import menu from '../../public/menu.png';
import { format } from 'date-fns';
import classes from '../../styles/order_item.module.scss';
import { BntDelete } from '../BtnDelete';
import { CustomModal } from '../CustomModal';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectedOrder } from '@/store/orderReducer';
import { getOrderWhithProduct } from '@/utils/getOrderWhithProduct';

type Props = {
  order: Order;
};

export const OrderItem: React.FC<Props> = ({ order }) => {
  const { id, title, date } = order;
  const [isOpen, setIsOpen] = useState(false);

  const { products } = useAppSelector((state) => state.products);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const isOrders = router.asPath === '/orders';

  const matchOrderWithProducts = getOrderWhithProduct(id, products);

  return (
    <div className={classes.order_item}>
      {isOrders && (
        <>
          <p>{title}</p>
        </>
      )}

      <Link
        href={'/groups'}
        className={classes.order_item__menu_icon}
        onClick={() => dispatch(selectedOrder(id))}
      >
        <img src={menu.src} alt="menu icon" height={'20px'} />
      </Link>

      <div>
        <p>{matchOrderWithProducts.length}</p>
        <p>Products</p>
      </div>

      <div className={classes.order_item__date}>
        <p>{format(new Date(date), 'dd/MM')}</p>
        <p>{format(new Date(date), 'dd/MM/yyyy')}</p>
      </div>

      {isOrders && (
        <>
          <div className={classes.order_item__price}>
            <p>2500$</p>
            <p>250 000.50 uah</p>
          </div>

          <BntDelete onOpenModale={() => setIsOpen(true)} />
        </>
      )}

      {isOpen && (
        <CustomModal
          isOpen={isOpen}
          selectedItem={order}
          onCloseModale={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
