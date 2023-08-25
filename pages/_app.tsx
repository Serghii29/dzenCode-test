import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/normalize.scss';
import '../styles/main.scss';
import { store } from '../store/store';
import { Provider } from 'react-redux';

import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
