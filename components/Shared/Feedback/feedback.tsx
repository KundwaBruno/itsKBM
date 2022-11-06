import { FC, useState } from "react";
import Icon from "../Icon";
import { motion } from "framer-motion";
import moment from "moment";
import { database, ref, update } from "../../../lib/firebase";
import Avatar from "../Avatar";
import { nameByRace } from "fantasy-name-generator";

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

  const elfHero = nameByRace("angel", { gender: "male" });
  const enemyDemon = nameByRace("demon");

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
      className="text-gray-400 text-sm flex flex-col gap-3 my-2"
    >
      <div className="text-white leading-6 backdrop-blur-lg rounded-lg drop-shadow-lg bg-opacity-10 bg-white p-3 text-sm">
        <div className="text-secondary text-right text-xs mb-3 flex items-center justify-between">
          <div>
            <Avatar name={elfHero} />
          </div>
          <div>{moment(date).fromNow()}</div>
        </div>
        <div className="mb-4">{body}</div>
        <div className="flex items-center gap-4 text-xs">
          <div
            className="flex items-center cursor-pointer"
            onClick={incrementUpVotes}
          >
            <motion.span
              key={upVotes}
              variants={variants}
              animate={"flip"}
              initial="hide"
              className="mr-2 text-green-300"
            >
              {upVotes}
            </motion.span>
            <span>
              <Icon name="Up" color={upVoted ? "#87EEAB" : ""} />
            </span>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={incrementDownVotes}
          >
            <motion.span
              key={downVotes}
              variants={variants}
              animate={"flip"}
              initial="hide"
              className="mr-2 text-red-300"
            >
              {downVotes}
            </motion.span>
            <span>
              <Icon name="Down" color={downVoted ? "#E79797" : ""} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
