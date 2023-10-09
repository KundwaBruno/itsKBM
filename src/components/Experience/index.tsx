import { BriefcaseIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import Data from '../../lib/portfolioData';
import ExperienceBox from '../Shared/ExperienceDescription';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      viewport={{ once: true }}
      id="experience"
      className="w-11/12 md:w-1/3 mx-auto py-20">
      <h1 className="font-extrabold text-center text-3xl md:text-5xl ">Experience</h1>
      <div className="dark:text-custom_white text-custom_black mb-20 mt-3 text-center">
        Below is few of my recent relevant technical experience
      </div>
      <div className="divide-y">
        {Data.experience.slice(0, 2).map((ex, index) => {
          return (
            <ExperienceBox
              key={index}
              company={ex.company}
              companyLink={ex.companyLink}
              role={ex.position}
              timeFrame={ex.timeFrame}
              description={ex.description}
            />
          );
        })}
      </div>
      <a href="/resume.pdf" target="_blank">
        <div className="font-bold underline">View full resume</div>
      </a>
    </motion.section>
  );
};

export default Experience;
