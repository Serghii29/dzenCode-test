import React from 'react';
import classes from '../../styles/header.module.scss';
import { Logo } from '../Logo';
import { SearchBar } from '../SearchBar';
import { TopMenu } from '../TopMenu';

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <SearchBar />
      <TopMenu />
    </header>
  );
};
