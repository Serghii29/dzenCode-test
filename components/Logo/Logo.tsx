import Link from 'next/link';
import React from 'react';
import logo from '../../public/logo.png';
import classes from '../../styles/logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <>
      <Link href={'/'}>
        <div className={classes.logo}>
          <img src={logo.src} alt="logo" />

          <p className={classes.logo__text}>inventory</p>
        </div>
      </Link>
    </>
  );
};
