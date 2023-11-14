import Footer from '@/components/footer';
import NavigationBar from '@/components/nav';
import { Analytics } from '@vercel/analytics/react';
import React, { FC, Fragment, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="dark:bg-black bg-white">
        <NavigationBar />
        {children}
        <Analytics />
        <Footer />
      </div>
    </Fragment>
  );
};

export default PageWrapper;
