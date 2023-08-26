import React from 'react';
import deleteIcon from '../../public/delete.png';
import classes from '../../styles/btn_delete.module.scss';

export const BntDelete: React.FC = () => {
  return (
    <button type="button" className={classes.btn_delete}>
        <img src={deleteIcon.src} alt="delete icon" height={'17px'} />
      </button>
  );
};
