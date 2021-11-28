import React from 'react';
import type { AppProps } from 'next/app';

import Layout from '../components/layout';

import '../styles/global.css';
import '../styles/Header.css';
import '../styles/Container.css';
import '../styles/PswGen.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
