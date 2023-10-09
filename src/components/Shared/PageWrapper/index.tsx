import Head from 'next/head';
import React, { FC, Fragment, ReactNode } from 'react';
import Footer from '../Footer';
import NavigationBar from '../Nav';

interface PageWrapperProps {
  children: ReactNode;
  title: string;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, title }) => {
  return (
    <div className="dark:bg-black bg-white">
      <Head>
        <title>{title}</title>
      </Head>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
