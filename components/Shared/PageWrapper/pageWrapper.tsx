import React, { FC, ReactNode } from "react";
import NavigationBar from "../Nav";
import Footer from "../Footer";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <NavigationBar />
      <div className='flex-1 w-full flex items-center md:justify-center px-6'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
