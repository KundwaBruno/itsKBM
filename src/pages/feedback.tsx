import FeedbackPage from '@/components/Feedback/index';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

const Feedback: NextPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="Feedback | Kundwa Bruno"
        description={`Provide complete anonymous feedbacks or insights, would love to hear or learn from you!`}
      />
      <FeedbackPage />
    </Fragment>
  );
};

export default Feedback;
