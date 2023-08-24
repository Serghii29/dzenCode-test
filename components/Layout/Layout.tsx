import Head from 'next/head';
import React from 'react';
import { AsideBar } from '../AsideBar';
import { Header } from '../Header';

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

      <main>
        <Header />
        <AsideBar />

        {children}
      </main>
    </>
  );
};
