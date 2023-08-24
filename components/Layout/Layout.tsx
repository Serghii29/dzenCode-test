import Head from 'next/head';
import React from 'react';
import { AsideBar } from '../AsideBar';

type Props = {
  children: any;
  title: string;
};

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title} | dZENcode</title>
      </Head>

      <main>
        <AsideBar />

        {children}
      </main>
    </>
  );
};
