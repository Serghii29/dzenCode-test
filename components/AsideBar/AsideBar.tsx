import Link from 'next/link';
import React from 'react';
import avatar from '../../public/avatar.jpeg';
import settings from '../../public/settings.png';
import classes from '../../styles/asidebar.module.scss';
// import cn from 'classnames';

export const AsideBar: React.FC = () => {
  return (
    <div className={classes.aside_bar}>
      <div className={classes.aside_bar__user_info}>
        <img src={avatar.src} alt="user avatar" />
        <img
          className={classes.settings_icon}
          src={settings.src}
          alt="settings icon"
        />
      </div>

      <nav className={classes.nav}>
        <div
          className={classes.nav__link}
          // className={({ isActive }) =>
          //   cn(classes.nav__link, { [classes.nav__link__active]: isActive })}
        >
          <Link href={'/orders'}>Orders</Link>
        </div>

        <div className={classes.nav__link}>
          <Link href={'/groups'}>Groups</Link>
        </div>

        <div className={classes.nav__link}>
          <Link href={'/products'}>Products</Link>
        </div>

        <div className={classes.nav__link}>
          <Link href={'/users'}>Users</Link>
        </div>

        <div className={classes.nav__link}>
          <Link href={'/settings'}>Settings</Link>
        </div>
      </nav>
    </div>
  );
};
