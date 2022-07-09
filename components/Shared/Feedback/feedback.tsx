import { FC, useMemo, useState } from "react";
import Icon from "../Icon";
import { motion } from "framer-motion";
import moment from "moment";
import { database, ref, set, update } from "../../../lib/firebase";

interface FeedbackProps {
  body: string;
  date: string;
  id: string;
  upVotes: number;
  downVotes: number;
}

const Feedback: FC<FeedbackProps> = ({
  body,
  date,
  id,
  upVotes,
  downVotes,
}) => {
  const [upVoted, setUpVoted] = useState<boolean>(false);
  const [downVoted, setDownVoted] = useState<boolean>(false);

  const feedbackRef = ref(database, `feedbacks/${id}`);

  const variants = {
    flip: {
      y: 0,
      transition: {
        ease: "easeOut",
      },
    },
    hide: {
      y: -15,
    },
  };

  const changeVotesAction = (data: {
    upVotes?: number;
    downVotes?: number;
  }) => {
    update(feedbackRef, data)
      .then()
      .catch((e) => {
        alert("Something went wrong, Please try again");
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
      className='text-gray-400 text-sm flex flex-col gap-3 my-5'
    >
      <div className='text-secondary text-right text-xs'>
        {moment(date).fromNow()}
      </div>
      <div className='text-white'>{body}</div>
      <div className='flex items-center gap-4'>
        <div
          className='flex items-center cursor-pointer'
          onClick={incrementUpVotes}
        >
          <motion.span
            key={upVotes}
            variants={variants}
            animate={"flip"}
            initial='hide'
            className='mr-2 text-green-300'
          >
            {upVotes}
          </motion.span>
          <span>
            <Icon name='Up' color={upVoted ? "#87EEAB" : ""} />
          </span>
        </div>
        <div
          className='flex items-center cursor-pointer'
          onClick={incrementDownVotes}
        >
          <motion.span
            key={downVotes}
            variants={variants}
            animate={"flip"}
            initial='hide'
            className='mr-2 text-red-300'
          >
            {downVotes}
          </motion.span>
          <span>
            <Icon name='Down' color={downVoted ? "#E79797" : ""} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
