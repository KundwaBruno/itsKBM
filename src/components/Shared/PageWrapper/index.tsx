import React, { FC, Fragment, ReactNode } from "react";
import NavigationBar from "../Nav";
import Footer from "../Footer";
import Head from "next/head";

interface PageWrapperProps {
  children: ReactNode;
  title: string;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <NavigationBar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default PageWrapper;
