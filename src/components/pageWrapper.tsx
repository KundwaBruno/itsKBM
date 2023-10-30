import Footer from '@/components/footer';
import NavigationBar from '@/components/nav';
import React, { FC, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="dark:bg-black bg-white">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
