import React, { FC, Fragment, ReactNode } from "react";
import NavigationBar from "../Nav";
import Footer from "../Footer";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <Fragment>
      <NavigationBar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default PageWrapper;
