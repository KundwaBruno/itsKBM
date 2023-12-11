import { database } from '@/lib/firebase';
import avatarNameMaker from '@/lib/functions/abbrName';
import { IFeedbackSchema } from '@/lib/types/feedback';
import { ref, update } from 'firebase/database';
import { motion } from 'framer-motion';
import moment from 'moment';
import { FC, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Feedback: FC<IFeedbackSchema> = ({ body, createdAt, id, upVotes, name, downVotes }) => {
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
        <div className="w-10 h-10 flex items-center justify-center text-custom_gray dark:text-custom_white rounded-full border-2 border-custom_gray dark:border-custom_border_dark bg-background_light dark:bg-background_dark">
          {avatarNameMaker(`Anonyous ${name}`)}
        </div>
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <div className="text-sm dark:text-custom_white text-custom_black">{`@Anonymous ${name}`}</div>
            <div className="text-xs text-custom_gray">{moment(createdAt).fromNow()}</div>
          </div>
          <div>
            <div className="my-2 dark:text-custom_white text-custom_black md:text-base">{body}</div>
            <div className="flex items-center gap-4 text-xs">
              <div
                className="flex items-center cursor-pointer text-green-600 dark:text-green-400"
                onClick={incrementUpVotes}>
                <motion.span
                  key={upVotes}
                  variants={variants}
                  animate={'flip'}
                  initial="hide"
                  className="mr-2 ">
                  {upVotes}
                </motion.span>
                <span>
                  <FaArrowUp />
                </span>
              </div>
              <div
                className="flex items-center cursor-pointer text-red-600 dark:text-red-400"
                onClick={incrementDownVotes}>
                <motion.span
                  key={downVotes}
                  variants={variants}
                  animate={'flip'}
                  initial="hide"
                  className="mr-2 ">
                  {downVotes}
                </motion.span>
                <span>
                  <FaArrowDown />
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
