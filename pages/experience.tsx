import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ExperiencePage from "../components/Experience";

const Experience: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta property='og:title' content='Kundwa Bruno M.' />
        <meta
          property='og:image'
          content='https://itskbm.com/assets/images/landing.png'
        />
        <meta
          property='og:description'
          content='<b>Kundwa Bruno M.</b> is a software engineer who specializes in building digital experiences and solving problems on the web.'
        />
        <meta property='og:url' content='https://itskbm.com/' />
      </Head>
      <ExperiencePage />
    </Fragment>
  );
};

export default Experience;
