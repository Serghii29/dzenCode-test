import Head from 'next/head';
import React from 'react';
import { AsideBar } from '../AsideBar';
import { Header } from '../Header';
import classes from '../../styles/mainlayout.module.scss';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | dZENcode</title>
      </Head>

      <Header />
      <main className={classes.main_container}>
        <AsideBar />

        {children}
      </main>
    </>
  );
};
