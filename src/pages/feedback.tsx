import FeedbackPage from '@/components/Feedback/index';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const Feedback: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/drqtk4af2/image/upload/v1697038327/meta_kismhm.png"
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
        <title>KBM | Feed back</title>
      </Head>
      <FeedbackPage />
    </Fragment>
  );
};

export default Feedback;
