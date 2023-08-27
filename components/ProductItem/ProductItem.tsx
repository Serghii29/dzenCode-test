import { Product } from '@/types.ts/interfaces';
import React, { useState } from 'react';
import monitor from '../../public/monitor-img.png';
import { format } from 'date-fns';
import classes from '../../styles/product_item.module.scss';
import { BntDelete } from '../BtnDelete';
import getSymbolFromCurrency from 'currency-symbol-map';
import { CustomModal } from '../CustomModal';

type Props = {
  product: Product;
};

export const ProductItem: React.FC<Props> = ({ product }) => {
  const { title, serialNumber, guarantee, price, order, date } = product;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.product_item}>
      <div className={classes.product_item__progress}></div>
      <img src={monitor.src} alt="monitor icon" height={'30px'} />

      <div>
        <p>{title}</p>
        <p className={classes.product_item__serial}>{serialNumber}</p>
      </div>

      <p>Free</p>

      <div>
        <div className={classes.product_item__guarantee}>
          <span className={classes.product_item__guarantee_text}>from</span>
          <p>{format(new Date(guarantee.end), 'dd/MM/yyyy')}</p>
        </div>
        <div className={classes.product_item__guarantee}>
          <span className={classes.product_item__guarantee_text}>to</span>
          <p>{format(new Date(guarantee.end), 'dd/MM/yyyy')}</p>
        </div>
      </div>

      <p>New</p>

      <div>
        {price.map((oneprice) => {
          const isSymbol = oneprice.symbol === 'USD';

          return (
            <div
              key={oneprice.symbol}
              className={isSymbol ? classes.product_item__price : ''}
            >
              <span>{oneprice.value}</span>
              <span>{getSymbolFromCurrency(oneprice.symbol)}</span>
            </div>
          );
        })}
      </div>

      <p className={classes.product_item__group_name}>Some group name</p>

      <p>Order {order}</p>

      <div className={classes.product_item__date}>
        <p>{format(new Date(date), 'dd/MM')}</p>
        <p>{format(new Date(date), 'dd/MM/yyyy')}</p>
      </div>

      <BntDelete onOpenModale={() => setIsOpen(true)} />

      {isOpen && (
        <CustomModal
          isOpen={isOpen}
          selectedItem={product}
          onCloseModale={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
