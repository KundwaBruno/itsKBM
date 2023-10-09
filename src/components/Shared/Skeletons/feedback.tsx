import { FC } from 'react';

interface FeedbackProps {}

const FeedbackSkeleton: FC<FeedbackProps> = () => {
  return (
    <div>
      {new Array(3).fill(0).map((item, index) => {
        return (
          <div key={index} className="my-8 animate-pulse rounded-lg p-3">
            <div className="flex flex-1 gap-3">
              <div className="w-14 h-12 rounded-full bg-gray-300" />
              <div className="w-full">
                <div className="w-1/4 h-3 rounded-full bg-gray-300" />
                <div className="w-1/2 h-3 rounded-full bg-gray-300 my-5" />
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
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
