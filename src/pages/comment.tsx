import CommentPage from '@/components/Comment/index';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

const Comment: NextPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="Comment | Kundwa Bruno"
        description={`Leave a comment, I would love to hear or learn from you!`}
      />
      <CommentPage />
    </Fragment>
  );
};

export default Comment;
