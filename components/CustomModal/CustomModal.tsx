import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import deleteIcon from '../../public/delete.png';
import { useAppDispatch } from '@/store/hooks';
import { deleteOrder } from '@/store/orderReducer';
import { Order, Product } from '@/types.ts/interfaces';
import monitorItem from '../../public/monitor-img.png';
import classes from '../../styles/product_item.module.scss';
import { deleteProduct } from '@/store/productReducer';

const ModalWrapper = styled.div`
  width: 400px;
  padding: 0;
`;

const Question = styled.h2`
  margin-bottom: 30px;
  padding: 15px;
`;

const Data = styled.p`
  padding: 10px 15px;
  border-top: 1px solid #d7dfe2;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background: #85bd47;
`;

const Button = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  background: #85bd47;
  padding: 5px 10px;
  outline-color: transparent;
  border: transparent;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    color: red;
    background: #fff;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  height: 30px;
  top: 0px;
  right: 2px;
  width: 30px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  border: 1px solid #d6e0e5;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 12px 3px #99b9c9;
  }
`;

type Props = {
  isOpen: boolean;
  selectedItem: Order | Product;
  onCloseModale: () => void;
};

export const CustomModal: React.FC<Props> = ({
  isOpen,
  onCloseModale,
  selectedItem,
}) => {
  const dispatch = useAppDispatch();

  const isOrder = 'description' in selectedItem;

  const deletedItem = () => {
    if (isOrder) {
      dispatch(deleteOrder(selectedItem.id));
    } else {
      dispatch(deleteProduct(selectedItem.id));
      onCloseModale();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModale}
      ariaHideApp={false}
      style={{
        content: {
          width: '400px',
          margin: 'auto',
          padding: '0',
          position: 'relative',
        },
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(146,163,171,.4',
          padding: '15px',
        },
      }}
    >
      <ModalWrapper>
        <CloseButton onClick={onCloseModale}>X</CloseButton>
        <Question>Are you sure you want to delete this item...?</Question>
        {isOrder ? (
          <Data>{selectedItem.title}</Data>
        ) : (
          <Data style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div className={classes.product_item__progress}></div>
            <img src={monitorItem.src} alt=" monitor icon" height={'30px'} />
            <div>
              <p>{selectedItem.title}</p>
              <p>{selectedItem.serialNumber}</p>
            </div>
          </Data>
        )}
        <ButtonWrapper>
          <Button onClick={onCloseModale}>CANCEL</Button>

          <Button onClick={deletedItem}>
            <img src={deleteIcon.src} alt="delete icon" height={'11px'} />
            DELETE
          </Button>
        </ButtonWrapper>
      </ModalWrapper>
    </Modal>
  );
};
