import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import HomePage from "../components/Home";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta property='og:title' content='Kundwa Bruno' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dxyu6elli/image/upload/v1656868743/landing_mybpnj.png'
        />
        <meta
          property='og:description'
          content='<b>Kundwa Bruno Materne</b> is a web developer who specializes in building digital experiences and solving problems on the web.'
        />
        <meta property='og:url' content='https://itskbm.com/' />
        <title>Kundwa Bruno</title>
      </Head>
      <div>
        <HomePage />
      </div>
    </Fragment>
  );
};

export default Home;
