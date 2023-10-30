import { FC } from 'react';

interface FeedbackProps {}

const FeedbackSkeleton: FC<FeedbackProps> = () => {
  return (
    <div>
      {new Array(3).fill(0).map((item, index) => {
        return (
          <div key={index} className="my-8 rounded-lg p-3">
            <div className="flex flex-1 gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-500" />
              <div className="w-full flex-1">
                <div className="w-1/4 h-2 rounded-full bg-gray-300 dark:bg-gray-500" />
                <div className="w-1/2 h-2 rounded-full bg-gray-300 dark:bg-gray-500 my-5" />
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-4 h-2 rounded-full bg-gray-300 dark:bg-gray-500" />
                  <div className="w-4 h-2 rounded-full bg-gray-300 dark:bg-gray-500" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackSkeleton;
