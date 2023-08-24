import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { AsideBar } from '@/components/AsideBar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dZENcode</title>
      </Head>

      <AsideBar />
    </>
  );
};

export default Home;
