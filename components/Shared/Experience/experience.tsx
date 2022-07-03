import { FC } from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

interface ExperienceProps {
  company: string;
  role: string;
  timeFrame: string;
  companyLink: string;
  description: string[];
}

const Experience: FC<ExperienceProps> = ({
  company,
  role,
  timeFrame,
  companyLink,
  description,
}) => {
  return (
    <motion.div
      key={company}
      variants={{
        show: {
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.3,
          },
        },
        hide: {
          opacity: 0.5,
        },
      }}
      animate='show'
      initial='hide'
      className='flex gap-3'
    >
      <div>
        <TbExternalLink className='text-2xl  mt-1 text-secondary' />
      </div>
      <div className='text-white '>
        <div className='flex flex-col gap-2'>
          <div className='text-sm text-gray-500 flex items-center gap-2'>
            <a
              href={companyLink}
              target='_blank'
              rel='noreferrer'
              className=' text-lg  font-bold'
            >
              {company}
            </a>
          </div>
          <div className='text-gray-400 text-sm'>{role}</div>
          <span className='text-xs text-gray-500'>{timeFrame}</span>
        </div>
        <div className='md:w-[650px] mt-9 flex flex-col gap-2 text-gray-500'>
          {description.map((dsc, index) => {
            return <div key={index}>- {dsc}</div>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
