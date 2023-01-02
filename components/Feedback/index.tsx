import React, { FC, Fragment, useCallback, useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import { FeedbackSchema } from "../../lib/types/feedback";
import { nameByRace } from "fantasy-name-generator";
import { query } from "firebase/database";

interface FeedbackProps {}

const ITEMS_COUNT = 3;

const Feedback: FC<FeedbackProps> = () => {
  const [input, setInput] = useState<string>("");
  const [toast, setToast] = useState<{ show: boolean; body: string }>({
    show: false,
    body: "",
  });
  const [fbcks, setFbcks] = useState<FeedbackSchema[]>();

  const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_COUNT);
  const [totalItems, setTotalItems] = useState<number>();

  const incrementPagination = () => {
    if (totalItems && itemsPerPage < totalItems) {
      setItemsPerPage(itemsPerPage + ITEMS_COUNT);
    }
  };

  const showToast = (body: string) => {
    setToast({ show: true, body });
  };

  const hideToast = () => {
    setToast({ show: false, body: "" });
  };

  const postFeedBack = () => {
    const name = nameByRace("angel", { gender: "male" });
    const feedbackListRef = ref(database, "feedbacks");
    const date = moment(new Date()).format();
    const newFeedbackRef = push(feedbackListRef);
    set(newFeedbackRef, {
      body: input,
      createdAt: date,
      upVotes: 0,
      downVotes: 0,
      name,
    })
      .then(() => {
        setInput("");
      })
      .catch((e) => {
        showToast(e || "Something went wrong please try again");
      });
  };

  const onChangeHanlder = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInput(value);
    },
    []
  );

  useEffect(() => {
    // const feedbackListRef = ref(database, "feedbacks");
    const q = query(ref(database, "feedbacks/"));
    onValue(q, (snapshot) => {
      const feedbacks = snapshot.val();
      const feedbackList = [];
      if (snapshot.exists()) {
        for (let id in feedbacks) {
          feedbackList.push({ ...feedbacks[id], id });
        }
      }
      setFbcks(feedbackList);
      setTotalItems(feedbackList.length);
    });
  }, []);

  return (
    <PageWrapper>
      <section className="flex justify-center items-center ">
        <div className="w-11/12 m-auto md:w-[600px]">
          <div className="text-white font-bold text-4xl my-6 flex items-center justify-center gap-3">
            <h1 className="leading-[5rem] font-extrabold tracking-tighter gradient-text text-3xl md:text-5xl">
              Feedback
            </h1>
          </div>
          <div className="text-gray-400 mb-10 border-b pb-12 leading-6 text-center">
            Welcome to my feedback section, Feel free to provide complete
            anonymous feedbacks, tips or anything that could help me improve my
            website or personal self. I would be very happy to hear or learn
            from you.
          </div>
          <Fragment>
            {!fbcks && <FeebackSkeleton />}
            {fbcks?.length === 0 && (
              <div className="text-gray-400 flex justify-center my-8">
                <div>
                  <div className="flex justify-center mb-3">
                    <GiEmptyHourglass className="text-6xl" />
                  </div>
                  <div className="text-xs text-center text-gray-600">
                    No feedbacks at the moment, <br /> Be the first to provide
                    one by filling the input below 😉
                  </div>
                </div>
              </div>
            )}
            {fbcks && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  postFeedBack();
                }}
                className="mb-10"
              >
                <div className="flex gap-3 mt-2">
                  <div className="w-full">
                    <Input value={input} onChange={onChangeHanlder} />
                  </div>
                  <div>
                    <Button disabled={!input}>Post</Button>
                  </div>
                </div>
              </form>
            )}

            {fbcks &&
              [...fbcks]
                .sort(
                  (a: any, b: any) =>
                    new Date(b?.createdAt).getTime() -
                    new Date(a?.createdAt).getTime()
                )
                ?.slice(0, itemsPerPage)
                ?.map((fb, index) => {
                  return <FeedbackWrapper key={index} {...fb} />;
                })}
            {totalItems && itemsPerPage < totalItems && (
              <div className="text-center text-secondary my-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer text-xs underline underline-offset-4"
                  onClick={incrementPagination}
                >
                  Load more
                </motion.button>
              </div>
            )}
            {toast.show && (
              <div className="text-red-300 text-xs flex justify-center">
                <div className="flex items-center gap-3">
                  <span>{toast.body}</span>
                  <span className="cursor-pointer" onClick={hideToast}>
                    <HiX color="#E79797" className="text-sm" />
                  </span>
                </div>
              </div>
            )}
          </Fragment>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Feedback;
