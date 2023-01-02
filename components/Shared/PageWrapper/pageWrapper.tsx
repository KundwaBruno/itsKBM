import React, { FC, ReactNode } from "react";
import NavigationBar from "../Nav";
import Footer from "../Footer";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="h-fit">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
