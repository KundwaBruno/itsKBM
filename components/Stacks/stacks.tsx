import { FC } from "react";
import Data from "../../lib/portfolioData";

interface StacksProps {}

const Stacks: FC<StacksProps> = () => {
  return (
    <div className='w-[400px]'>
      <div className='text-center'>
        <div className='my-10'>
          <div className='font-bold text-2xl mb-10 text-[#A76436] underline underline-offset-3'>
            Recent technologies.
          </div>
          <div className='flex flex-wrap h-min justify-center'>
            {Data.tech_stacks.map((title, index) => {
              return (
                <div
                  key={index}
                  className='bg-gray-200 px-2 p-1 mr-2 rounded-lg h-min mb-5 text-sm'
                >
                  <i className={` ${title.icon} mr-3`} />
                  {title.title}
                </div>
              );
            })}
          </div>
          <div className='text-center my-5'>
            <div className=' text-sm mb-3 font-semibold text-[#A76436]'>
              Currently looking into:
            </div>
            <span className='text-sm'>{Data.looking__into}</span>
          </div>
          <div className='text-center my-5'>
            <div className=' text-sm mb-3 font-semibold text-[#A76436]'>
              Status:
            </div>
            <span className='text-[13px]'>{Data.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
