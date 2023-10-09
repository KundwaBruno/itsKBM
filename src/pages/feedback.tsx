import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import FeedbackPage from "../components/Feedback";

const Feedback: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dxyu6elli/image/upload/v1672685054/Screenshot_2023-01-02_at_20.43.14_ye0ihn.png"
        />
        <meta property="og:title" content="Feedback" />
        <meta
          property="og:description"
          content="Contribute to the improvement of Kundwa Bruno's personal portfolio by providing insights."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta property="og:url" content="https://itskbm.com/feedback" />
        <title>Feeback</title>
      </Head>
      <FeedbackPage />
    </Fragment>
  );
};

export default Feedback;
