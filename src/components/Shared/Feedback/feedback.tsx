import { motion } from 'framer-motion';
import moment from 'moment';
import { FC, useState } from 'react';
import { database, ref, update } from '../../../lib/firebase';
import avatarNameMaker from '../../../lib/functions/abbrName';
import { FeedbackSchema } from '../../../lib/types/feedback';
import Avatar from '../Avatar';
import Icon from '../Icon';

const Feedback: FC<FeedbackSchema> = ({ body, createdAt, id, upVotes, name, downVotes }) => {
  const [upVoted, setUpVoted] = useState<boolean>(false);
  const [downVoted, setDownVoted] = useState<boolean>(false);

  const feedbackRef = ref(database, `feedbacks/${id}`);

  const variants = {
    flip: {
      y: 0,
      transition: {
        ease: 'easeOut',
      },
    },
    hide: {
      y: -15,
    },
  };

  const changeVotesAction = (data: { upVotes?: number; downVotes?: number }) => {
    update(feedbackRef, data)
      .then()
      .catch((e) => {
        alert('Something went wrong, Please try again');
      });
  };

  const incrementUpVotes = () => {
    if (upVoted) {
      changeVotesAction({ upVotes: upVotes - 1 });
      setUpVoted(false);
    } else {
      changeVotesAction({ upVotes: upVotes + 1 });
      setUpVoted(true);
    }
    if (downVoted && downVotes > 0) {
      changeVotesAction({ downVotes: downVotes - 1 });
      setDownVoted(false);
    }
  };

  const incrementDownVotes = () => {
    if (downVoted) {
      changeVotesAction({ downVotes: downVotes - 1 });
      setDownVoted(false);
    } else {
      changeVotesAction({ downVotes: downVotes + 1 });
      setDownVoted(true);
    }
    if (upVoted && upVotes > 0) {
      changeVotesAction({ upVotes: upVotes - 1 });
      setUpVoted(false);
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="text-sm flex flex-col gap-3 my-8 w-full">
      <div className="flex gap-2">
        <div className="w-10 h-10 flex items-center justify-center text-custom_white rounded-full border border-black bg-background">
          {avatarNameMaker(`Anonyous ${name}`)}
        </div>
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <div className="text-sm dark:text-custom_white text-custom_black">{`@Anonymous ${name}`}</div>
            <div className="text-xs dark:text-custom_white text-custom_gray">
              {moment(createdAt).fromNow()}
            </div>
          </div>
          <div>
            <div className="my-2 dark:text-custom_white text-custom_black text-base">{body}</div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center cursor-pointer" onClick={incrementUpVotes}>
                <motion.span
                  key={upVotes}
                  variants={variants}
                  animate={'flip'}
                  initial="hide"
                  className="mr-2 text-green-600">
                  {upVotes} upvotes
                </motion.span>
                <span>
                  <Icon name="Up" color={upVoted ? '#87EEAB' : ''} />
                </span>
              </div>
              <div className="flex items-center cursor-pointer" onClick={incrementDownVotes}>
                <motion.span
                  key={downVotes}
                  variants={variants}
                  animate={'flip'}
                  initial="hide"
                  className="mr-2 text-red-600">
                  {downVotes}
                </motion.span>
                <span>
                  <Icon name="Down" color={downVoted ? '#E79797' : ''} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
