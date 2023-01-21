import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import HomePage from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import PageWrapper from "../components/Shared/PageWrapper";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kundwa Bruno</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dxyu6elli/image/upload/v1672685054/Screenshot_2023-01-02_at_20.43.14_ye0ihn.png"
        />
        <meta property="og:title" content="Kundwa Bruno Materne" />

        <meta
          property="og:description"
          content="<b>Kundwa Bruno</b> is a passionate software engineer, familiar with a wide range of programming languages and frameworks and specializes in developing and maintaining websites of all sizes and complexity."
        />
        <meta property="og:url" content="https://itskbm.com/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <PageWrapper>
        <HomePage />
        <About />
        <Experience />
        <Contact />
      </PageWrapper>
    </Fragment>
  );
};

export default Home;
