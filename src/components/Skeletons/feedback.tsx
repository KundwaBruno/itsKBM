import { FC } from 'react';

interface FeedbackProps {}

const FeedbackSkeleton: FC<FeedbackProps> = () => {
  return (
    <div>
      {new Array(3).fill(0).map((_, index) => {
        return (
          <div key={index} className="mb-8">
            <div className="flex flex-1 gap-1">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-500" />
              <div className="w-full flex-1">
                <div className="w-1/4 h-2 rounded-full bg-gray-300 dark:bg-gray-500" />
                <div className="w-1/2 h-2.5 rounded-full bg-gray-300 dark:bg-gray-500 my-5" />
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
