import React from 'react';
import deleteIcon from '../../public/delete.png';
import classes from '../../styles/btn_delete.module.scss';

type Props = {
  onOpenModale: () => void;
};

export const BntDelete: React.FC<Props> = ({ onOpenModale }) => {
  const deleteHandle = () => {
    onOpenModale();
  };

  return (
    <button type="button" className={classes.btn_delete} onClick={deleteHandle}>
      <img src={deleteIcon.src} alt="delete icon" height={'17px'} />
    </button>
  );
};
