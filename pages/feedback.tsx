import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import FeedbackPage from "../components/Feedback";

const Feedback: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta property='og:title' content='Feedback' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dxyu6elli/image/upload/v1656868743/landing_mybpnj.png'
        />
        <meta
          property='og:description'
          content='<b>Kundwa Bruno M.</b> is a software engineer who specializes in building digital experiences and solving problems on the web.'
        />
        <meta property='og:url' content='https://itskbm.com/' />
        <title>Coming soon</title>
      </Head>
      <FeedbackPage />
    </Fragment>
  );
};

export default Feedback;
