import { Order } from '@/types.ts/interfaces';
import Link from 'next/link';
import React from 'react';
import menu from '../../public/menu.png';
import { format } from 'date-fns';
import classes from '../../styles/order_item.module.scss';
import deleteIcon from '../../public/delete.png';

type Props = {
  order: Order
};

export const OrderItem: React.FC<Props> = ({ order }) => {
  const { title, date } = order;

  return (
    <div className={classes.order_item}>
      <p>{title}</p>

      <Link
        href={'/'}
        className={classes.order_item__menu_icon}
      >
        <img
          src={menu.src}
          alt="menu icon"
          height={'20px'}
        />
      </Link>

      <p>Products</p>

      <div className={classes.order_item__date}>
        <p>{format(new Date(date), 'dd/MM')}</p>
        <p>{format(new Date(date), 'dd/MM/yyyy')}</p>
      </div>

      <div className={classes.order_item__price}>
        <p>2500$</p>
        <p>250 000.50 uah</p>
      </div>

      <button
        type='button'
        className={classes.order_item__btn}
      >
        <img src={deleteIcon.src} alt="delete icon" height={'17px'}/>
      </button>
    </div>
  );
};
