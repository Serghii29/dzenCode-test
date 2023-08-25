import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import avatar from '../../public/avatar.jpeg';
import settings from '../../public/settings.png';
import classes from '../../styles/asidebar.module.scss';

export const AsideBar: React.FC = () => {
  const { pathname } = useRouter();

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
        <div className={classes.nav__link}>
          <Link
            href={'/orders'}
            className={pathname === '/orders' ? classes.nav__link__active : ''}
          >
            Orders
          </Link>
        </div>

        <div className={classes.nav__link}>
          <Link
            href={'/groups'}
            className={pathname === '/groups' ? classes.nav__link__active : ''}
          >
            Groups
          </Link>
        </div>

        <div className={classes.nav__link}>
          <Link
            href={'/products'}
            className={
              pathname === '/products' ? classes.nav__link__active : ''
            }
          >
            Products
          </Link>
        </div>

        <div className={classes.nav__link}>
          <Link
            href={'/users'}
            className={pathname === '/users' ? classes.nav__link__active : ''}
          >
            Users
          </Link>
        </div>

        <div className={classes.nav__link}>
          <Link
            href={'/settings'}
            className={
              pathname === '/settings' ? classes.nav__link__active : ''
            }
          >
            Settings
          </Link>
        </div>
      </nav>
    </div>
  );
};
