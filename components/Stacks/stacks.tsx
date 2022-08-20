import { FC } from "react";
import Data from "../../lib/portfolioData";

interface StacksProps {}

const Stacks: FC<StacksProps> = () => {
  return (
    <div className='w-[400px] p-5'>
      <div className='font-bold text-sm mb-4 text-[#A76436] underline-offset-3'>
        RECENT TECHNOLOGIES
      </div>
      <div className='flex flex-wrap h-min justify-center'>
        {Data.recent_technologies.map((title, index) => {
          return (
            <div key={index} className='w-1/2 text-left mb-3 text-sm'>
              &#8594; {title}
            </div>
          );
        })}
      </div>
      <div className='my-5'>
        <div className=' text-sm mb-3 font-semibold text-[#A76436]'>
          MY CURRENT RESEARCH:
        </div>
        <span className='text-sm'>{Data.looking__into}</span>
      </div>
      {/* <div className='my-5'>
        <div className=' text-sm mb-3 font-semibold text-[#A76436]'>
          STATUS:
        </div>
        <span className='text-[13px]'>{Data.status}</span>
      </div> */}
    </div>
  );
};

export default Stacks;
