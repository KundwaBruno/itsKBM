import Home from '@/components/Home';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kundwa Bruno</title>
      </Head>
      <Home />;
    </Fragment>
  );
};

export default HomePage;
