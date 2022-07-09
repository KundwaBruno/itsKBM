import React, { FC, useEffect, useState } from "react";
import Button from "../Shared/Button";
import FeedbackWrapper from "../Shared/Feedback";
import Input from "../Shared/Input";
import PageWrapper from "../Shared/PageWrapper";
import moment from "moment";
import { database, ref, set, push, onValue } from "../../lib/firebase";
import { HiX } from "react-icons/hi";
import { GiEmptyHourglass } from "react-icons/gi";
import FeebackSkeleton from "../Shared/Skeletons/feedback";
import { RiSendPlaneFill } from "react-icons/ri";

interface FeedbackProps {}

const Feedback: FC<FeedbackProps> = () => {
  const [input, setInput] = useState<string>("");
  const [toast, setToast] = useState<{ show: boolean; body: string }>({
    show: false,
    body: "",
  });
  const isNotNew = moment() > moment("2022-08-10");

  const showToast = (body: string) => {
    setToast({ show: true, body });
  };

  const hideToast = () => {
    setToast({ show: false, body: "" });
  };

  const [fbcks, setFbcks] = useState<
    {
      body: string;
      id: string;
      upVotes: number;
      downVotes: number;
      createdAt: string;
    }[]
  >();

  const feedbackListRef = ref(database, "feedbacks");

  const postFeedBack = () => {
    const date = moment(new Date()).format();
    const newFeedbackRef = push(feedbackListRef);
    set(newFeedbackRef, {
      body: input,
      createdAt: date,
      upVotes: 0,
      downVotes: 0,
    })
      .then(() => {
        setInput("");
      })
      .catch((e) => {
        showToast(e || "Something went wrong please try again");
      });
  };

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  useEffect(() => {
    onValue(feedbackListRef, (snapshot) => {
      const feedbacks = snapshot.val();
      const feedbackList = [];
      if (snapshot.exists()) {
        for (let id in feedbacks) {
          feedbackList.push({ ...feedbacks[id], id });
        }
      }
      setFbcks(feedbackList);
    });
  }, []);

  return (
    <PageWrapper>
      <div className='flex flex-col w-[600px]'>
        <div className='text-white font-bold text-4xl my-6 flex items-center gap-3'>
          <span>4. Feedback 🚀</span>{" "}
          {!isNotNew && (
            <span className='text-xs px-2 font-normal text-yellow-500 border rounded-full'>
              New
            </span>
          )}
        </div>
        <div className='text-gray-400 mb-10 text-sm border-b pb-12'>
          Welcome to my feedback section, Feel free to provide complete
          anonymous feedbacks, tips or anything that could help me improve my
          website or personal self. I would be very happy to hear or learn from
          you.
        </div>
        <div className='w-[90%] m-auto'>
          {!fbcks && <FeebackSkeleton />}
          {fbcks?.length === 0 && (
            <div className='text-gray-400 flex justify-center my-8'>
              <div>
                <div className='flex justify-center mb-3'>
                  <GiEmptyHourglass className='text-6xl' />
                </div>
                <div className='text-xs text-center text-gray-600'>
                  No feedbacks at the moment, <br /> Be the first to provide one
                  by filling the input below 😉
                </div>
              </div>
            </div>
          )}
          {fbcks?.map((fb, index) => {
            return (
              <FeedbackWrapper
                key={index}
                id={fb.id}
                body={fb.body}
                upVotes={fb.upVotes}
                downVotes={fb.downVotes}
                date={fb.createdAt}
              />
            );
          })}
          {/* <div className='text-center text-secondary my-4'>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className='cursor-pointer text-xs underline underline-offset-4'
          >
            Load more
          </motion.button>
        </div> */}
          {toast.show && (
            <div className='text-red-300 text-xs flex justify-center'>
              <div className='flex items-center gap-3'>
                <span>{toast.body}</span>
                <span className='cursor-pointer' onClick={hideToast}>
                  <HiX color='#E79797' className='text-sm' />
                </span>
              </div>
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              postFeedBack();
            }}
            className='mb-16'
          >
            <div className='flex gap-3 mt-14'>
              <div className='w-full'>
                <Input value={input} onChange={onChangeHanlder} />
              </div>
              <div>
                <Button disabled={!input} size='small'>
                  <RiSendPlaneFill className='text-lg' />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Feedback;
