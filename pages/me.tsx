import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Me from "../components/Me";
import Data from "../lib/portfolioData";

const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta property='og:title' content='About' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dxyu6elli/image/upload/v1656868743/landing_mybpnj.png'
        />
        <meta property='og:description' content={Data.about.bio} />
        <meta property='og:url' content='https://itskbm.com/me' />
        <title>About</title>
      </Head>
      <Me />
    </Fragment>
  );
};

export default About;
