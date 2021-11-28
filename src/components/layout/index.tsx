import React from 'react';
import Head from 'next/head';

import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="Free password generator" />
        <meta name="keywords" content="password, generator, TS, JS, NEXTJS" />
      </Head>
      <Header />
      {children}
    </>
  );
}
