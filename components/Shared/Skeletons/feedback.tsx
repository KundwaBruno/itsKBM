import { FC } from "react";

interface FeedbackProps {}

const FeedbackSkeleton: FC<FeedbackProps> = () => {
  return (
    <div>
      {new Array(3).fill(0).map((item, index) => {
        return (
          <div key={index} className='my-8 animate-pulse'>
            <div className='flex justify-end mb-3'>
              <div className='w-[150px] h-[10px]  bg-gray-600 rounded-lg'></div>
            </div>
            <div>
              <div className='w-full h-[13px] bg-gray-600 rounded-lg mb-2'></div>
              <div className='w-[80%] h-[13px] bg-gray-600 rounded-lg mb-2'></div>
              <div className='w-[50%] h-[13px] bg-gray-600 rounded-lg'></div>
            </div>

            <div className='flex items-center gap-3 mt-3'>
              <div className='w-[15px] h-[15px] bg-gray-600 rounded-lg'></div>
              <div className='w-[15px] h-[15px] bg-gray-600 rounded-lg'></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackSkeleton;
