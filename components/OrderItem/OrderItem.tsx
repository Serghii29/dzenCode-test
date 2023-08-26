import { Order } from '@/types.ts/interfaces';
import Link from 'next/link';
import React, { useState } from 'react';
import menu from '../../public/menu.png';
import { format } from 'date-fns';
import classes from '../../styles/order_item.module.scss';
import { BntDelete } from '../BtnDelete/BntDelete';
import { CustomModal } from '../CustomModal/CustomModal';

type Props = {
  order: Order;
};

export const OrderItem: React.FC<Props> = ({ order }) => {
  const { title, date } = order;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.order_item}>
      <p>{title}</p>

      <Link href={'/'} className={classes.order_item__menu_icon}>
        <img src={menu.src} alt="menu icon" height={'20px'} />
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

      <BntDelete onOpenModale={() => setIsOpen(true)} />

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
