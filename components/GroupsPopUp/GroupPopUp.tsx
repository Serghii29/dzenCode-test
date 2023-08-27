import { Order, Product } from '@/types.ts/interfaces';
import React, { useState } from 'react';
import { BntDelete } from '../BtnDelete';
import addBtn from '../../public/plus.png';
import monitorIcon from '../../public/desktop.png';
import { CustomModal } from '../CustomModal';
import classes from '../../styles/group_pop_up.module.scss';
import style from '../../styles/product_item.module.scss';
import closeIcon from '../../public/close-icon.png';
import { useAppDispatch } from '@/store/hooks';
import { deleteSelectedOrder } from '@/store/orderReducer';

type Props = {
  order: Order | null;
  matchOrderWithProducts: Product[];
};

export const GroupPopUp: React.FC<Props> = ({
  order,
  matchOrderWithProducts,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className={classes.group_pop_up}>
      <img
        src={closeIcon.src}
        alt="close icon"
        height={'20px'}
        className={classes.group_pop_up__close_btn}
        onClick={() => dispatch(deleteSelectedOrder())}
      />

      <p className={classes.group_pop_up__title}>{order?.title}</p>

      <div className={classes.group_pop_up__add_product}>
        <img src={addBtn.src} alt="add product button" height={'20px'} />

        <p>Add product</p>
      </div>

      {matchOrderWithProducts.map((product) => (
        <>
          <div className={classes.group_pop_up__product_wrapper}>
            <div className={classes.group_pop_up__product_info}>
              <div className={style.product_item__progress}></div>

              <img src={monitorIcon.src} alt="monitor icon" height={'30px'} />

              <div>
                <p>{product.type}</p>

                <p className={style.product_item__serial}>
                  {product.serialNumber}
                </p>
              </div>
            </div>

            <p>In service</p>

            <BntDelete onOpenModale={() => setIsOpen(true)} />

            {isOpen && (
              <CustomModal
                isOpen={isOpen}
                selectedItem={product}
                onCloseModale={() => setIsOpen(false)}
              />
            )}
          </div>
        </>
      ))}
    </div>
  );
};
