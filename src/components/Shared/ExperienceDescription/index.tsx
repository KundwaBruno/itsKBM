import { motion } from 'framer-motion';
import { FC } from 'react';
import { TbExternalLink } from 'react-icons/tb';

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
        <div className="dark:text-custom_white text-custom_black flex gap-2">
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-xl  font-semibold gap-5">
            {company}
          </a>
          <TbExternalLink className="text-2xl text-secondary " />
        </div>
        <div className="dark:text-custom_gray text-custom_black text-sm text-left mb-2">
          @{role}
        </div>
        <div className="text-xs text-custom_gray text-left uppercase ">{timeFrame}</div>
      </div>
      <div className=" flex flex-col gap-2 dark:text-custom_gray text-custom_black">
        {description.map((dsc, index) => {
          return (
            <div key={index} className="font-light text-left">
              - {dsc}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Experience;
