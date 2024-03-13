import { motion } from 'framer-motion';
import { FC } from 'react';
import { TbExternalLink } from 'react-icons/tb';

interface ExperienceProps {
  company: string;
  role: string;
  timeFrame: string;
  companyLink: string;
  description: string[];
  position: number;
}

const Experience: FC<ExperienceProps> = ({
  company,
  role,
  timeFrame,
  companyLink,
  description,
  position,
}) => {
  return (
    <motion.div
      key={company}
      variants={{
        show: {
          opacity: 1,
          transition: {
            ease: 'easeInOut',
            duration: 0.3,
          },
        },
        hide: {
          opacity: 0.5,
        },
      }}
      animate="show"
      initial="hide"
      className="py-8">
      <div className="flex flex-col mb-5">
        <a
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className="font-semibold gap-5 w-max mx-auto md:mx-0">
          <div className="flex gap-2 hover:text-primary text-lg">
            <span>{company}</span>
            <TbExternalLink className="text-2xl text-secondary " />
          </div>
        </a>
        <div className="dark:text-custom_gray text-custom_black text-center md:text-left mt-1 text-sm">
          @{role}
        </div>
      </div>
      <div className=" flex flex-col gap-2 dark:text-custom_gray text-custom_black">
        {description.map((dsc, index) => {
          return (
            <div key={index} className=" text-left">
              - {dsc}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Experience;
