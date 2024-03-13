import FeebackSkeleton from '@/components/Skeletons/feedback';
import Button from '@/components/button';
import FeedbackWrapper from '@/components/feedback';
import Input from '@/components/input';
import PageWrapper from '@/components/pageWrapper';
import SectionHeader from '@/components/sectionHeader';
import SectionWrapper from '@/components/sectionWrapper';
import { database } from '@/lib/firebase';
import { IFeedbackSchema } from '@/lib/types/feedback';
import { nameByRace } from 'fantasy-name-generator';
import { onValue, push, query, ref, set } from 'firebase/database';
import { motion } from 'framer-motion';
import moment from 'moment';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { GiEmptyHourglass } from 'react-icons/gi';
import { HiX } from 'react-icons/hi';

const ITEMS_COUNT = 3;

const Feedback = () => {
  const [input, setInput] = useState<string>('');
  const [toast, setToast] = useState<{ show: boolean; body: string }>({
    show: false,
    body: '',
  });
  const [fbcks, setFbcks] = useState<IFeedbackSchema[]>();

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
    setToast({ show: false, body: '' });
  };

  const postFeedBack = () => {
    const name = nameByRace('angel', { gender: 'male' });
    const feedbackListRef = ref(database, 'feedbacks');
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
        setInput('');
      })
      .catch((e) => {
        showToast(e || 'Something went wrong please try again');
      });
  };

  const onChangeHanlder = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  }, []);

  useEffect(() => {
    const q = query(ref(database, 'feedbacks/'));
    onValue(q, (snapshot) => {
      const feedbacks = snapshot.val();
      const feedbackList = [];
      if (snapshot.exists()) {
        for (let id in feedbacks) {
          feedbackList.push({ ...feedbacks[id], id });
        }
      }
      feedbackList.reverse();

      setFbcks(feedbackList);
      setTotalItems(feedbackList.length);
    });
  }, []);

  return (
    <PageWrapper>
      <SectionWrapper className="pt-10 md:pt-16">
        <SectionHeader
          title="Leave a comment 💬"
          description=" Welcome to my comments page, Leave an anonymous comment, Could be anything 🙂. I would be very happy
            to hear from you."
        />
        <div className="w-11/12 m-auto md:w-[600px]">
          <Fragment>
            {!fbcks && <FeebackSkeleton />}
            {fbcks?.length === 0 && (
              <div className="text-gray-400 flex justify-center my-8">
                <div>
                  <div className="flex justify-center mb-3">
                    <GiEmptyHourglass className="text-6xl" />
                  </div>
                  <div className="text-xs text-center text-gray-600">
                    No feedbacks at the moment, <br /> Be the first to provide one by filling the
                    input below 😉
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
                className="mb-10">
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-full">
                    <Input
                      name="feedback"
                      value={input}
                      onChange={onChangeHanlder}
                      required
                      autoFocus
                    />
                  </div>
                  <Button disabled={!input}>Post</Button>
                </div>
              </form>
            )}

            {fbcks &&
              [...fbcks]?.slice(0, itemsPerPage)?.map((fb, index) => {
                return <FeedbackWrapper key={index} {...fb} />;
              })}
            {totalItems && itemsPerPage < totalItems && (
              <div className="text-center text-secondary my-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer text-xs underline underline-offset-4 text-primary"
                  onClick={incrementPagination}>
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
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Feedback;
