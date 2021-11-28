import React from 'react';
import type { NextPage } from 'next';

import PswGen from '../components/PswGen';

import { Data } from '../interfaces/data';

const Page: NextPage = () => {
  const data: Data = {
    len: 8,
    lowChars: true,
    upChars: false,
    numbers: false,
    symbols: false,
  };

  return <PswGen {...data} />;
};

export default Page;
